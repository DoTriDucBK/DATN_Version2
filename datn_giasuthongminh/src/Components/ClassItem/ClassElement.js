import React, { Component } from 'react';
import './ClassElement.css';
import MyUtils from '../../utils/MyUtils';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TutorAPI from '../../API/TutorAPI';
import ClassUserAPI from '../../API/ClassUserAPI';
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect } from 'react-router-dom';
class ClassElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "",
            open: false,
            idTutor: 0,
            tutor: [],
            idUser: reactLocalStorage.getObject("user.info").idUser,
            idClass: this.props.idClass,
            redirectManageInvitation: false
        }
    }
    async componentDidMount() {
        var s = parseInt(this.props.status);
        if (s === 0) {
            this.setState({ status: "Còn lớp" })
        } else if (s === 1) {
            this.setState({ status: "Hết lớp" })
        } else if (s === 2) {
            this.setState({ status: "Đang yêu cầu" })
        }
        var listTutor = await TutorAPI.getTutorById(parseInt(this.props.idTutor));

        console.log(listTutor)
        this.setState({
            idTutor: this.props.idTutor,
            tutor: listTutor,
        })


    }
    handleClose = () => {
        this.setState({ open: false });
    };
    handleYes = () => {
        var data = {
            idUser: this.state.idUser,
            idTutor: this.state.idTutor,
            idClass: this.state.idClass,
            status: 2,
        }
        // console.log("1111111111  " , data);
        var classUser = ClassUserAPI.createClassUser(data).then(result => {
            if (result && result.code === "success") {
                classUser = result.data;
            } else if (result.code === "error") {
                alert(result.message)
            }
        })
            .catch(err => console.log(err));
        this.setState({
            open: false,
            redirectManageInvitation: true
        });
    }
    onClickOfferTutor = () => {

        this.setState({

            open: true
        })

    }
    render() {
        console.log(this.state.tutor)
        const { tutor, redirectManageInvitation } = this.state;
        if (redirectManageInvitation) {
            return <Redirect to={{
                pathname:"/manage-invitation",
                state:{
                    idUser:[this.state.idUser]
                }
            }}>

            </Redirect>
        }
        if (!tutor || tutor.length == 0) {
            return <div></div>
        }
        return (
            <div className="classItem-con">
                <div className="img-logoBK">

                </div>
                <div className="Class-detail">
                    <div className="name-class">
                        <p className="name-class"><label className="name-class"><i className="fas fa-graduation-cap"></i></label>&nbsp;&nbsp;<b>{this.props.description}</b></p>
                    </div>
                    <div className="detail-class">
                        <p className="detail-class">{this.props.detailClass}</p>
                    </div>
                    <div className="info-class">
                        <div className="info-class1">
                            <p className="info-class1"><label className="name-class"><i className="fas fa-book-open"></i></label>&nbsp;&nbsp;{this.props.nameSubject}</p>
                        </div>
                        <div className="info-class1">
                            <p className="info-class1"><label className="name-class"><i className="fas fa-briefcase"></i></label>&nbsp;&nbsp;{this.props.typeMethod}</p>
                        </div>
                        <div className="info-class1">
                            <p className="info-class1"><label className="name-class"><i className="fas fa-map-marker-alt"></i></label>&nbsp;&nbsp;{this.props.city}</p>
                        </div>
                        <div className="info-class2">
                            <p className="info-class1"><label className="name-class"><i className="fas fa-calendar-check"></i></label>&nbsp;&nbsp;{this.props.numberDay} buổi/1 tuần</p>
                        </div>
                    </div>
                </div>
                <div className="class-fee">
                    <div className="value-fee"><b>{MyUtils.currencyFormat(this.props.fee)}</b>đ/1 buổi</div>
                </div>
                <div className="class-offer">
                    <div className="fee-offer">
                        <div className="status-offer"><label className="status-offer">{this.state.status}</label></div>
                    </div>
                    <div className="button-offer">
                        <button className="button-offer" onClick={this.onClickOfferTutor}>Mời dạy</button>
                    </div>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Bạn có chắc chắn mời gia sư?"}</DialogTitle>
                    <DialogContent id="alert-dialog-description">
                        <div className="tutor-offer" >
                            <div className="img-profile">

                            </div>
                            <div className="info-profile-tutor">
                                <div className="user-birthday">
                                    <div className="user-dialog">
                                        <p><label className="dialog-text"><i className="fas fa-user"></i></label> &nbsp;{this.state.tutor.data[0].nameTutor}</p>

                                    </div>
                                    <div className="birthday-dialog">
                                        <p><label className="dialog-text"><i className="fas fa-birthday-cake"></i></label>&nbsp;{this.state.tutor.data[0].birthdayTutor}</p>

                                    </div>
                                </div>
                                <div className="user-birthday">
                                    <div className="user-dialog">
                                        <p><label className="dialog-text"><i className="fas fa-map-marker-alt"></i></label>&nbsp;{this.state.tutor.data[0].nameCity}</p>

                                    </div>
                                    <div className="birthday-dialog">
                                        <p><label className="dialog-text"><i className="fas fa-phone-square"></i></label>&nbsp;{this.state.tutor.data[0].telTutor}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Không
            </Button>
                        <Button onClick={this.handleYes} color="primary" autoFocus>
                            Có
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ClassElement;