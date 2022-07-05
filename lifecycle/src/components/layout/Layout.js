import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

class Layout extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Footer />
                
            </div>
        )
    }
}

export default Layout