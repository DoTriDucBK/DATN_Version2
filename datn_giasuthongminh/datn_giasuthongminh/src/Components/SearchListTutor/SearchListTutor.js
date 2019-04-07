import React, { Component } from 'react';
import './SearchListTutor.css';
import TutorItem from '../../Components/TutorItem/TutorItem';
class SearchListTutor extends Component {
    render() {
        return (
            <div className="searchList-con">
                <div className="title-container">
                    <div className="title-container1">
                        <p className="title-container">Danh sách gia sư</p>
                    </div>
                    <div className="title-container2">

                    </div>
                </div>
                <div className="select-result-search">
                    <div className="select-search">
                    <select required=""className="select-search">
                            <option value hidden className="opt-search">--Tỉnh thành--</option>
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
                            <select required=""className="select-search">
                                <option value hidden className="opt-search">--Môn học--</option>
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
                            <select required=""className="select-search">
                            <option value hidden className="opt-search">--Hình thức dạy--</option>
                                <option value="1">Online</option>
                                <option value="2">Offline (Tại nhà)</option>
                            </select>
                            <select required=""className="select-search">
                            <option value hidden className="opt-search">--Giới tính--</option>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                            </select>
                            <select required=""className="select-search">
                            <option value hidden className="opt-search">--Nghề nghiệp--</option>
                                <option value="1">Sinh viên</option>
                                <option value="2">Giáo viên</option>
                                <option value="3">Chuyên gia</option>
                                <option value="4">Đối tượng khác</option>
                            </select>
                            <button className="search-title-btn"> <i className="fas fa-search"></i> &nbsp;Tìm kiếm</button>
                    </div>
                    <div className="result-search">
                        <p className="number-search">Có <label>100</label> kết quả</p>
                    </div>
                </div>
                <div className="result-container">
                    <div className="row">
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                        <div className="col col-md-3 row1">
                            <TutorItem name="Đỗ Trí Đức" address="Thái Bình" subject="Toán" fee= "1" detail="Sinh viên năm nhất Đại học Bách Khoa Hà Nội"/>
                        </div>
                    </div>
                    <div className="rank-page">
                            Đây là chỗ phân trang. ok
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchListTutor;