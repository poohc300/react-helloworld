import React from "react";
import Post from '../../components/post/Post';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            
           
            <div className="home">
                <div className="home-content">
                    안녕하십니까 Jeremy의 블로그에 오신 것을 환영합니다
                </div>
                <Post />
            </div>
        )
    }
}

export default Home;