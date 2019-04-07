import React, { Component } from 'react';
import './ListClass.css';
import ClassItem from '../../Components/ClassItem/ClassItem'
class ListClass extends Component {
    render() {
        return (
            <div className="listClass-container">
                <div className="listClass-con">
                    <div className="titleClass-container">
                        <div className="titleClass-container1">
                            <p className="titleClass-container">Danh sách lớp học</p>
                        </div>
                        <div className="titleClass-container2">

                        </div>
                    </div>
                    <div className="select-result-searchClass">
                        <div className="select-searchClass">
                            <select required=""className="select-searchClass">
                                <option value hidden className="opt-searchClass">--Tỉnh thành--</option>
                                    <optgroup label="Địa điểm phổ biến">
                                        <option value="1">Hà Nội</option>
                                        <option value="2">TP. Hồ Chí Minh</option>
                                        <option value="3">Hải Phòng</option>
                                        <option value="4">Đà Nẵng</option>
                                    </optgroup>
                                    <optgroup label="Tỉnh thành khác">
                                        <option value="5">An Giang</option>
                                        <option value="6">Bắc Giang</option>
                                        <option value="7">Bắc Kạn</option>
                                        <option value="8">Bạc Liêu</option>
                                        <option value="9">Bắc Ninh</option>
                                        <option value="10">Bến Tre</option>
                                        <option value="11">Bình Định</option>
                                        <option value="12">Bình Dương</option>
                                        <option value="13">Bình Phước</option>
                                        <option value="14">Bình Thuận</option>
                                        <option value="15">Cà Mau</option>
                                        <option value="16">Cao Bằng</option>
                                        <option value="17">Cần Thơ</option>
                                        <option value="18">Đắk Lắk</option>
                                        <option value="19">Đắc Nông</option>
                                        <option value="20">Điện Biên</option>
                                        <option value="21">Đồng Nai</option>
                                        <option value="22">Đồng Tháp</option>
                                        <option value="23">Gia Lai</option>
                                        <option value="24">Hà Giang</option>
                                        <option value="25">Hà Nam</option>
                                        <option value="26">Hà Tĩnh</option>
                                        <option value="27">Hải Dương</option>
                                        <option value="28">Hậu Giang</option>
                                        <option value="29">Hòa Bình</option>
                                        <option value="30">Hưng Yên</option>
                                        <option value="31">Khánh Hòa</option>
                                        <option value="32">Kiên Giang</option>
                                        <option value="33">Kon Tum</option>
                                        <option value="34">Lai Châu</option>
                                        <option value="35">Lâm Đồng</option>
                                        <option value="36">Lạng Sơn</option>
                                        <option value="37">Lào Cai</option>
                                        <option value="38">Long An</option>
                                        <option value="39">Nam Định</option>
                                        <option value="40">Nghệ An</option>
                                        <option value="41">Ninh Bình</option>
                                        <option value="42">Ninh Thuận</option>
                                        <option value="43">Phú Thọ</option>
                                        <option value="44">Quảng Bình</option>
                                        <option value="45">Quảng Nam</option>
                                        <option value="46">Quảng Ngãi</option>
                                        <option value="47">Quảng Ninh</option>
                                        <option value="48">Quảng Trị</option>
                                        <option value="49">Sóc Trăng</option>
                                        <option value="50">Sơn La</option>
                                        <option value="51">Tây Ninh</option>
                                        <option value="52">Thái Bình</option>
                                        <option value="53">Thái Nguyên</option>
                                        <option value="54">Thanh Hóa</option>
                                        <option value="55">Thừa Thiên Huế</option>
                                        <option value="56">Tiền Giang</option>
                                        <option value="57">Trà Vinh</option>
                                        <option value="58">Tuyên Quang</option>
                                        <option value="59">Vĩnh Long</option>
                                        <option value="60">Vĩnh Phúc</option>
                                        <option value="61">Yên Bái</option>
                                        <option value="62">Phú Yên</option>
                                        <option value="63">Vũng Tàu</option>
                                    </optgroup>
                                </select>
                                <select required=""className="select-searchClass">
                                    <option value hidden className="opt-searchClass">--Môn học--</option>
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
                                <select required=""className="select-searchClass">
                                    <option value hidden className="opt-searchClass">--Hình thức dạy--</option>
                                    <option value="1">Online</option>
                                    <option value="2">Offline (Tại nhà)</option>
                                </select>
                                <select required=""className="select-searchClass">
                                    <option value hidden className="opt-searchClass">--Học ghép?--</option>
                                    <option value="1">Có</option>
                                    <option value="2">Không</option>
                                </select>
                                <select required=""className="select-searchClass">
                                    <option value hidden className="opt-searchClass">--Mức giá một buổi--</option>
                                    <option value="1">Dưới 100000</option>
                                    <option value="2">Từ 100000 - 200000</option>
                                    <option value="3">Từ 200000 - 300000</option>
                                    <option value="4">Trên 300000</option>
                                </select>
                                <button className="search-title-btnClass"> <i className="fas fa-search"></i> &nbsp;Tìm kiếm</button>
                        </div>
                        <div className="result-searchClass">
                            <p className="number-searchClass">Có <label>100</label> kết quả</p>
                        </div>
                    </div>
                    <div className="title-class-offer">
                        <div className="title-class-offer1">
                            
                        </div>
                        <div className="title-class-offer2">
                            <p className="title-class-offer2">Nội dung lớp học</p>
                        </div>
                        <div className="title-class-offer3">
                            <p className="title-class-offer3">Học phí đề nghị</p>
                        </div>
                        <div className="title-class-offer4">
                            <p className="title-class-offer4">Phí nhận lớp</p>
                        </div>
                    </div>
                    <div className="result-item-class">
                        <ClassItem/>
                    </div>
                    <div className="result-item-class">
                        <ClassItem/>
                    </div>
                    <div className="result-item-class">
                        <ClassItem/>
                    </div>
                    <div className="result-item-class">
                        <ClassItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListClass;