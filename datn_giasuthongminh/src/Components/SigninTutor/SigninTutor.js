import React, { Component } from 'react';
import './SigninTutor.css';
class SigninTutor extends Component {
    render() {
        return (
            <div className="signTutor-con">
                <div className="becomeTutor">
                    <div className="text-becomeTutor">
                        <p className="text-becomeTutor"><b>Bạn muốn trở thành gia sư?</b></p>
                    </div>
                    <div className="form-signin">
                        <div className="part-signinTutor">
                            <div className="left-part">
                                <label className="label-becomeTutor">Họ tên</label>
                            </div>
                            <div className="right-part">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="part-signinTutor">
                            <div className="left-part">
                                <label className="label-becomeTutor">Số điện thoại</label>
                            </div>
                            <div className="right-part">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="part-signinTutor">
                            <div className="left-part">
                                <label className="label-becomeTutor">Email</label>
                            </div>
                            <div className="right-part">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="part-signinTutor">
                            <div className="left-part">
                                <label className="label-becomeTutor">Mật khẩu</label>
                            </div>
                            <div className="right-part">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="part-signinTutor">
                            <div className="left-part">
                                <label className="label-becomeTutor">Nhắc lại mật khẩu</label>
                            </div>
                            <div className="right-part">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="btn-become"> 
                            <button className="btn-become">Đăng ký gia sư</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SigninTutor;