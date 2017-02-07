// import kittyUL from 'src/img/kitty-ul.png';
// import kittyUM from 'src/img/kitty-um.png';
// import kittyUR from 'src/img/kitty-ur.png';
// import kittyLL from 'src/img/kitty-ll.png';
// import kittyLM from 'src/img/kitty-lm.png';
// import kittyLR from 'src/img/kitty-lr.png';
import rey from 'src/img/Rey.png';
import brFlag from 'src/img/brazil_small.png';
import soccer from 'src/img/SoccerBallSmall.png';
import r2d2 from 'src/img/R2-D2_small.png';
import light1 from 'src/img/magentalight_small.png';
import light2 from 'src/img/greenlight_small.png';
import bb8 from 'src/img/bb8_small.png';

const kittySrcs = [
  brFlag, soccer, rey, r2d2, light1, light2, bb8
];

const kittyImages = Array(7).fill(null).map((_, idx) => {
  const kitty = new Image();
  kitty.src = kittySrcs[idx];
  return kitty;
});

function randomKittyImage () {
  const idx = Math.floor(Math.random() * kittyImages.length);
  return kittyImages[idx];
}

export default randomKittyImage;
