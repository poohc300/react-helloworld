import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import "./Layout.css";

class Layout extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <div className='container'>
                    <article>
                        <h1>Body</h1>
                    </article>
                </div>
                <Footer />
                
            </div>
        )
    }
}

export default Layout