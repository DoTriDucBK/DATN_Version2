import React, { Component } from 'react';
import './Nav.css';
import { Redirect } from 'react-router';
import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import { Modal, ModalBody } from 'reactstrap';
import '../css/ModalCustome.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectHome: false,
            redirectGuide: false,
            redirectLogin: false,
            redirectListClass:false,
            textSearch: "",
            modal: false,
            modalSignin:false
        }
        this.toggle = this.toggle.bind(this);
        this.toggleSignin = this.toggleSignin.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    toggleSignin() {
        this.setState(prevState => ({
            modalSignin: !prevState.modalSignin
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
    // Điều hướng trang listclass
    redirectListClass = () => {
        this.setState({ redirectListClass: true });
    }

    handleGuide =()=>{
        this.props.handleScroll(1);
    }
    handleSigninTutor=()=>{
        this.props.handleScroll(2);
    }
    render() {
        if (this.state.redirectLogin) {
            return <Redirect push to="/login" />;
        } else if (this.state.redirectHome) {
            return <Redirect push to="/" />;
        }else if(this.state.redirectListClass){
            return <Redirect push to="/listclass"/>;
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
                                <a className="nav-link" onClick={this.redirectListClass}>Lớp học</a>
                            </li>
                            <li className="nav-item" onClick={this.handleSigninTutor}>
                                <a className="nav-link">Trở thành gia sư</a>
                            </li>
                            <li className="nav-item" onClick={this.handleGuide}>
                                <a className="nav-link">Xem hướng dẫn</a>
                            </li>
                            <li className="nav-item" onClick={this.toggle}>
                                <a className="nav-link ">Đăng nhập</a>
                            </li>
                            <li className="nav-item" onClick={this.toggleSignin}>
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
                <Modal isOpen={this.state.modalSignin} toggle={this.toggleSignin} className={this.props.className}>

                    <ModalBody>
                        <Signin />
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default Nav;