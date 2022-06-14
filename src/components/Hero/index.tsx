import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Hero = () => {
  return (
    <div style={{
        position: "absolute",
        bottom: 48 * 14,
        left: 48 * 3,
        height: 100,
        width: TILE_SIZE,
        backgroundRepeat: "no-repeat",
        animation: 'hero-animation 0.6s steps(4) infinite',
        backgroundImage: "url(./assets/HERO.png)"}}></div>
  )
}

export default Hero;