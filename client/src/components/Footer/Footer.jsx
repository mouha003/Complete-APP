import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Links</span>
          <span>FAQ</span>
          <span>Stores</span>
          <span>Terms And Conditions</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>YT Fashion is an Online Shopping Platform dedicated in using our financial success to helping humanity and famillies in need across Africa.
          A portion of your purshases goes towards supporting different causes, from helping families in need in Africa, to providing support for cancer patients and those affected by mental illnesses and more. With your help, we're making a difference in the world, one fashion statement at a time and we cannot thank you enough.

            -Yours Truly / Thank You!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>support@ytfashion.com</span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"><img src="/img/yt_logo.png" alt="" /></span>
          {/* <span className="logo">YT Fashion</span> */}
          <span className="copyright">© Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer