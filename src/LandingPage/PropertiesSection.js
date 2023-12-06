import "./PropertiesSection.css";
import { Link } from 'react-router-dom';

export default function Properties() {
  return (
    <div className="properties-cont">
      <div className="property-inner-cont">
        <div className="property-top">
          <div className="property-title">
            Popular Owner Properties<div className="bottom-bar"></div>
          </div>
          <Link to="\" className="property-button">See all properties <span className="arrow-span">&#8669;</span></Link>
        </div>
        <div className="box-container-outer">
            <div className="button-cont"><button className="button-act">&lt;</button></div>
            <div className="boxes-cont-inner">
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
                <Box title="3 BHK Flat" price="52.2 Lac" size="size" location="Location" status="Ready to move" />
            </div>
            <div className="button-cont"><button className="button-act">&gt;</button></div>
        </div>
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div className="box-cont">
      <div className="img-cont"></div>
      <div className="box-content">
        <div className="box-title">{props.title}</div>
        <div className="desp1">&#8377;{props.price}|{props.size}</div>
        <div className="desp2">{props.location}</div>
        <div className="desp3">{props.status}</div>
      </div>
    </div>
  );
}
