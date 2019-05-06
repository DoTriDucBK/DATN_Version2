import React, { Component } from 'react';
import './InfoMoney.css';
class InfoMoney extends Component {
    render() {
        return (
            <div className="info-money-contai">
                <div className="title-warning">
                    <div className="title-warning-img">
                        <label className="title-warning-img"><i className="fas fa-exclamation-triangle"></i></label>
                    </div>
                    <div className="title-warning-text">
                        <h1 className="title-warning-text">Tài khoản không đủ điểm!</h1>
                    </div>
                </div>
                <div className="value-warning">
                    <p className="value-warning">Vui lòng nạp thẻ để có thêm điểm trước khi sử dụng!!!</p>
                </div>
            </div>
        );
    }
}

export default InfoMoney;