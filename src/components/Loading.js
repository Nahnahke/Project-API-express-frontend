import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_njwxvdxy.json"
        style={{ height: '1200px', width: '1200px' }} />
    </div>
  );
}

export default Lottie;
