import { useEffect, useState } from 'react';
import logo from './../mh-logo.webp';
import redFlower from './../flower-icon-01.webp';
import blueFlower from './../flower-icon-02.webp';
import yellowFlower from './../flower-icon-03.webp';

const Top = () => {
  const [context, setContext] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [imgSize, setImgSize] = useState(125);

  useEffect(() => {
    const canvas = document.getElementById('mv');
    const ctx = canvas.getContext('2d');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // ctx.beginPath();
    // ctx.arc(100, 100, 10, 0, Math.PI * 2, true);
    // ctx.fillStyle = "#E67A7A";
    // ctx.fill();
    setContext(ctx);
  }, []);

  useEffect(() => {
    if(context!==null) {
      let redFlowerImg = new Image();
      let blueFlowerImg = new Image();
      let yellowFlowerImg = new Image();

      redFlowerImg.src = redFlower;
      blueFlowerImg.src = blueFlower;
      yellowFlowerImg.src = yellowFlower;

      console.log(redFlowerImg)
      context.drawImage(redFlowerImg, 0, 0, 12, 12);
      setLoaded(true);
    }
  }, [context]);

  useEffect(() => {
    if(loaded) {
      // それに続く処理
    }
  }, [loaded]);

  return <div className='display-top'>
    <canvas id="mv">
      <img src={logo} className="display-top__logo" alt="logo" />
    </canvas>
  </div>
}

export default Top;