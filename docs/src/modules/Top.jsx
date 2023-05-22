import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TopContents } from './index';

import logo from './../mh-logo.webp';
import leftHand from './../sozai/hands/mindhack_hand_L.png';
import rightHand from './../sozai/hands/mindhack_hand_R.png';
import redFlower from './../flower-icon-01.webp';
import blueFlower from './../flower-icon-02.webp';
import yellowFlower from './../flower-icon-03.webp';

const Top = () => {
  const [context, setContext] = useState(null);
  const [loaded, setLoaded] = useState(0);
  const [angle, setAngle] = useState(0);

  // let count = 1;
  
  // const canvas = document.getElementById('mv');

  // useEffect(() => {
  //   const ctx = canvas.getContext('2d');
  //   ctx.width = window.innerWidth;
  //   ctx.height = window.innerHeight;
  //   setContext(ctx);
  // }, []);

  // useEffect(() => {
  //   if(context!==null) {
  //     let redFlowerImg = new Image();
  //     let blueFlowerImg = new Image();
  //     let yellowFlowerImg = new Image();
  //     redFlowerImg.src = redFlower;
  //     blueFlowerImg.src = blueFlower;
  //     yellowFlowerImg.src = yellowFlower;

  //     redFlowerImg.onload = () => {
  //       setInterval(() => {
  //         console.log(angle)
  //         context.clearRect(0, 0, canvas.width, canvas.height);
  //         context.beginPath();
  //         context.drawImage(redFlowerImg, -(redFlowerImg.width / 2), -(redFlowerImg.height / 2));
  //         context.rotate(count * Math.PI / 180);
  //         count++;
  //       }, 1000);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if(loaded) {
      
  //   }
  // }, [loaded]);

  return <div className='top__container'>
    <div className='display-top'>
      {/* <canvas id='mv'> */}
        <img src={logo} className="display-top__logo" alt="" />
      <motion.div className='hands' initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 50 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
        <img src={leftHand} className="hands__left" alt="" />
        <img src={rightHand} className="hands__right" alt="" />
      </motion.div>
      {/* </canvas> */}
      <h2 className='hdg__style1'>ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</h2>
      <TopContents />
    </div>
  </div>
}

export default Top;