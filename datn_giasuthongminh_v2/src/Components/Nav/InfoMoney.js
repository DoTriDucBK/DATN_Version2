import React, { Component } from 'react';
import './InfoMoney.css';
class InfoMoney extends Component {
    toggle =()=> {
        this.props.toggleInfoMoney();
    }
    render() {
        return (
            <div className="info-money-contai">
                <div className="title-warning">
                    <p className="title-dialog-warning">Tài khoản không đủ điểm</p>
                </div>
                <div className="value-dialog-warning">
                    <div className="img-info-warning">
                        <label className="img-info-warning"><i className="fas fa-exclamation-triangle"></i></label>
                    </div>
                    <div className="value-info-warning">
                        <p className="value-info-warning">Vui lòng nạp thẻ để có thêm điểm trước khi sử dụng!!!</p>
                    </div>
                </div>
                <div className="btn-ok-warning">
                    <button className="btn-ok-warning" onClick={this.toggle}>OK</button>
                </div>
            </div>
        );
    }
}

export default InfoMoney;