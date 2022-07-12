import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="writer">
                    <h3>Copyright 2022 Jeremy</h3>
                </div>
                <div className="github-address">
                    <a href ='https://github.com/poohc300'>Github 주소</a>
                </div>
            </footer>
        )
    }
}

export default Footer;