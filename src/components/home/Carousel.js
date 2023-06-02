import React from "react";

function ImageCarousel() {
  const styles = `
    html, body {
      margin: 0;
      padding: 0;
    
    }

    .pic-ctn {
      width: 200px;
      height: 100px;
      
    }

    @keyframes display {
      0% {
        transform: translateX(200px);
        opacity: 0;
      }
      10% {
        transform: translateX(0);
        opacity: 1;
      }
      20% {
        transform: translateX(0);
        opacity: 1;
      }
      30% {
        transform: translateX(-200px);
        opacity: 0;
      }
      100% {
        transform: translateX(-200px);
        opacity: 0;
      }
    }

    .pic-ctn {
      position: relative;
      width: 600px;
      height: 700px;
      margin-top: 15vh;
      margin-left: 25vh;
      
    }

    .pic-ctn > img {
      position: absolute;
      top: 0;
      left: calc(50% - 100px);
      opacity: 0;
      animation: display 15s infinite;
    }

    img:nth-child(2) {
      animation-delay: 3s;
    }
    img:nth-child(3) {
      animation-delay: 6s;
    }
    img:nth-child(4) {
      animation-delay: 9s;
    }
    img:nth-child(5) {
      animation-delay: 12s;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="pic-ctn">
        {/* eslint-disable-next-line */}
        <img src="/assets/images/Holiday.jpg" alt="" className="pic" />
        {/* eslint-disable-next-line */}
        <img src="/assets/images/3.jpg" alt="" className="pic" />
        {/* eslint-disable-next-line */}
        <img src="/assets/images/8.jpg" alt="" className="pic" />
        {/* eslint-disable-next-line */}
        <img src="/assets/images/9.jpg" alt="" className="pic" />
        {/* eslint-disable-next-line */}
        <img src="/assets/images/as.jpg" alt="" className="pic" />
      </div>
    </div>
  );
}

export default ImageCarousel;
