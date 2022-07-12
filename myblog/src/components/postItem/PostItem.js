import React from "react";
import './PostItem.css';

class PostItem extends React.Component {
    render() {
        return (
            <div className="post-items">
                <button className="post-items-category">
                    CSS / Javascript 
                </button> 
                <div className="post-items-date">
                    2022년 7월 12일 화요일 오전 11시 30분
                </div>
                <br />
                <div className="post-items-title">
                    Font Weight 속성
                </div>
                <br />
                <div className="post-items-contents">
                font-weight CSS 속성은 폰트(font)의 가중치(weight)나 굵기(boldness)를 명시한다. 몇몇 폰트들은 normal 나 bold 일 때만 가능하다. 
                </div>
            </div>
        )
    }
}

export default PostItem;