import React from "react";
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card-container">
                    <div className="card">
                        <div className="card-content">
                           card
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;