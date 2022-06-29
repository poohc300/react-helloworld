#  리액트 라이프 사이클
리액트는 컴포넌트 기반의 View를 중심으로 한 라이브러리이다
그러다보니 각각의 컴포넌트에는 라이프 사이클이 존재한다
컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이난다

![alt text](https://jistol.github.io/assets/img/frontend/react-lifecycle-methods/2.png)

## 라이프 사이클의 분류
크게 세가지 유형으로 나눌 수 있다
1. 생성될 때
2. 업데이트 될 때
3. 제거될 때
이를 리액트에서는 **Mount**, **Update**, **Unmount** 라고 한다
### 마운트
마운트는 DOM이 생성되고 웹 브라우저 상에서 나타나는 것을 뜻하고 반대로 언마운트는 DOM에서 제거되는 것을 뜻한다
### 업데이트
업데이트는 4가지 상황에서 발생한다
1. Props가 바뀔 때
2. State가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거 할 때

## 라이프 사이클 메서드
### Constructor
생성자이다. 자바와 마찬가지로 컴포넌트를 만들 때 처음으로 실행된다
이 메서드에서는 초기 state를 정할 수 있다
```Javascript
    // class
    class Example extends React.Component {
        constructor(props) {
            super(props);
            this.state = { count : 0 }; 
        }
    }
    // Hooks
    const Example = () => {
        const [count, setCount] = useState(0);
    }
```
클래스형에서는 초기 state를 정할 때 constructor를 사용해야 한다
하지만 Hook에서는 useState hook을 사용하면 초기 상태를 쉽게 설정해줄 수 있다
### getDerivedStateFromProps
이 메서드는 리액트 16.3 버전 이후에 생긴 메서드이다
Props에서 받아온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트 될 때 호출된다
```javascript
    // class
    class Example extends React.Component {
        static getDerivedStateFromProps(nextProps, prevState){
            if(nextProps.value !== prevState.value){
                return { value : nextProps.value }
            }
        }
        return null
    }
```
### shouldComponentUpdate
이 메서드는 props나 state를 변경했을 때, 리렌더링을 할지 말지 결정하는 메서드이다. 이 메서드에서는 반드시 true나 false를 반환해야한다. 이 메서드는 오직 성능 최적화만을 위한 것이며 렌더링 목적을 방지하는 목적으로 사용하게 된다면 버그로 이어질 수 있다
```javascript
    //class
    class Example extends React.Component {
        shouldComponentUpdate(nextProps) {
            return nextProps.value !== this.props.value
        }
    }

    // hooks
    const Example = React.memo(() => {
            ...
        },
        (prevProps, nextProps) => {
            return nextProps.value === prevProps.value
        }
    )
```
클래스형도 보통은 PureComponent를 추천한다고 하고 Hooks에서도 props는 React.memo, state는 useMemo를 활용하면 렌더링 성능을 개선할 수 있다

### render
가장 기초적인 메서드이자 가장 중요한 메서드이다. 컴포넌트를 렌더링할 때 필요한 메서드로 유일한 필수 메서드이기도 하다. 함수형 컴포넌트에서는 render를 안쓰고도 컴포넌트를 렌더링 할 수 있다.
```javascript
    //class
    class Example extends React.Component{
        render() {
            return <div>컴포넌트</div>
        }
    }

    //hook
    const Example = () => {
        return <div>컴포넌트</div>
    }
```
### getSnapshotBeforeUpdate
이 메서드는 render에서 만들어진 결과가 브라우저에 실제로 반영되기 직전에 호출된다. 사용예제를 하나 들어본다면 채팅화면에서 스크롤 위치를 따로 처리하는 작업이 필요한 UI를 꼽을 수 있겠다
```javascript
    class Example extends React.Component {
        getSnapshotBeforeUpdate(prevProps, prevState) {
            if (prevProps.list.length < this.props.list.length) {
                const list = this.listRef.current
                return list.scrollHeight - list.scrollTop
            }
            return null
        }
    }
```
### componentDidMount
이 메서드는 컴포넌트를 만들고 첫 렌더링을 마친 후 실행한다. 함수형 Hook 에서는 useEffect를 활용하여 다음의 기능을 구현할 수 있다
```javascript
    // class
    class Example extends React.Component {
        componentDidMount() {
            ...
        }
    }

    // hook
    const Example = () => {
        useEffect(() => {
            ...
        }, []);
    }
```

### componentDidUpdate
리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로 DOM 관련 처리를 해도 문제없다
```javascript
    //class
    class Example extends React.Component {
        componentDidUpdate(prevProps, prevState) {
            ...
        }
    }

    // hook
    const Examle = () => {
        useEffect(() => {

        });
    }
```
### componentWillUnmount
이 메서드에서는 컴포넌트를 DOM에서 제거할 때 실행한다. **componentDidMount**에서 등록한 이벤트가 있다면 여기서 제거 작업을 해야한다. 함수형 컴포넌트에서는 useEffectCleanUp 함수를 통해 해당 메서드를 구현할 수 있다
```javascript
    // class
    class Example extends React.Component {
        componentWillUnmount() {
            ...
        }
    }

    // hook
    const Example = () => {
        useEffect(() => {
            return () => {
                ...
            }
        }, []);
    }
```

### componentDidCatch
이 메서드는 컴포넌트 렌더링 도중에 에러가 발생했을 때 어플리케이션이 멈추지 않고 오류 UI를 보여줄 수 있게 해준다
```javascript
    // class
    class Example extends React.Component {
        componentDidCatch(error, info) {
            console.log("에러가 발생했습니다");
        }
    }
```