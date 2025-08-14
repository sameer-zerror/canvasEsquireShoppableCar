import Article from "@/components/Article";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
// import ShoppableImage from "@/components/ShoppableImage";
import React from "react";
// const products = [
//   {
//     x: 30,
//     y: 60,
//     brand: "BKIND",
//     title: "Algae Peel-Off Mask",
//     price: "115.00",
//     img: "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=300",
//     link: "/products/algae-peel-off-mask-with-soothing-properties",
//     desc: "The E-Class has consistently been Mercedes-Benz India’s best-seller and its success only surged further when the long wheelbase (LWB) variant was introduced in 2017",
//   },
//   {
//     x: 62,
//     y: 60,
//     brand: "MOKOSH",
//     title: "Active Toning Essence",
//     price: "59.00",
//     img: "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/esencja-Roza-PL.jpg?v=1660223483&width=300",
//     link: "/products/active-toning-essence-white-rose-100-ml",
//     desc: "The E-Class has consistently been Mercedes-Benz India’s best-seller and its success only surged further when the long wheelbase (LWB) variant was introduced in 2017",
//   },
//   {
//     x: 50,
//     y: 50,
//     brand: "MOKOH",
//     title: "Active Toning Essence",
//     price: "59.00",
//     img: "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/esencja-Roza-PL.jpg?v=1660223483&width=300",
//     link: "/products/active-toning-essence-white-rose-100-ml",
//     desc: "The E-Class has consistently been Mercedes-Benz India’s best-seller and its success only surged further when the long wheelbase (LWB) variant was introduced in 2017",
//   },
// ];
const index = () => {
  return (
    <>
      <Header />
      <div id="hero-wrap">
        <Article />
      </div>
      {/* <ShoppableImage
        imageDesktop="https://images.unsplash.com/photo-1627656958549-cce472c53a94?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageMobile="https://images.unsplash.com/photo-1627656958549-cce472c53a94?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        products={products}
      /> */}
      <Footer />
    </>
  );
};

export default index;
