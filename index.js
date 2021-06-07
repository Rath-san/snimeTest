const image = "https://via.placeholder.com";

const getMeshTranslateValue = (mesh, axis) => {
  const meshTranform = mesh.style.transform
    .split(" ")
    .find((item) => item.indexOf(`translate${axis}`) !== -1);
  const meshTranformValue = meshTranform.match(/\d+/);
  return meshTranformValue[0] || 1;
};

const scene = document.querySelector(".images__scene");
const sceneDepth = scene.dataset.depth;
const object = document.querySelector(".cube__object");
const mesh = object.querySelector(".cube__mesh");
const shadow = object.querySelector(".cube__shadow");
// mesh.style.transform = mesh.dataset.transform;

// const inter3d = () => {
//   // initialSetup

//   // on move up enlarge shadow
//   const modifyShadow = (opacity, scale) => {
//     const meshZ = getMeshTranslateValue(mesh, "Z");
//     shadow.style.opacity = 1 - meshZ / sceneDepth;
//     shadow.style.transform = `scale3d(
//       ${1 + (meshZ / sceneDepth) / 2},
//       ${1 + (meshZ / sceneDepth) / 2},
//       1
//     )`;
//   };

//   modifyShadow();

// };

// let start;

// const step = (timestamp) => {
//   if (start === undefined)
//     start = timestamp;
//   const elapsed = timestamp - start;

//   mesh.style.transform = `translateZ(${Math.min(0.1 * elapsed, 200)}px) scaleZ(0.05)`

//   inter3d()
//   // `Math.min()` is used here to make sure that the element stops at exactly 200px.

//   // if (elapsed < 2000) { // Stop the animation after 2 seconds
//   //   window.requestAnimationFrame(step);
//   // }
// }

// window.requestAnimationFrame(step)
  // mesh.style.transform = `translateZ(${e++}px) scaleZ(0.05)`

// console.log(gsap);
gsap.config({
  force3D: true
})
const tl = gsap.timeline({
  repeat: -1,
  yoyo: true
});
tl
  .fromTo(mesh, {z: 0}, {z: 250, duration: 5})
  // .to(shadow, {scale: 2, duration: 5}, '-=5')

// const scaleSet = gsap.set(shadow, 'css')
// scaleSet()

gsap.ticker.add(() => {
  // console.log(gsap.getProperty(mesh, 'z'));
  // scaleSet(1)
  const meshZ = gsap.getProperty(mesh, 'z')
  gsap.set(
    shadow,
    {
      scale: (1 + meshZ / 250),
      opacity: 1 - meshZ / 250,
      boxShadow: `0 0 ${meshZ / 250 * 100}px ${50}px #aaa`
    }
  )

})
