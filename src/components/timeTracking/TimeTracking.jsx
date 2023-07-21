import React from "react";
import Card from "../card/Card";
import './timeTracking.css';
import img1 from '../../images/img1.svg'
import img2 from '../../images/img2.svg'
import img3 from '../../images/img3.svg'
import img4 from '../../images/img4.svg'
import shape from '../../images/Shape.svg'
import shape1 from '../../images/Shape1.svg'
import shapem from '../../images/Shapem.svg'
import shape1m from '../../images/Shape1m.svg'
import img1m from '../../images/img1m.svg'
import img2m from '../../images/img2m.svg'
import img3m from '../../images/img3m.svg'
import img4m from '../../images/img4m.svg'
import jeremy from '../../images/image-jeremy.png'
import ellipsis from '../../images/icon-ellipsis.svg'
const TimeTracking = () => {
  return (
    <div className="timeTracking">
      <div className="container1">
        <Card className="card_1">
          <img src={jeremy} alt="person" className="person"/>
          <div className="holderName">
            <p className="report">Report for</p>
            <p className="holder">Jeremy Robson</p>
          </div>
        </Card>
        <Card className="card_1a">
          <div className="timeDetails">
            <p className="timing">Daily</p>
            <p className="timing">Weekly</p>
            <p className="timing">Monthly</p>
          </div>
        </Card>
      </div>
    <div className="timeDetail">
    <div className="container ">
      <img src={img2} alt="" className="imgdesktop"/>
        <img src={img2m} alt="" className="imgmobile"/>
      
        <Card className="card_2 container-2">
          <div className="card-details">
             <div className="cardDetails"><p>Work</p></div>
            <div className="ellipsis"><img src={ellipsis} alt="ellipsis" /></div>
          </div>
         <div className="time">
         <p className="hours">32hrs</p>
          <p className="week">Last Week - 36hrs</p>
         </div>
        </Card>
      </div>
      <div className="container ">
       
        <img src={shape} alt="" className="imgdesktop"/>
        <img src={shape1m} alt="" className="imgmobile"/>
        <Card className="card_2 container-2">
        <div className="card-details">
             <div className="cardDetails"><p>Play</p></div>
            <div className="ellipsis"><img src={ellipsis} alt="ellipsis" /></div>
          </div>
         <div className="time">
         <p className="hours">32hrs</p>
          <p className="week">Last Week - 36hrs</p>
         </div>
        </Card>
      </div>
      <div  className="container">
      <img src={img3} alt="" className="imgdesktop"/>
        <img src={img4m} alt="" className="imgmobile"/>
        
        <Card className="card_2 container-2">
        <div className="card-details">
             <div className="cardDetails"><p>Study</p></div>
            <div className="ellipsis"><img src={ellipsis} alt="ellipsis" /></div>
          </div>
         <div className="time">
         <p className="hours">32hrs</p>
          <p className="week">Last Week - 36hrs</p>
         </div>
        </Card>
      </div>
      <div  className="container">
      <img src={img1} alt="" className="imgdesktop"/>
        <img src={img1m} alt="" className="imgmobile"/>
       
        <Card className="card_2 container-2">
        <div className="card-details">
             <div className="cardDetails"><p>Exercise</p></div>
            <div className="ellipsis"><img src={ellipsis} alt="ellipsis" /></div>
          </div>
         <div className="time">
         <p className="hours">32hrs</p>
          <p className="week">Last Week - 36hrs</p>
         </div>
        </Card>
      </div>
      <div  className="container">
      <img src={shape1} alt="" className="imgdesktop" />
        <img src={shapem} alt="" className="imgmobile"/>
       
        <Card className="card_2 container-2">
        <div className="card-details">
             <div className="cardDetails"><p>Social</p></div>
            <div className="ellipsis"><img src={ellipsis} alt="ellipsis" /></div>
          </div>
         <div className="time">
         <p className="hours">32hrs</p>
          <p className="week">Last Week - 36hrs</p>
         </div>
        </Card>
      </div>
      <div  className="container">
      <img src={img4} alt="" className="imgdesktop"/>
        <img src={img3m} alt="" className="imgmobile"/>
        <Card className="card_2 container-2">
        <div className="card-details">
             <div className="cardDetails"><p>Self Care</p></div>
            <div className="ellipsis"><img src={ellipsis} alt="ellipsis" /></div>
          </div>
         <div className="time">
         <p className="hours">32hrs</p>
          <p className="week">Last Week - 36hrs</p>
         </div>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default TimeTracking;
