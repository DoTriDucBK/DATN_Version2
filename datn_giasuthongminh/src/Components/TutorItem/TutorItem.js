import React, { Component } from 'react';
import './TutorItem.css';

class TutorItem extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        return (
            <div className="contentTutor">
                <div className="image-tutor">
                    {/* <img src="../../images/anhdaidien.png"/> */}
                </div>
                <div className="infoTutor">
                    <div className="name">
                        <p><b>{this.props.name}</b></p>
                    </div>
                    <div className="address">
                     <p> <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{this.props.address}</p>
                    </div>
                    <div className="subject">
                        <p><i className="fas fa-book-reader"></i>&nbsp;&nbsp;{this.props.subject}</p>
                    </div>
                    <div className="fee">
                        <p><i className="fas fa-hand-holding-usd"></i>&nbsp;&nbsp; {this.format_currency(this.props.fee)} vnđ/h</p>
                    </div>
                    <div className="addInfo">
                        <p><i className="fas fa-info-circle"></i>&nbsp;&nbsp;{this.props.detail}</p>
                    </div>
                    <div className="btn">
                        <button className="btn btn1">Xem chi tiết</button>&nbsp;&nbsp;
                        <button className="btn btn2">Mời dạy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorItem;