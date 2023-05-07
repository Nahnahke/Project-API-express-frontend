import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_njwxvdxy.json"
        style={{ height: '300px', width: '300px' }} />
    </div>
  );
}

export default Lottie;
