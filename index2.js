console.log(`test`);

gsap.config({
  force3D: true,
});

const mainTL = gsap.timeline({
  paused: true
})

const animDuration = 1;

const tileObject = document.querySelectorAll(".tile");

tileObject.forEach((o, index) => {

  const tl = gsap.timeline({
    // repeat: -1,
    // yoyo: true,
  });

  const tileMesh = o.querySelector(".tile__mesh");
  const tileShadow = o.querySelector(".tile__shadow");
  tl
  .fromTo(
    o,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: animDuration / 4,
    },
    0
  )
    .fromTo(
      tileMesh,
      {
        y: 0,
      },
      {
        y: -50,
        duration: animDuration / 1.5,
      },
      0
    )
    .fromTo(
      tileShadow,
      {
        opacity: 0,
        scale: .8
      },
      {
        opacity: 1,
        scale: 1,
        duration: animDuration / 1.5,
      },
      0
    );

    mainTL.add(tl, `-=0.35`)
})

console.log(
  mainTL.play()
);

// console.log(gsap);



