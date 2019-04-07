import React, { Component } from 'react';
import './OfferClass.css';
class OfferClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumSubject: "",
            subject: "",
            fee: 0,
            tel: "",
            address: "",
            phone:""

        };
    }
    handleChangeForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        }, ()=>
        console.log(this.state))
        // this.setState({
        //     // sumSubject:e.target.value,
        //     subject:e.target.value,
        //     // fee:e.target.value,
        //     // tel:e.target.value,
        //     // address:e.target.value
        // });
    }
    onSubmitForm = () => {
        // console.log(this.state.sumSubject);
        console.log(this.state.phone);
        // console.log(this.state.fee);
        // console.log(this.state.tel);
        // console.log(this.state.address);
    }
    
    render() {
        return (
            <div className="offerClass">
                <div className="title-offer">
                    <h1>Mô tả yêu cầu lớp học</h1>
                </div>
                <div className="summaryClass">
                    <div className="sum1">
                        <p>Tóm tắt ngắn gọn về lớp học</p>
                    </div>
                    <div className="sum2">
                        <input type="text" placeholder="Tìm lớp gia sư Toán 10, Hoàn Kiếm Hà Nội" onChange={this.handleChangeForm}></input>
                    </div>
                </div>
                <div className="subjectInfo">
                    <div className="sub1">
                        <p className="title-subject">Môn học <span className="notnull">*</span></p>
                    </div>
                    <div className="sub2">
                        <select required="" className="cruise-line1" onChange={this.handleChangeForm}>
                            <option value hidden className="opt1">Lựa chọn môn học</option>
                            <optgroup label="Môn học phổ thông">
                                <option value="Toán">Toán</option>
                                <option value="Vật lí">Vật lí</option>
                                <option value="Hóa học">Hóa học</option>
                                <option value="Sinh học">Sinh học</option>
                                <option value="Ngữ văn">Ngữ văn</option>
                                <option value="Lịch sử">Lịch sử</option>
                                <option value="Địa lí">Địa lí</option>
                                <option value="Môn học phổ thông khác">Môn học phổ thông khác</option>
                            </optgroup>
                            <optgroup label="Ngoại ngữ">
                                <option value="Tiếng Anh">Tiếng Anh</option>
                                <option value="Tiếng Nhật">Tiếng Nhật</option>
                                <option value="Tiếng Trung">Tiếng Trung</option>
                                <option value="Tiếng Pháp">Tiếng Pháp</option>
                                <option value="Tiếng Hàn">Tiếng Hàn</option>
                                <option value="Ngoại ngữ khác">Ngoại ngữ khác</option>
                            </optgroup>
                            <optgroup label="Ngành nghề">
                                <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                <option value="Âm nhạc">Âm nhạc</option>
                                <option value="Mỹ thuật">Mỹ thuật</option>
                                <option value="Kỹ năng mềm">Kỹ năng mềm</option>
                                <option value="Ngành nghề khác">Ngành nghề khác</option>
                            </optgroup>
                            
                        </select>
                    </div>
                </div>
                <div className="info1">
                    <div className="info1-left">
                        <div className="info1-left-title">
                            <label className="info-title">Học phí dự kiến (vnđ/buổi)<span className="notnull">  *</span></label> 
                        </div>
                        <div className="info1-left-content">
                            <input type="text" placeholder="200.000" className="input-content" onChange={this.handleChangeForm}></input>
                        </div>
                    </div>
                    <div className="info1-right">
                        <div className="info1-right-title">
                            <label className="info-title">Số giờ học 1 buổi<span className="notnull">  *</span></label>
                        </div>
                        <div className="info1-right-content">
                            <input type="radio" value="1" name="hour"/><label>1h</label>
                            <input type="radio" value="1.5" name ="hour"/><label>1.5h</label>
                            <input type="radio" value="2" name ="hour"/><label>2h</label>
                            <input type="radio" value="2.5" name ="hour"/><label>2.5h</label>
                            <input type="radio" value="3" name ="hour"/><label>3h</label>
                        </div>
                    </div>
                </div>
                <div className="info1">
                    <div className="info1-left">
                        <div className="info1-left-title">
                            <label className="info-title" >Số điện thoại liên hệ<span className="notnull">  *</span></label> 
                        </div>
                        <div className="info1-left-content">
                            <input name ="phone" type="text" placeholder="0965143540" className="input-content" onChange={this.handleChangeForm}></input>
                        </div>
                    </div>
                    <div className="info1-right">
                        <div className="info1-right-title">
                            <label className="info-title">Số giờ học 1 buổi<span className="notnull">  *</span></label>
                        </div>
                        <div className="info1-right-content">
                            <input type="checkbox"/><label>Online</label>
                            <input type="checkbox"/><label>Offline(Tại nhà)</label>
                        </div>
                    </div>
                </div>
                <div className="info1">
                    <div className="info1-left">
                        <div className="info1-left-title">
                            <label className="info-title"  >Địa chỉ<span className="notnull">  *</span></label> 
                        </div>
                        <div className="info1-left-content">
                            <input type="text" placeholder="Thái Bình" className="input-content" name ="address" onChange={this.handleChangeForm}></input>
                        </div>
                    </div>
                    <div className="info1-right">
                        <div className="info1-right-title">
                            <label className="info-title">Địa chỉ chi tiết<span className="notnull">  *</span></label>
                        </div>
                        <div className="info3-right-content">
                            <input type="text" placeholder="Hiệp Hòa - Vũ Thư - Thái Bình" className="input-content"></input>
                        </div>
                    </div>
                </div>
                <div className="offer-rule">
                    <input type="checkbox"/><label>Bạn đã đồng ý với chính sách của <b>Gia sư BK</b></label>
                </div>
                <div className="btn-offer">
                    <button type="button" className="btn-offer" onClick={this.onSubmitForm}>Đăng tin </button>
                </div>
            </div>
        );
    }
}

export default OfferClass;