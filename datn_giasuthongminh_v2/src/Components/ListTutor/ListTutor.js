import React, { Component } from 'react';
import './ListTutor.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TutorItem from '../TutorItem/TutorItem';
import '../css/Slick.css';
import TutorApi from '../../API/TutorAPI';
class ListTutor extends Component {
    constructor(props){
        super(props);
        this.state={
            tutor: [],
            
        }
    }
    async componentDidMount(){
        let value = await TutorApi.getAll();
        console.log(value);
        this.setState({
            tutor:value.data
        });
        console.log(this.state);
        
    }
    show_tutor = () => {
        const listTutor = this.state.tutor.sort((a,b)=>b.star - a.star).map((item) =>
            <div className="slide-tutor" key={item.idTutor}>
                <TutorItem key={item.idTutor} name={item.nameTutor}
                     address={item.addressTutor} subject= {item.nameSubject}
                     fee={item.fee} detail={item.infoTutor}
                     birthday={item.birthdayTutor} idTutor={item.idTutor} star={item.star}
                     image={item.link_image} check={item.authentication}/>
             </div>
        );
        console.log(listTutor);
        return listTutor.slice(0,10);
    }
    render() {
        var  settings = {
            infinite: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 426,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="listTutor-container">
                <div className="listTutor-con">
                <div className="list-title">
                    <h1>Gia sư nổi bật</h1>
                </div>
                
                <Slider {...settings}>
                    {this.show_tutor()}
                </Slider>
                </div>
            </div>
            
        );
    }
}

export default ListTutor;