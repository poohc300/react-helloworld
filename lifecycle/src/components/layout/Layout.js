import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Card from './card/Card';
import "./Layout.css";

class Layout extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Card />
                <Footer />
                
            </div>
        )
    }
}

export default Layout