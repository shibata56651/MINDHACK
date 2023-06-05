import { motion } from 'framer-motion';
import ltyImg from './../../MINDHACK_ClappingHands_JP.gif';

const ABOUT = () => {
  return <main className='top__contents'>
  <h2 className='hdg__style1'>About</h2>

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

    <p className='text-loead'><b>ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</b></p>
  </div>
</main>
}

export default ABOUT;