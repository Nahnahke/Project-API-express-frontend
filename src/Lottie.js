import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export const LoadingMaze = () => {
  return (
    <div>
      <Player
        loop
        autoplay
        src="https://assets2.lottiefiles.com/private_files/lf30_ployuqvp.json"
        className="lottie"
        speed={1} />
    </div>
  )
};