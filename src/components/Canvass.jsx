// import { useEffect, useRef, useState } from "react";

// const Canvass = () => {
//   const canvasRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     const frameCount = 297; // total frames

//     const currentFrame = (i) =>
//       `/ezgif-split/ezgif-frame-${(i + 1)
//         .toString()
//         .padStart(3, "0")}.jpg`;

//     const img = new Image();
//     img.src = currentFrame(0);
//     img.onload = () => {
//       context.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };

//     const preloadImages = () => {
//       Array.from({ length: frameCount }, (_, i) => {
//         const image = new Image();
//         image.src = currentFrame(i);
//       });
//     };

//     const updateImage = (i) => {
//       img.src = currentFrame(i);
//       img.onload = () => {
//         context.drawImage(img, 0, 0, canvas.width, canvas.height);
//       };
//     };

//     const onScroll = () => {
//       const wrap = document.querySelector(".png__sequence");
//       const rect = wrap.getBoundingClientRect();

//       // When the top hits viewport top
//       const start = 0; 
//       const end = window.innerHeight * 4; // matches height: 500vh => 4 screens inside

//       // Only animate when in range
//       if (rect.top <= start && Math.abs(rect.top) <= end) {
//         const scrollFraction = Math.abs(rect.top) / end;
//         const frameIndex = Math.min(
//           frameCount - 1,
//           Math.floor(scrollFraction * frameCount)
//         );
//         requestAnimationFrame(() => updateImage(frameIndex));
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     preloadImages();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* <div style={{ width: "100%", height: "100vh" }}></div> */}
//       <div className="png__sequence" style={{ height: "500vh" }}>
//         <canvas
//           ref={canvasRef}
//           width={dimensions.width}
//           height={dimensions.height}
//           className="png__sequence__canvas"
//           id="canvas"
//         />
//       </div>
//       {/* <div style={{ width: "100%", height: "100vh" }}></div> */}
//     </>
//   );
// };

// export default Canvass;

import { useEffect, useRef, useState } from "react";

const Canvass = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imagesRef = useRef([]); // store preloaded images here

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const frameCount = 297;

    const currentFrame = (i) =>
      `/ezgif-split/ezgif-frame-${(i + 1).toString().padStart(3, "0")}.jpg`;

    // Preload all frames into memory
    const preloadImages = () => {
      const arr = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        arr.push(img);
      }
      imagesRef.current = arr;
    };

    // Draw the first frame immediately after it's loaded
    const firstImg = new Image();
    firstImg.src = currentFrame(0);
    firstImg.onload = () => {
      context.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
    };

    preloadImages();

    const updateImage = (index) => {
      const img = imagesRef.current[index];
      if (img && img.complete) {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const onScroll = () => {
      const wrap = document.querySelector(".png__sequence");
      const rect = wrap.getBoundingClientRect();
      const start = 0;
      const end = window.innerHeight * 4;

      if (rect.top <= start && Math.abs(rect.top) <= end) {
        const scrollFraction = Math.abs(rect.top) / end;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );
        requestAnimationFrame(() => updateImage(frameIndex));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="png__sequence" style={{ height: "500vh" }}>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="png__sequence__canvas"
        id="canvas"
      />
    </div>
  );
};

export default Canvass;
