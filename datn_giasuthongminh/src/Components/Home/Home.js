import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import PostNews from '../PostNews/PostNews';
import Footer from '../Footer/Footer';
import ListTutor from '../ListTutor/ListTutor';
import SigninTutor from '../SigninTutor/SigninTutor';
import Guide from '../Guide/Guide';
import scrollToComponent from 'react-scroll-to-component';
class Home extends Component {
    constructor(){
        super()
        this.state=({
            index: 0
        })
    }

    handleScroll=(index)=>{

        if(index == 1){
            scrollToComponent(this.sec1, {offset:0, align:'top', duration: 500})
        }
    }
    render() {
        return (
            <div>
                <Nav handleScroll ={this.handleScroll}/>
                <section ref={(section) => {this.sec0 = section}}>
                    <PostNews/>
                </section>
                <section ref={(section) => {this.sec1 = section}}><Guide/></section>
                <section ref={(section) => {this.sec2 = section}}><SigninTutor/></section>
                
                <ListTutor/>
                <Footer/>
            
            </div>
        );
    }
}

export default Home;