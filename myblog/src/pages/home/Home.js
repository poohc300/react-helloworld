import React from "react";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Post from '../../components/post/Post';

class Home extends React.Component {
    render() {
        return (
            
           
            <div className="home">
                <Navbar />
                <Header />
                <Post />
            </div>
        )
    }
}

export default Home;