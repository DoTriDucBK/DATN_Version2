import React, { Component } from 'react';
import './TutorItem.css';
import {Redirect} from 'react-router';
import MyUtil from '../../utils/MyUtils';
class TutorItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectPersonalPage: false 
        }
    }
    redirectPersonalPage = () =>{
        this.setState ({
            redirectPersonalPage:true
        });
    }
    render() {
        if (this.state.redirectPersonalPage){
            return <Redirect push to = "/personal-page"></Redirect>
        }
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
                        <p><i className="fas fa-hand-holding-usd"></i>&nbsp;&nbsp; {MyUtil.currencyFormat(this.props.fee)} vnđ/h</p>
                    </div>
                    <div className="addInfo">
                        <p><i className="fas fa-info-circle"></i>&nbsp;&nbsp;{this.props.detail}</p>
                    </div>
                    <div className="btn">
                        <button className="btn btn1" onClick={this.redirectPersonalPage}>Xem chi tiết</button>&nbsp;&nbsp;
                        <button className="btn btn2">Mời dạy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorItem;