import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import LogoReact from '../img/logo.svg';
// import LogoJS from '../JS.png';
// import LogoNode from '../Node.png';
// import LogoPhp from '../img/php.png';

function CustomParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const generateUniqueColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colors.push(color);
    }
    return colors;
  };

  const uniqueColors = generateUniqueColors(3); // Change 3 to the number of unique images

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 50,
        particles: {
          color: {
            value: '#ffffff',
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 10,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: 'image',
            image: [
              { src: LogoReact, height: 80, width: 120, replaceColor: uniqueColors[0] },
            //   { src: LogoNode, height: 80, width: 120, replaceColor: uniqueColors[1] },
            //   { src: LogoPhp, height: 120, width: 120, replaceColor: uniqueColors[2] },
            ],
          },
          size: {
            value: { min: 5, max: 30 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default CustomParticles;
