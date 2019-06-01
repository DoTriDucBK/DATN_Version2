import React, { Component } from 'react';
import './InfoUser.css';
import { reactLocalStorage } from 'reactjs-localstorage';
import UserApi from '../../API/UserAPI';
class InfoUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    async componentDidMount() {
        let list = await UserApi.getUserByIdUser(reactLocalStorage.getObject("user.info").idUser);
        this.setState({
            user: list.data
        })
    }
    render() {
        if (this.state.user.length === 0) {
            return <div></div>
        }
        return (
            <div className="info-user-contai">
                <div className="contai-title">
                    <div className="title-info-user">
                        <h1 className="title-info-user">Thông tin tài khoản</h1>
                    </div>
                    <div className="cancel-info">
                        <label className="cancel-x" onClick={this.props.toggleInfoUser}>X</label>
                    </div>
                </div>
                <div className="info-user-item1">
                    <p className="info-user-item1"><label><i className="fas fa-user"></i>&nbsp;Username:&nbsp;&nbsp;</label><label className="value-info-text"> {this.state.user[0].userName}</label></p>
                </div>
                <div className="info-user-item1">
                    <p className="info-user-item1"><label><i className="fas fa-phone-square"></i>&nbsp;Phone:&nbsp;&nbsp;</label><label className="value-info-text">{this.state.user[0].telUser}</label></p>
                </div>
                <div className="info-user-item1">
                    <p className="info-user-item1"><label><i className="far fa-envelope"></i>&nbsp;Email:&nbsp;&nbsp;</label><label className="value-info-text">{this.state.user[0].emailUser}</label></p>
                </div>
                <div className="value-point">
                    <p className="info-user-item1"><label><i className="fas fa-dollar-sign"></i>&nbsp;Point:&nbsp;&nbsp;</label><label className="value-point-text">{this.state.user[0].point}</label></p>
                </div>
            </div>
        );
    }
}

export default InfoUser;