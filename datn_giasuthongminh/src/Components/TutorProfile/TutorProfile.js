import React, { Component } from 'react';
import './TutorProfile.css';
import TutorApi from '../../API/TutorAPI';
import {reactLocalStorage} from 'reactjs-localstorage'
class TutorProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameTutor: reactLocalStorage.getObject("tutor.login.info").userNameTutor,
            tutor:[],
            birthdayTutor:"",
            telTutor:"",
            emailTutor:"",
            nameCity:"",
            nameAdress:"",
            jobTutor:"",
            infoTutor:"",
            
        }
    }
    async componentDidMount(){
        let value = await TutorApi.getTutorByName(this.state.nameTutor);
        this.setState({
            tutor: value.data
        }) 
        console.log(this.state)
    }
    handleChangeInputTextForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        // let tutor;
        // // this.setState({ isSending: 1, redirectComplete:true })
        // await TutorApi.createTutor()
        //     .then(result => {
        //         if (result && result.code === "success") {
        //             tutor = result.data;
        //         } else if (result.code === "error") {
        //             alert(result.message)
        //         }
        //     })
        //     .catch(err => console.log(err));
    };
    render() {
        var {tutor} = this.state;
        if(tutor.length === 0){
            return <div></div>
        }
        return (
            <div className="tutor-profile-con">
                <div className="tutor-profile-container">
                    <div className="title-tutor-profile">
                        <p className="title-profile">Hồ sơ gia sư</p>
                    </div>
                    <div className="title-tutor-profile1">
                        <div className="title-tutor-profile1-left">
                            <p className="title-tutor-profile1-left">Thông tin chung</p>
                        </div>
                        <div className="title-tutor-profile1-right">

                        </div>
                    </div>
                    <div className="value1-tutor">
                        <div className="value1-tutor-left">
                            <div className="value-title1">
                                <p className="value-title1">Họ tên đầy đủ</p>
                            </div>
                            <div className="value-title2">
                                <input className="value-title2" placeholder="Nhập họ tên" defaultValue={tutor[0].nameTutor}></input>
                            </div>
                        </div>
                        <div className="value1-tutor-right">
                            <div className="value-title1">
                                <p className="value-title1">Ngày sinh</p>
                            </div>
                            <div className="value-title2">
                                <input className="value-title2" placeholder="Nhập ngày sinh" defaultValue={tutor[0].birthdayTutor} ></input>
                            </div>
                        </div>
                    </div>
                    <div className="value1-tutor">
                        <div className="value1-tutor-left">
                            <div className="value-title1">
                                <p className="value-title1">Số điện thoại</p>
                            </div>
                            <div className="value-title2">
                                <input className="value-title2" placeholder="Nhập số điện thoại" defaultValue={tutor[0].telTutor} ></input>
                            </div>
                        </div>
                        <div className="value1-tutor-right">
                            <div className="value-title1">
                                <p className="value-title1">Email</p>
                            </div>
                            <div className="value-title2">
                                <input className="value-title2" placeholder="Nhập email" defaultValue={tutor[0].emailTutor}></input>
                            </div>
                        </div>
                    </div>
                    <div className="value1-tutor">
                        <div className="value1-tutor-left">
                            <div className="value-title1">
                                <p className="value-title1">Địa chỉ (tỉnh thành)</p>
                            </div>
                            <div className="value-title2">
                                <select required="" className="value-title2" value={tutor[0].nameCity} onChange={this.handleChangeInputTextForm}>
                                    <option value hidden className="opt-search">Tỉnh thành</option>
                                    <optgroup label="Địa điểm phổ biến">
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                                        <option value="Hải Phòng">Hải Phòng</option>
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                    </optgroup>
                                    <optgroup label="Tỉnh thành khác">
                                        <option value="An Giang">An Giang</option>
                                        <option value="Bắc Giang">Bắc Giang</option>
                                        <option value="Bắc Kạn">Bắc Kạn</option>
                                        <option value="Bạc Liêu">Bạc Liêu</option>
                                        <option value="Bắc Ninh">Bắc Ninh</option>
                                        <option value="Bến Tre">Bến Tre</option>
                                        <option value="Bình Định">Bình Định</option>
                                        <option value="Bình Dương">Bình Dương</option>
                                        <option value="Bình Phước">Bình Phước</option>
                                        <option value="Bình Thuận">Bình Thuận</option>
                                        <option value="Cà Mau">Cà Mau</option>
                                        <option value="Cao Bằng">Cao Bằng</option>
                                        <option value="Cần Thơ">Cần Thơ</option>
                                        <option value="Đắk Lắk">Đắk Lắk</option>
                                        <option value="Đắc Nông">Đắc Nông</option>
                                        <option value="Điện Biên">Điện Biên</option>
                                        <option value="Đồng Nai">Đồng Nai</option>
                                        <option value="Đồng Tháp">Đồng Tháp</option>
                                        <option value="Gia Lai">Gia Lai</option>
                                        <option value="Hà Giang">Hà Giang</option>
                                        <option value="Hà Nam">Hà Nam</option>
                                        <option value="Hà Tĩnh">Hà Tĩnh</option>
                                        <option value="Hải Dương">Hải Dương</option>
                                        <option value="Hậu Giang">Hậu Giang</option>
                                        <option value="Hòa Bình">Hòa Bình</option>
                                        <option value="Hưng Yên">Hưng Yên</option>
                                        <option value="Khánh Hòa">Khánh Hòa</option>
                                        <option value="Kiên Giang">Kiên Giang</option>
                                        <option value="Kon Tum">Kon Tum</option>
                                        <option value="Lai Châu">Lai Châu</option>
                                        <option value="Lâm Đồng">Lâm Đồng</option>
                                        <option value="Lạng Sơn">Lạng Sơn</option>
                                        <option value="Lào Cai">Lào Cai</option>
                                        <option value="Long An">Long An</option>
                                        <option value="Nam Định">Nam Định</option>
                                        <option value="Nghệ An">Nghệ An</option>
                                        <option value="Ninh Bình">Ninh Bình</option>
                                        <option value="Ninh Thuận">Ninh Thuận</option>
                                        <option value="Phú Thọ">Phú Thọ</option>
                                        <option value="Quảng Bình">Quảng Bình</option>
                                        <option value="Quảng Nam">Quảng Nam</option>
                                        <option value="Quảng Ngãi">Quảng Ngãi</option>
                                        <option value="Quảng Ninh">Quảng Ninh</option>
                                        <option value="Quảng Trị">Quảng Trị</option>
                                        <option value="Sóc Trăng">Sóc Trăng</option>
                                        <option value="Sơn La">Sơn La</option>
                                        <option value="Tây Ninh">Tây Ninh</option>
                                        <option value="Thái Bình">Thái Bình</option>
                                        <option value="Thái Nguyên">Thái Nguyên</option>
                                        <option value="Thanh Hóa">Thanh Hóa</option>
                                        <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                                        <option value="Tiền Giang">Tiền Giang</option>
                                        <option value="Trà Vinh">Trà Vinh</option>
                                        <option value="Tuyên Quang">Tuyên Quang</option>
                                        <option value="Vĩnh Long">Vĩnh Long</option>
                                        <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                                        <option value="Yên Bái">Yên Bái</option>
                                        <option value="Phú Yên">Phú Yên</option>
                                        <option value="Vũng Tàu">Vũng Tàu</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="value1-tutor-right">
                            <div className="value-title1">
                                <p className="value-title1">Địa chỉ cụ thể</p>
                            </div>
                            <div className="value-title2">
                                <input className="value-title2" placeholder="Nhập địa chỉ" defaultValue={tutor[0].nameAdress}></input>
                            </div>
                        </div>
                    </div>
                    <div className="profile-detail">
                        <div className="profile-detail-title">
                            <p className="profile-detail-title">Mô tả bản thân, kinh nghiệm </p>
                        </div>
                        <div className="profile-detail-value">
                            <textarea className="profile-detail-value" />
                        </div>
                    </div>
                    <div className="title-tutor-profile2">
                        <div className="title-tutor-profile1-left">
                            <p className="title-tutor-profile1-left">Thông tin chi tiết</p>
                        </div>
                        <div className="title-tutor-profile1-right">

                        </div>
                    </div>
                    <div className="value1-tutor">
                        <div className="value1-tutor-left">
                            <div className="value-title1">
                                <p className="value-title1">Bạn đang là?</p>
                            </div>
                            <div className="value-title2">
                                <select required="" className="value-title2" value={tutor[0].jobTutor} onChange={this.handleChangeInputTextForm}>
                                    <option value hidden className="opt-search">Lựa chọn nghề nghiệp</option>
                                    <option value="Sinh viên">Sinh viên</option>
                                    <option value="Giáo viên">Giáo viên</option>
                                    <option value="Giảng viên">Giảng viên</option>
                                    <option value="Chuyên viên">Chuyên viên</option>
                                </select>
                            </div>
                        </div>
                        <div className="value1-tutor-right">
                            <div className="value-title1">
                                <p className="value-title1">Học phí một giờ</p>
                            </div>
                            <div className="value-title2">
                                <input className="value-title2" placeholder="Ví dụ: 200000" defaultValue={tutor[0].fee}></input>
                            </div>
                        </div>
                    </div>
                    <div className="value1-tutor">
                        <div className="value1-tutor-left">
                            <div className="value-title1">
                                <p className="value-title1">Hình thức dạy</p>
                            </div>
                            <div className="value-title2">
                                <input type="checkbox" name="methodTeaching" value="Online" className="valueTitle" /><label className="valueTitle">Online</label>
                                <input type="checkbox" name="methodTeaching" value="Offline" className="valueTitle1" /><label className="valueTitle">Offline(Tại nhà)</label>
                            </div>
                        </div>
                        <div className="value1-tutor-right">
                            <div className="value-title1">
                                <p className="value-title1">Môn học đăng kí dạy</p>
                            </div>
                            <div className="value-title2">
                                <select name="subject" required="" className="value-title2" onChange={this.handleChangeInputTextForm} value={tutor[0].nameSubject}>
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
                    </div>
                    <div className="profile-detail">
                        <div className="profile-detail-title">
                            <p className="profile-detail-title">Lịch có thể dạy </p>
                        </div>
                        <div className="profile-detail-value">
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Thứ 2</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Thứ 3</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Thứ 4</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Thứ 5</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Thứ 6</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Thứ 7</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="part-form one">
                                <div className="title-day">
                                    <p><b>Chủ nhật</b></p>
                                </div>
                                <div className="check-day">
                                    <label className="containerlabel">Sáng
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Chiều
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerlabel">Tối
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chuthich">
                        <div className="con-chuthich"><label className="checked"></label>
                            <label className="value-chuthich">Thời gian đăng kí nhận lớp</label>
                        </div>
                    </div>
                    <div className="title-tutor-profile1">
                        <div className="title-tutor-profile1-left1">
                            <p className="title-tutor-profile1-left">Ảnh xác nhận thông tin</p>
                        </div>
                        <div className="title-tutor-profile1-right1">
                        </div>
                    </div>
                    <div className="image-info-tutor">
                        <div className="image-info-tutor1">
                            <div className="title-image-info-tutor">
                                <p className="title-image-info">Ảnh đại diện (ảnh phải rõ mặt và chụp một mình)</p>
                            </div>
                            <img id="show_avatar" alt="ảnh đại diện"className="show_avatar_default" src="https://d1plicc6iqzi9y.cloudfront.net/sites/all/themes/blacasa/images/default/default_user.png" />
                            <div className="submit-image-info">
                                <label className="nameChooseImage"><input type="file" name="file" id="file" className="inputfile" /><i className="fas fa-upload"></i>&nbsp;&nbsp;Chọn ảnh</label>
                            </div>
                        </div>
                        <div className="image-info-tutor1">
                            <div className="title-image-info-tutor">
                                <p className="title-image-info">Thẻ sinh viên hoặc bằng cấp</p>
                            </div>
                            <img id="show-img-cert" alt="Thẻ sinh viên / Bằng cấp" className="show_avatar_default1" src="https://d1plicc6iqzi9y.cloudfront.net/sites/all/themes/blacasa/images/default/cert.png "></img>
                            <div className="submit-image-info">
                                <label className="nameChooseImage"> <input type="file" name="file" id="file" className="inputfile" /><i className="fas fa-upload"></i>&nbsp;&nbsp;Chọn ảnh</label>
                            </div>
                        </div>
                        <div className="image-info-tutor1">
                            <div className="title-image-info-tutor">
                                <p className="title-image-info">Ảnh đại diện (ảnh phải rõ mặt và chụp một mình)</p>
                            </div>
                            <img id="show_avatar" alt="Chứng minh thư" className="show_avatar_default1" src="https://d1plicc6iqzi9y.cloudfront.net/sites/all/themes/blacasa/images/default/passport_default.png" />
                            <div className="submit-image-info">
                                <label className="nameChooseImage"> <input type="file" name="file" id="file" className="inputfile" /><i className="fas fa-upload"></i>&nbsp;&nbsp;Chọn ảnh</label>
                            </div>
                        </div>
                    </div>
                    <div className="btn-submit-info">
                        <button className="btn-submit-info" onClick={this.handleSubmit}>Cập nhật hồ sơ</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorProfile;