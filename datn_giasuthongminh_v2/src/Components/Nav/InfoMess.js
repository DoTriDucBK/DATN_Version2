import React, { Component } from 'react';
import './InfoMess.css';
class InfoMess extends Component {
    render() {
        return (
            <div className="infoMess-con">
                <div className="img-info-err">

                </div>
                <div className="value-info">
                    <p className="value-info">Vui lòng nhập vào ô tìm kiếm trước!</p>
                </div>
            </div>
        );
    }
}

export default InfoMess;