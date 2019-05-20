import React, { Component } from 'react';
import './SearchListTutor.css';
import TutorItem from '../../Components/TutorItem/TutorItem';
import TutorAPI from '../../API/TutorAPI';
import MyUtils from '../../utils/MyUtils';
class SearchListTutor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // textSearch:props.match.params.textSearch,
            subject: "",
            addressTutor: "",
            methodTeaching: "",
            jobTutor: "",
            typeMethod: "",
            listTutor: [],
            activePage: 1,
            tutorPerPage: 8,
            fee:""
        }
    }
    handlePageChange = (e) => {

        this.setState({ activePage: Number(e.target.id) });
    }
    handlePageChangePre = () => {
        if(this.state.activePage > 1){
            this.setState({
                activePage: this.state.activePage - 1
            })
        }
        
    }
    handlePageChangeNext = () => {
        var lastPage = Math.ceil(this.state.listTutor.length / this.state.tutorPerPage);
        if(this.state.activePage < lastPage) {
            this.setState({
                activePage: this.state.activePage + 1
            })
        }
        
    }
    handleChangeInputTextForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.subject);
    }
    async componentWillMount() {
        var textSearch = this.props.match.params.textSearch;
        this.state.subject = textSearch;
        // console.log(this.state.subject);
    }
    async componentDidMount() {
        var sub = this.state.subject;
        if (sub) await TutorAPI.getTutorBySubject(sub).then(
            listTutor => {
                if (listTutor && listTutor.code === "success") {
                    // tutors = listTutor.data
                    this.setState({ listTutor: listTutor.data })
                } else if (listTutor && listTutor.code === "error") {
                    alert(listTutor.message)
                }
            }
        ).catch(err => console.log(err));
        console.log(this.state.listTutor);
    }
    show_tutor = () => {
        const listTutor = this.state.listTutor.map((item) =>
            <div className="col col-md-3 row1" key={item.idTutor}>
                <TutorItem key={item.idTutor} name={item.nameTutor}
                     address={item.addressTutor} subject= {item.nameSubject}
                     fee={item.fee} detail={item.infoTutor}
                     birthday={item.birthdayTutor} idTutor={item.idTutor}
                     check={item.authentication}/>
            </div>
        );
        return listTutor;
        ;
    }
    // searchFee = () => {
    //     if(this.state.fee )
    // }
    // Hàm tìm kiếm tutor
    searchTutor = async () => {
        var options = {
            nameSubject: this.state.subject,
            addressTutor: this.state.addressTutor,
            methodTeaching: this.state.methodTeaching,
            jobTutor: this.state.jobTutor
        }

        var list = await TutorAPI.searchTutor(options).then(
            listTutor => {
                if (listTutor && listTutor.code === "success") {
                    list = listTutor.data
                    this.setState({ listTutor: listTutor.data })
                } else if (listTutor && listTutor.code === "error") {
                    alert(listTutor.message)
                }
            }
        ).catch(err => console.log(err)
        )
        console.log(this.state.listTutor)
    }
    render() {
        const { listTutor, activePage, tutorPerPage } = this.state;

        // Logic for displaying todos
        const indexOfLastTutor = activePage * tutorPerPage;
        const indexOfFirstTutor = indexOfLastTutor - tutorPerPage;
        const currentTutor = listTutor.slice(indexOfFirstTutor, indexOfLastTutor);

        const renderTodos = currentTutor.map((item) => {
            return <div className="col col-md-3 row1" key={item.idTutor}>
                <TutorItem key={item.idTutor} idTutor={item.idTutor} name={item.nameTutor} address={item.addressTutor} subject={item.nameSubject} fee={item.fee} detail={item.infoTutor} image={item.link_image} check={item.authentication} />
            </div>;
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(listTutor.length / tutorPerPage); i++) {
            pageNumbers.push(i);
        }
        const divStyle = {
            background:'#069D86',
          };
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div className="item-page" value={number} key={number}><label key={number}
                    id={number}
                    onClick={this.handlePageChange}>{number}</label></div>
            );
        });

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
                        <select required="" className="select-search" name="addressTutor" onChange={this.handleChangeInputTextForm}>
                            <option value="" className="opt-search">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tỉnh thành--</option>
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
                        <select required="" className="select-search" name="subject" onChange={this.handleChangeInputTextForm} value={this.state.subject}>
                            <option value="" className="opt-search">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Môn học--</option>
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
                        <select required="" className="select-search" name="methodTeaching" onChange={this.handleChangeInputTextForm}>
                            <option value="" className="opt-search">&nbsp;&nbsp;&nbsp;--Hình thức dạy--</option>
                            <option value="0">Online</option>
                            <option value="1">Offline (Tại nhà)</option>
                            <option value="2">Cả 2 hình thức</option>
                        </select>
                        {/* <select required="" className="select-search" name="fee" onChange={this.handleChangeInputTextForm}>
                            <option value="" className="opt-search">&nbsp;--Học phí 1 buổi--</option>
                            <option value="1">Dưới 100.000</option>
                            <option value="2">Từ 100.000 đến 200.000</option>
                            <option value="3">Từ 200.000 đến 300.000</option>
                            <option value="4">Trên 300.000</option>
                        </select> */}
                        <select required="" className="select-search" name="jobTutor" onChange={this.handleChangeInputTextForm}>
                            <option value="" className="opt-search">&nbsp;&nbsp;&nbsp;--Nghề nghiệp--</option>
                            <option value="Sinh viên">Sinh viên</option>
                            <option value="Giáo viên">Giáo viên</option>
                            <option value="Chuyên gia">Chuyên gia</option>
                        </select>
                        <button className="search-title-btn" onClick={this.searchTutor}> <i className="fas fa-search"></i> &nbsp;Tìm kiếm</button>
                    </div>
                    <div className="result-sea rch">
                        <p className="number-search">Có <label>{this.state.listTutor.length}</label> kết quả</p>
                    </div>
                </div>
                <div className="result-container">
                    <div className="row">
                        {renderTodos}
                    </div>
                    <div className="rank-page">
                        <div className="page-number">
                            <div className="item-page" onClick={this.handlePageChangePre}><label ><i className="fas fa-angle-left"></i></label></div>
                            {renderPageNumbers}
                            <div className="item-page"><label onClick={this.handlePageChangeNext}><i className="fas fa-angle-right"></i></label></div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SearchListTutor;