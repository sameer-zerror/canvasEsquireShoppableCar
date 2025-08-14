import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Logo from "@/assets/images/esquire-logo.png";
// import Menu from "./Menu";
// import Search from "./Search";
// import { useMenu } from "@/context/MenuProvider";
// import { Const } from "@/utils/Constants";
export const menus = [
  {
    name: "Entertainment",
    link: "/entertainment",
    submenus: [
      { name: "All", link: "/entertainment" },
      { name: "At the Movies", link: "/entertainment/at-the-movies" },
      { name: "What to Stream", link: "/entertainment/what-to-stream" },
      { name: "The Interview", link: "/entertainment/the-interview" },
      { name: "Best of the Rest", link: "/entertainment/best-of-the-rest" },
    ],
  },
  {
    name: "Style",
    link: "/style",
    submenus: [
      { name: "All", link: "/style" },
      { name: "Just Landed", link: "/style/just-landed" },
      { name: "Kings of Style", link: "/style/kings-of-style" },
      { name: "Grooming", link: "/style/grooming" },
      { name: "Watches & Jewellery", link: "/style/watches-and-jewellery" },
      { name: "India Couture Week", link: "/style/india-couture-week" },
    ],
  },
  {
    name: "Lifestyle",
    link: "/lifestyle",
    submenus: [
      { name: "All", link: "/lifestyle" },
      { name: "Travel", link: "/lifestyle/travel" },
      { name: "Health & Wellness", link: "/lifestyle/health-and-wellness" },
      { name: "Sex & Relationships", link: "/lifestyle/sex-and-relationships" },
    ],
  },
  {
    name: "Food & Drinks",
    link: "/food-and-drinks",
    submenus: [
      { name: "All", link: "/food-and-drinks" },
      { name: "What to Eat", link: "/food-and-drinks/what-to-eat" },
      { name: "Where to Drink", link: "/food-and-drinks/where-to-drink" },
      { name: "From the Masters", link: "/food-and-drinks/from-the-masters" },
    ],
  },
  {
    name: "Tech & Auto",
    link: "/tech-and-auto",
    submenus: [
      { name: "All", link: "/tech-and-auto" },
      { name: "Cars & Bikes", link: "/tech-and-auto/cars-and-bikes" },
      { name: "Gadgets", link: "/tech-and-auto/gadgets" },
      { name: "Gaming", link: "/tech-and-auto/gaming" },
    ],
  },
  {
    name: "Culture",
    link: "/culture",
    submenus: [
      { name: "All", link: "/culture" },
      { name: "Art & Design", link: "/culture/art-and-design" },
      { name: "Books & Music", link: "/culture/books-and-music" },
      { name: "Sports", link: "/culture/sports" },
    ],
  },
  //   {
  //     name: "Web Stories",
  //     link: "/web-stories",
  //   },
    {
      name: "Sports",
      link: "/sport",
       submenus: [],
    },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
      {/* <Menu
        open={open}
        search={search}
        setSearch={setSearch}
        setOpen={setOpen}
      />
      <Search
        search={search}
        open={open}
        setSearch={setSearch}
        setOpen={setOpen}
      /> */}

      <div className="navbar-stik">
        <div className="navbar">
          <div className="nav-logo flex-all">
            <Link href="">
              <img src="https://www.esquireindia.co.in/_next/static/media/esquire-logo.007285c4.png" fill alt="Esquire India Header Logo"/>
            </Link>
          </div>
          <div className="nav-items">
            {menus && menus.map((menu, i) => {
              return (
                <Link href="#" key={`menu-${i}`}>
                  <div className="nav-item">
                    {menu?.name.toUpperCase() ?? ""}
                  </div>
                </Link>
              );
            })}
            
          </div>
          <div className="nav-right">
            <div
              className="search flex-all"
              onClick={() => {
                setSearch(!search);
              }}
            >
              Search
            </div>
            <div
              className="menu"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div className="menu-line m1"></div>
              <div className="menu-line m2"></div>
              <div className="menu-line m2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
