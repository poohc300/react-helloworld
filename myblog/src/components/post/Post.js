import React from "react";
import './Post.css';
import PostItem from '../postItem/PostItem';

class Post extends React.Component {
    render() {
        return (
            <div className="posts">
                <div className="posts-container">
                    <div className="posts-wrapper">
                        <ul className="posts-items">
                            <PostItem></PostItem>
                        </ul>
                    </div>
                    <div className="posts-wrapper">
                        <ul className="posts-items">
                            <PostItem></PostItem>
                        </ul>
                    </div>
                    <div className="posts-wrapper">
                        <ul className="posts-items">
                            <PostItem></PostItem>
                        </ul>
                    </div>
                    <div className="posts-wrapper">
                        <ul className="posts-items">
                            <PostItem></PostItem>
                        </ul>
                    </div>
                    <div className="posts-wrapper">
                        <ul className="posts-items">
                            <PostItem></PostItem>
                        </ul>
                    </div>
                    <div className="posts-wrapper">
                        <ul className="posts-items">
                            <PostItem></PostItem>
                        </ul>
                    </div>
                </div>               
            </div>
        )
    }
}

export default Post;