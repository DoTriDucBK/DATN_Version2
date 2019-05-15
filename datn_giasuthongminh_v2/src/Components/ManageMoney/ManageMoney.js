import React, { Component } from 'react';
import './ManageMoney.css';
import UserAPI from '../../API/UserAPI';
import { reactLocalStorage } from 'reactjs-localstorage';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PaymentAPI from '../../API/PaymentAPI';
class ManageMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            numberMoney: 0,
            giveMoney: "",
            open:false
        }
    }
    async componentDidMount() {
        var user = await UserAPI.getUserByName(reactLocalStorage.getObject("user.info").userName);
        this.setState({
            user: user.data
        })
    }
    handleChangeInputTextForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    }
    onClickReply =() => {
        this.setState({
            open:true
        })
    }
    handleClose = () => {
        this.setState ({
            open:false
        })
    }
    handleYes = () => {
        var data = {
            idUser:this.state.user[0].idUser,
            numberMoney:this.state.numberMoney,
            methodPayment:this.state.giveMoney
        }
        var payment = PaymentAPI.createPayment(data).then(result => {
            if (result && result.code === "success") {
                payment = result.data;
            } else if (result.code === "error") {
                alert(result.message)
            }
        })
            .catch(err => console.log(err));
        this.setState ({
            open:false
        })
    }
    render() {
        if (this.state.user.length === 0) {
            return <div></div>
        }
        return (
            <div className="manage-money-container">
                <div className="manage-money-left">
                    <div className="info-account-user">
                        <div className="title-info-account-user">
                            <div className="title-info-account-user-left">
                                <p className="title-info-account-user-left">Thông tin tài khoản</p>
                            </div>
                            <div className="title-info-account-user-right">

                            </div>
                        </div>
                        <div className="value-info-account-user">
                            <div className="value-info-account-user-item">
                                <p className="value-info-account-user-item"><i className="fas fa-user"></i>&nbsp; Họ và tên:&nbsp;&nbsp;&nbsp; <label>{this.state.user[0].userName}</label></p>
                            </div>
                            <div className="value-info-account-user-item">
                                <p className="value-info-account-user-item"><i className="far fa-envelope"></i> Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>{this.state.user[0].emailUser}</label></p>
                            </div>
                            <div className="value-info-account-user-item">
                                <p className="value-info-account-user-item"><i className="fas fa-phone"></i> Điện thoại:&nbsp;&nbsp; <label>{this.state.user[0].telUser}</label></p>
                            </div>
                            <div className="value-info-account-user-item">
                                <p className="value-info-account-user-item"><i className="fas fa-dollar-sign"></i> Point:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>{this.state.user[0].point}</label></p>
                            </div>
                        </div>
                    </div>
                    <div className="give-money">
                        <div className="title-give-money">
                            <div className="title-give-money-left">
                                <p className="title-info-account-user-left">Thủ tục nạp tiền</p>
                            </div>
                            <div className="title-give-money-right">
                            </div>
                        </div>
                        <div className="value-give-money">
                            <div className="step1-give-money">
                                <div className="step1-give-money-left">
                                    <p className="step1-give-money-left">Nhập số tiền muốn nạp:</p>
                                </div>
                                <div className="step1-give-money-right">
                                    <input type="number" name="numberMoney" placeholder="Nhập số tiền vd: 50000" className="input-give-money" onChange={this.handleChangeInputTextForm}></input>
                                </div>
                            </div>
                            <div className="step2-give-money">
                                <div className="title-step2-give-money">
                                    <p className="title-step2-give-money">Lựa chọn hình thức chuyển tiền:</p>
                                </div>
                                <div className="value-step2-give-money">
                                    <div className="radio1">
                                        <li className="value1-give-money">
                                            <input type="radio" name="giveMoney" value="Online" className="radio-give-money" id="radio1" checked={this.state.giveMoney === "Online"} onChange={this.handleChangeInputTextForm} />
                                            <label className="radio-give-money">Chuyển khoản ngân hàng</label>
                                        </li>
                                    </div>
                                    {this.state.giveMoney === "Online" ?
                                        <div className="online-give-money">
                                            <div className="online-give-money-1">
                                                <p className="online-give-money">Bạn có thể nạp tiền bằng cách chuyển khoản ngân hàng tới tài khoản của trung tâm. Trong vòng 24h kể từ khi nhận được số tiền chuyển khoản, chúng tôi sẽ cộng điểm và gửi tin nhắn thông báo cho bạn.</p>
                                            </div>
                                            <div className="online-give-money-2">
                                                <p className="online-give-money-2">Thông tin chuyển khoản như sau:</p>
                                            </div>
                                            <div className="info-online-give-money">
                                                <p className="online-give-money-2">Tên tài khoản: <b>ĐỖ TRÍ ĐỨC</b></p>
                                            </div>
                                            <div className="info-online-give-money">
                                                <p className="online-give-money-2">Số tài khoản: <b>101007116063</b></p>
                                            </div>
                                            <div className="info-online-give-money">
                                                <p className="online-give-money-2">Ngân hàng: <b>Vietinbank</b></p>
                                            </div>
                                            <div className="info-online-give-money">
                                                <p className="online-give-money-2">Chi nhánh: <b>Hoàng Mai, Hà Nội</b></p>
                                            </div>
                                            <div className="info-online-give-money">
                                                <p className="online-give-money-2">Số tiền: <b>50000</b></p>
                                            </div>
                                            <div className="info-online-give-money">
                                                <p className="online-give-money-2">Nội dung chuyển tiền: <b>Nạp tiền đổi điểm ID = 1</b></p>
                                            </div>
                                        </div> : <div></div>}
                                    <div className="radio1">
                                        <li className="value1-give-money">
                                            <input type="radio" name="giveMoney" value="Offline" className="radio-give-money radio2" checked={this.state.giveMoney === "Offline"} onChange={this.handleChangeInputTextForm} />
                                            <label className="radio-give-money">Đến trực tiếp văn phòng nộp tiền</label>
                                        </li>
                                    </div>
                                    {this.state.giveMoney === "Offline" ?
                                        <div className="offline-give-money">
                                            <div className="online-give-money-1">
                                                <p className="online-give-money">Bạn có thể nạp tiền bằng cách tới các văn phòng của trung tâm và đóng tiền mặt. Bạn cũng có thể nhờ bạn bè tới nạp tiền cùng với mã số của bạn. Mã số: <b>{this.state.user[0].idUser}.</b> </p>
                                            </div>
                                            <div className="offline-give-money-value">
                                                <p className="offline-give-money-value">Địa chỉ trung tâm: Số 7, Tạ Qung Bửu, Hai Bà Trưng, Hà Nội</p>
                                            </div>
                                        </div> : <div></div>}
                                    {(this.state.numberMoney != 0 && this.state.giveMoney != "")?
                                    <button className="btn-give-money" onClick={this.onClickReply}>Thanh toán</button>:<div></div>}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="manage-money-right">
                    <div className="rule-save-money">
                        <div className="rule-title">
                            <h3 className="rule-title">Cách quy đổi điểm</h3>
                        </div>
                        <div className="rule-value">
                            <div className="rule-item">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; 10K = 20 point</p>
                            </div>
                            <div className="rule-item">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; 20K = 50 point</p>
                            </div>
                            <div className="rule-item">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; 50K = 150 point</p>
                            </div>
                            <div className="rule-item">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; 100K = 400 point</p>
                            </div>
                            <div className="rule-item">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; 200K = 1000 point</p>
                            </div>
                            <div className="rule-item">
                                <p className="rule-item1">(Các mệnh giá lớn hơn 200K: Point = số tiền * 6)</p>
                            </div>
                        </div>
                    </div>
                    <div className="rule-website">
                        <div className="rule-website-title">
                            <h3 className="rule-title">Quy tắc tính phí</h3>
                        </div>
                        <div className="rule-value2">
                            <div className="rule-item2">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; Khi đăng kí tài khoản, mỗi user sẽ được tặng <b>500 point</b> </p>
                            </div>
                            <div className="rule-item2">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; Khi đăng kí mở lớp, học viên sẽ bị trừ <b>100 point</b> trong tài khoản</p>
                            </div>
                            <div className="rule-item2">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; Khi gửi yêu cầu mời gia sư dạy lớp, học viên sẽ bị trừ <b>20 point</b> trong tài khoản</p>
                            </div>
                            <div className="rule-item2">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; Khi gia sư gửi đề nghị dạy lớp, gia sư sẽ bị trừ <b>20 point</b> trong tài khoản</p>
                            </div>
                            <div className="rule-item2">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; Khi một lớp được nhận, gia sư sẽ bị trừ số điểm tương ứng với học phí một buổi học</p>
                            </div>
                            <div className="rule-item2">
                                <p className="rule-item"><i className="fas fa-check"></i> &nbsp; Để xác thực thông tin bằng cấp, gia sư bị trừ <b>50 point</b> trong tài khoản.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Xác nhận thông tin"}</DialogTitle>
                    <DialogContent id="alert-dialog-description">
                        <div className="dialog-userName">
                            <p>Tên người dùng: <b>{this.state.user[0].userName}</b></p>
                        </div>
                        <div className="dialog-userName">
                            <p>ID người dùng: <b>{this.state.user[0].idUser}</b></p>
                        </div>
                        <div className="dialog-userName">
                            <p>Số tiền chuyển: <b>{this.state.numberMoney}</b></p>
                        </div>
                        <div className="dialog-userName">
                            <p>Hình thức chuyển: <b>{this.state.giveMoney ==="Online" ?"Chuyển khoản ngân hàng":(this.state.giveMoney === "Offline"?"Nộp trực tiếp tại trung tâm":"")}</b></p>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                           Hủy bỏ
            </Button>
                        <Button onClick={this.handleYes} color="primary" autoFocus>
                            Xác nhận
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ManageMoney;