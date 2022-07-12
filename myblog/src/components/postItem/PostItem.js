import React from "react";
import './PostItem.css';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    showDetail() {

    }

    render() {
        const { no, category, date, title, content } = this.props.posts;
        return (
            <div className="post-items">
                <div className="post-items-header">
                    <div className="post-items-no">
                       {no}
                    </div>
                    <div className="post-items-category">
                        {category} 
                    </div> 
                    <div className="post-items-date">
                        {date}
                    </div>
                </div>
                
                <div className="post-items-title">
                    <a href="/home">{title}</a>
                </div>
                <div className="post-items-contents">
                    <a href="/home">{content}</a>
                </div>
            </div>
        )
    }
}

export default PostItem;