import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import logo from './../mh-logo.webp';
import leftHand from './../sozai/hands/mindhack_hand_L.png';
import rightHand from './../sozai/hands/mindhack_hand_R.png';
import redFlower from './../flower-icon-01.webp';
import blueFlower from './../flower-icon-02.webp';
import yellowFlower from './../flower-icon-03.webp';

const TopContents = () => {
  const [context, setContext] = useState(null);
  const [loaded, setLoaded] = useState(0);
  const [angle, setAngle] = useState(0);

  return <main className='top__contents'>
    <p>ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
  </main>
}

export default TopContents;