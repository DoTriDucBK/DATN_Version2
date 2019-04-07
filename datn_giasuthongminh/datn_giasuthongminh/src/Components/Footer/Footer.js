import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="space">
                            </div>
                            <div className="col-md-3 footer">
                                <h5 className="text-uppercase">Dịch vụ</h5>
                                <ul className="list-unstyled ul-item">
                                    <li className="li-item">
                                        <a href="#" >Bạn muốn trở thành gia sư?</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#">Đăng lớp tìm gia sư</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#">Tìm kiếm gia sư</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#">Phản hồi về dịch vụ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer">
                                <h5 className="text-uppercase">Hỗ trợ</h5>
                                <ul className="list-unstyled">
                                    <li className="li-item">
                                        <a href="#!">Xem hướng dẫn</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div> 
                            <div className="col-md-3 footer">
                                <h5 className="text-uppercase">Liên hệ</h5>
                                <ul className="list-unstyled">
                                    <li className="li-item">
                                        <a href="#!">Về chúng tôi</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#!">Liên hệ</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li className="li-item">
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> Gia sư BK</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;