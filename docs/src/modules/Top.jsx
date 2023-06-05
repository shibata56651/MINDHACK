import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion';
import { TopContents } from './index';
import { About, Info, Story, World } from './pages/index';

import logo from './../mh-logo.webp';
import leftHand from './../sozai/hands/mindhack_hand_L.png';
import rightHand from './../sozai/hands/mindhack_hand_R.png';

const Top = () => {
  // const [context, setContext] = useState(null);
  // const [loaded, setLoaded] = useState(0);
  const [changePage, setChangePage] = useState('TOP');

  // const flowers = [
  //   redFlower,
  //   blueFlower,
  //   yellowFlower
  // ]

  // let images = [];

  // useEffect(() => {
    // for (const i in flowers) {
    //   images[i] = new Image();
    //     images[i].src = flowers[i];
    // }

    // const canvas = document.getElementById('mv');
    // const ctx = canvas.getContext('2d');
    // let angle = 5;

    // canvas.width = canvas.naturalWidth;
    // canvas.height = canvas.naturalHeight;

    // images.forEach((element, i) => {
    //   element.onload = () => {
    //     setInterval(() => {
    //       ctx.clearRect(0, 0, canvas.width, canvas.height);

    //       angle++;

    //       ctx.translate(canvas.width / 2, canvas.height / 2);
    //       ctx.rotate((angle * Math.PI) / 180);
    //       ctx.drawImage(
    //         element,
    //         -canvas.width / 2,
    //         -canvas.height / 2,
    //         canvas.width,
    //         canvas.height,
    //       );
    //       ctx.rotate((-angle * Math.PI) / 180);
    //       ctx.translate(-canvas.width / 2, -canvas.height / 2);
  
    //       // if (angle === 360) {
    //       //   setAngle(0);
    //       // }
    //     }, 300);
    //   }
    // });

    // let redFlowerImg = new Image();
    // let blueFlowerImg = new Image();
    // let yellowFlowerImg = new Image();
    // redFlowerImg.src = redFlower;
    // blueFlowerImg.src = blueFlower;
    // yellowFlowerImg.src = yellowFlower;

    // redFlowerImg.onload = () => {
    //   setInterval(() => {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     angle++;

    //     ctx.translate(canvas.width / 2, canvas.height / 2);
    //     ctx.rotate((angle * Math.PI) / 180);
    //     ctx.drawImage(
    //       redFlowerImg,
    //       -canvas.width / 2,
    //       -canvas.height / 2,
    //       canvas.width,
    //       canvas.height,
    //     );

    //     ctx.rotate((-angle * Math.PI) / 180);
    //     ctx.translate(-canvas.width / 2, -canvas.height / 2);

    //     // if (angle === 360) {
    //     //   setAngle(0);
    //     // }
    //   }, 300);
    // }
  // }, []);

  return <BrowserRouter>
  <div className='content'>
    <header>
      <div className='header-list'>
        <ul>
          <li className='header-list__items'><button type='button' className='header-button'><Link to="/" className='header-list__link-text'>TOP</Link></button></li>
          <li className='header-list__items'><button type='button' className='header-button'><Link to="/about" className='header-list__link-text'>ABOUT</Link></button></li>
          <li className='header-list__items'><button type='button' className='header-button'><Link to="/world" className='header-list__link-text'>WORLD</Link></button></li>
          <li className='header-list__items'><button type='button' className='header-button'><Link to="/story" className='header-list__link-text'>STORY</Link></button></li>
          <li className='header-list__items'><button type='button' className='header-button'><Link to="/info" className='header-list__link-text'>INFO</Link></button></li>
        </ul>
      </div>
    </header>

    <div className='top__container'>
      <div className='display-top'>
        <div id='mv'>
          <motion.img src={logo} className="display-top__logo" alt="" initial={{ opacity: 0, translateY: 50, translateX: -300 }} animate={{ opacity: 1, translateY: 0, translateX: -300 }} exit={{ opacity: 0, translateY: 50, translateX: -300 }} transition={{ duration: 0.8, ease: 'easeInOut' }} />
        </div>
        <motion.div className='hands' initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 50 }} transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}>
          <img src={leftHand} className="hands__left" alt="" />
          <img src={rightHand} className="hands__right" alt="" />
        </motion.div>
      </div>
      <Routes>
        <Route path="/" element={<TopContents />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/story" element={<Story />} />
        <Route path="/world" element={<World />} />
      </Routes>
    </div>
  </div>
  </BrowserRouter>
}

export default Top;