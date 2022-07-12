import React from "react";
import './Post.css';
import PostItem from '../postItem/PostItem';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    // 여기에 디비에서 값 받아와서 각 아이템 정보를 뿌려줘야함
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    no: '1',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Font Weight 속성',
                    content: "font-weight CSS 속성은 폰트(font)의 가중치(weight)나 굵기(boldness)를 명시한다. 몇몇 폰트들은 normal 나 bold 일 때만 가능하다."
                },
                {
                    no: '2',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Javascript',
                    content: "font-weight CSS 속성은 폰트(font)의 가중치(weight)나 굵기(boldness)를 명시한다. 몇몇 폰트들은 normal 나 bold 일 때만 가능하다."
                },
                {
                    no: '3',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Javascript',
                    content: "fadfdf"
                },
                {
                    no: '3',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Javascript',
                    content: "fadfdf"
                },
                {
                    no: '3',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Javascript',
                    content: "fadfdf"
                },
                {
                    no: '3',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Javascript',
                    content: "fadfdf"
                },
                {
                    no: '3',
                    category: 'Javascript',
                    date: '1971년 11월 21일 오후 4시 10분',
                    title: 'Javascript',
                    content: "fadfdf"
                },
            ]
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="posts">
                <div className="posts-container">
                    <div className="posts-wrapper">
                            {posts.map( (post, index) => {
                                return  <ul className="posts-items"><PostItem posts={post} /></ul>
                            })}
                    </div>
                </div>               
            </div>
        )
    }
}

export default Post;