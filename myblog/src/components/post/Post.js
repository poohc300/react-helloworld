import React from "react";
import './Post.css';

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h3>제목: 테스트</h3>
                <h3>내용: 테스트</h3>
                <h3>작성시간: 테스트</h3>
            </div>
        )
    }
}

export default Post;