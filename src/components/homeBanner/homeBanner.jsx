import React from "react";
import Button from "../button/button";
import image from "../../assets/Group 87.png";

const homeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="first">
        <h5 style={{maxWidth:'540px', fontSize:'38px', fontWeight:'700', lineHeight:'43px', letterSpacing:'1px'}}>Top-notch custom tailoring fory our bulk requirements.</h5>
        <p style={{maxWidth:'540px', fontSize:'22px', letterSpacing:'1px',lineHeight:'30px', marginBottom:'14px'}}>
          We are fully equipped to fulfil all your bulk orders promptly and
          efficiently, with high standards of excellence.
        </p>
        <button style={{background:'#5A2382', fontSize:'20px', fontWeight:'600', letterSpacing:'1px', lineHeight:'20px', height:'43.98px', width:'300px', borderRadius:'8px', border:'none', color:'white', textAlign:'center', padding:'12px 24px'}}>Book your fitting today</button>
        {/* <Button style{} label="Book your fitting today"/> */}
      </div>
      <div className="image">{/* <img src={image} /> */}</div>
    </div>
  );
};

export default homeBanner;
