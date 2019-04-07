import React, { Component } from 'react';
import './Nav.css';
import { Redirect } from 'react-router';
import Login from '../Login/Login';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/ModalCustome.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectHome: false,
            redirectGuide: false,
            redirectLogin: false,
            textSearch: "", modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    // Lấy nội dung ô search khi thay đổi
    handleSearchChange = (e) => {
        this.setState({
            textSearch: e.target.value
        })

    };
    // Bắt sự kiện cho button search
    searchTutor = (e) => {
        e.preventDefault();
        console.log(this.state.textSearch);

    }
    // Điều hướng trang Home
    redirectHome = () => {
        this.setState({
            redirectHome: true
        });
    }
    // Điều hướng trang login
    redirectLogin = () => {
        this.setState({ redirectLogin: true });
    }

    handleGuide =()=>{
        this.props.handleScroll(1)
    }
    render() {
        if (this.state.redirectLogin) {
            return <Redirect push to="/login" />;
        } else if (this.state.redirectHome) {
            return <Redirect push to="/" />;
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light nav-header">
                    <a className="navbar-brand" href="#">
                        <div
                            className="d-inline-block align-top image-logo" alt="" />
                        {/* <label className="nameLogo">Gia sư BK</label> */}
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0 search">
                            <input className=" search mr-sm-2" type="search"
                                placeholder="Tìm kiếm gia sư theo môn học" aria-label="Search"
                                onChange={this.handleSearchChange} />
                            <button className="nav-btn-search" type="submit"
                                onClick={this.searchTutor}><i className="fas fa-search"></i>&nbsp;Tìm kiếm</button>
                        </form>
                        <ul className="navbar-nav mr-4 ul-nav">
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.redirectHome}><i className="fas fa-home"></i>  Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Trở thành gia sư</a>
                            </li>
                            <li className="nav-item" onClick={this.handleGuide}>
                                <a className="nav-link">Xem hướng dẫn</a>
                            </li>
                            <li className="nav-item" onClick={this.toggle}>
                                <a className="nav-link ">Đăng nhập</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="nav-btn-dangki">Đăng ký</button>
                            </li>
                        </ul>

                    </div>
                </nav>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                    <ModalBody>
                        <Login />
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default Nav;