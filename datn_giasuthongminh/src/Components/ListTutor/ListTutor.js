import React, { Component } from 'react';
import './ListTutor.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TutorItem from '../TutorItem/TutorItem';
import '../css/Slick.css';
class ListTutor extends Component {
    constructor(props){
        super(props);
        this.state={
            Tutor : [
                {
                    id: 1,
                    name:"Đỗ Trí Đức",
                    subject:"Hóa học",
                    address:"Thái Bình",
                    fee:500000,
                    detail:"Là sinh viên năm cuối Đại học Bách Khoa Hà Nội"
                },
                {
                    id: 2,
                    name:"Đỗ Thị Hồng",
                    subject:"Toán",
                    address:"Thanh Hóa",
                    fee:200000,
                    detail:"Là sinh viên năm cuối Đại học Bách Khoa Hà Nội"
                },
                {
                    id:3,
                    name:"Nguyễn Thị Chi",
                    subject:"Vật lí",
                    address:"Bắc Ninh",
                    fee:300000,
                    detail:"Là sinh viên năm cuối Đại học Bách Khoa Hà Nội"
                },
                {
                    id:4,
                    name:"Nguyễn Thế Trinh",
                    subject:"Sinh học",
                    address:"Hải Dương",
                    fee:400000,
                    detail:"Là sinh viên năm cuối Đại học Bách Khoa Hà Nội"
                },
                {
                    id:5,
                    name:"Đỗ Mạnh Khoa",
                    subject:"Sinh học",
                    address:"Hà Nội",
                    fee:400000,
                    detail:"Là sinh viên năm cuối Đại học Bách Khoa Hà Nội"
                }
            ]
        }
    }
    show_tutor = () => {
        const listTutor = this.state.Tutor.map((item) =>
            <div className="slide-tutor" key={item.id}>
                <TutorItem key={item.id} name={item.name} address={item.address} subject={item.subject} fee={item.fee} detail={item.detail}/>
             </div>
        );
        return listTutor;
    }
    render() {
        const  settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow:<div>hello</div>
        };
        return (
            <div className="listTutor-con">
                <div className="list-title">
                    <h1>Gia sư nổi bật</h1>
                </div>
                
                <Slider {...settings}>
                    {this.show_tutor()}
                </Slider>
            </div>
        );
    }
}

export default ListTutor;