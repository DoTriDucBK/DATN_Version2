import React, { Component } from 'react';
import './Signin.css';
class Signin extends Component {
    render() {
        return (
            <div className="signin-container">
                <div className="title-signin">
                    <h1>Đăng kí thành viên</h1>
                </div>
                <div className="part-signin">
                    <div className="title-part-signin">
                        Họ tên
                    </div>
                    <div className="value-part-signin">
                        <input type="text" placeholder="Nhập họ, tên"></input>
                    </div>
                </div>
                <div className="part-signin">
                    <div className="title-part-signin">
                        Số điện thoại
                    </div>
                    <div className="value-part-signin">
                        <input type="text" placeholder="Nhập số điện thoại"></input>
                    </div>
                </div>
                <div className="part-signin">
                    <div className="title-part-signin">
                        Email
                    </div>
                    <div className="value-part-signin">
                        <input type="text" placeholder="Nhập email"></input>
                    </div>
                </div>
                <div className="part-signin">
                    <div className="title-part-signin">
                        Mật khẩu
                    </div>
                    <div className="value-part-signin">
                        <input type="password" placeholder="Nhập mật khẩu"></input>
                    </div>
                </div>
                <div className="part-signin">
                    <div className="title-part-signin">
                        Nhập lại mật khẩu
                    </div>
                    <div className="value-part-signin">
                        <input type="password" placeholder="Nhập lại mật khẩu"></input>
                    </div>
                </div>
                <div className="btn-sigin1">
                    <button className="btn-signin1">Đăng kí</button>
                </div>
            </div>
        );
    }
}

export default Signin;