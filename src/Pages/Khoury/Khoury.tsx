import React from "react";

import "./style.css"

export default function Khoury() {

    const stickers = [
        "/images/khoury/sticker1.png",
        "/images/khoury/sticker2.png",
        "/images/khoury/sticker3.png"
    ];

    const sandbox = [
        "/images/khoury/sandbox1.jpg",
        "/images/khoury/sandbox2.jpg",
        "/images/khoury/sandbox3.jpg",
        "/images/khoury/sandbox4.jpg",
    ];


  return (
    <div>
    <div id="commencement" className="text-sm">

        {/* {JSON.stringify(imagez)} */}


      <h1 className="text-xl mb-3">
        <span>
          <i>Commencement 2024 </i>
        </span>
      </h1>
      <p>
        Last spring I was tasked with creating illustrations for the 2024
        Commenement Celebrations.
      </p>
      <p>
        The general theme of these drawings is supposed to be celebration and
        companionship. There would be cheerful characters tossing their caps in
        the air with bright smiles that you could easily connect to. These
        illustrations were used to create stickers, social media posts, and a
        hero image for the Commencement page on the Khoury website.
      </p>
      <br />
      <div className="image-container flex place-content-center">
            {stickers.map((sticker) => (
            <img src={`${sticker}`} alt="sticker" width="25%"/>
          ))}
          </div>
          <img src="/images/khoury/hero.png" alt="hero" className="place-self-center" width="80%" />
      </div>

        <div id="socialhandle" className="text-sm">
                <h1 className="text-xl mb-3">
                    <span><i>Social Handle Signage </i></span>
                </h1>
                <br />
                <p>I was tasked to pick up a seemingly forgotton social media infographic project! Khoury has been
                    needing an upgraded poster to showcase their social media presence, and highlight the college's new
                    TikTok and Threads accounts.</p>
                <p>This project required a fair amount of iteraction since it needed to be displayed on the digital
                    monitors and on the walls around campus. We eventually settled on a clean graphic with a flowing
                    line texture to bring cohesion. The horizontal sign was to be a screensaver for iPad displays, while
                    the square layout became 14in x 14in vinyl signs posted up by water coolers in West Village H </p>
                <div className="flex place-content-center">
                        <img src="/images/khoury/socialhandle ipad.jpg" alt="iPad Social Handle Sign" width="45%" />
                        <img src="/images/khoury/socialhandle vinyl.jpg" alt="Vinyl Social Handle Sign" width="35%" />
                </div>
            </div>


            <div>
        <div className="image-container flex place-content-center">
          {sandbox.map(img => (
              <img src={`${img}`} alt="sandbox" width="20%"/>
          ))}
          </div>
        </div>

      
      </div>
  );
}
