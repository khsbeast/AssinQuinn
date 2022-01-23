import "./Slick.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../../Cards/Cards";
import Cross from './cross.png'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            arr:[],
            inde:-1,
        }
    }
    componentDidMount()
    {
        let a = []
        a.push(<Cards end={true} />)
        for(let i = 0;i <= this.props.ind;i++)
        a.push(<Cards ob={this.props.ob[i]}/>)
        if(this.props.ind+1 < this.props.ob.length)
        a.push(<Cards ob={this.props.ob[this.props.ind+1]}/>)
        this.setState({arr:a})
    }
    nextClick = (e) =>{
        if(e === this.state.arr.length - 1 && e < this.props.ob.length-1)
        {
          this.state.arr.push(<Cards ob={this.props.ob[e+1]}/>)
          this.setState({arr:this.state.arr})
        }
        if(e === 0)
        {
            this.props.closem()
        }
    }
    handleClick = (e) =>{
          this.props.closem()
  }
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      afterChange:this.nextClick,
      //slidesToScroll: 5,
      initialSlide: this.props.ind+1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            //slidesToScroll: 3,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            centerPadding: "45px",
            //slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "35px",
            //slidesToScroll: 1,
          },
        },
          {
            breakpoint: 420,
            settings: {
              className: "center2",
              slidesToShow: 1,
              centerPadding: "50px",
              //slidesToScroll: 1,
          },
        },
        {
            breakpoint: 400,
            settings: {
              className: "center3",
              slidesToShow: 1,
              centerPadding: "26px",
              //slidesToScroll: 1,
          },
        }
      ]
    };
    
    return (
      <div>
        <div style={{backgroundColor:'rgba(0 , 0 , 0,0.8)'}}>
          <div style={{display:'flex',flexDirection:'row-reverse'}}>
            <img alt="img" onClick={this.handleClick} src={Cross} style={{width:'40px',height:'40px',marginTop:'5vh',marginRight:'3vh'}}/>
          </div>
          <Slider {...settings} >
              {this.state.arr}
          </Slider>
        </div>
      </div>
    );
  }
}
