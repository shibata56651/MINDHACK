import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import ltyImg from './../MINDHACK_ClappingHands_JP.gif';

const TopContents = () => {
  const [context, setContext] = useState(null);
  const [loaded, setLoaded] = useState(0);
  const [angle, setAngle] = useState(0);

  return <main className='top__contents'>
    <h2 className='hdg__style1'>ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</h2>

    <div className='top__contents-wrap'>
    <p>ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>

      <div className='lyt'>
        <div className='lyt-text'>
          <p>ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
        </div>
        <div className='lyt-img'>
          <img src={ltyImg} alt="" />
        </div>
      </div>
    </div>
  </main>
}

export default TopContents;