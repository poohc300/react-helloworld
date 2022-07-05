import React from "react";
import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
        
            <section class="navigation">
                <div class="nav-container">
                    <div class="brand">
                        <a href="#!">Jeremy Blog</a>
                    </div>
                    <nav>
                        <div class="nav-mobile">
                            <a id="nav-toggle" href="#!"><span></span></a>
                        </div>
                        <ul class="nav-list">
                            <li><a href="#!">Home</a></li>
                            <li>
                                <a href="#!">Posts</a>
                                <ul class="nav-dropdown">
                                <li><a href="#!">개발</a></li>
                                <li><a href="#!">일상</a></li>
                                </ul>
                            </li>
                            <li><a href="#!">About Us</a></li>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                    </nav>
                </div>
          </section>
        )
    }
}

export default Navbar;