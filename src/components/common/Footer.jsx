import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "@/assets/images/esquire-logo.png";
// import Cookies from "@/assets/images/cookies.png";
import Dropdown from "react-bootstrap/Dropdown";
import { FaYoutube } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
// import ScrollToTop from "./ScrollToTop";
import { AiFillInstagram } from "react-icons/ai";
// import { Const } from "@/utils/Constants";

const Footer = () => {
  const [hover, setHover] = useState(null);
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container ft-pd">
          <div className="row footer-main">
            <div className="col-md-3">
              <div className="ft-artboard sm-view">
                <Link
                  href="https://shop.yudirect.biz/EsquireIndia/Subscribe.php"
                  target="_blank"
                >
                  <img
                    src="https://www.esquireindia.co.in/artboard/Esquire-Artboard-6.webp"
                    alt="Esquire India Cover Featuring Jr NTR"
                    fill
                  />
                  <button className="btn_cntr">
                    <span className="btn btn-ft-subscribe">SUBSCRIBE</span>
                  </button>
                </Link>
              </div>
              <div className="ft-img">
                <Link href="">
                  <img src="https://www.esquireindia.co.in/_next/static/media/esquire-logo.007285c4.png" fill alt="Esquire India Footer Logo" />
                </Link>
              </div>
              {/* <div className="ft-content">
                <p>
                  Esquire is a remarkable brand with an equally remarkable
                  history. When founding editor Arnold Gingrich debuted the
                  first issue ninety-one years ago, he aimed to make it all
                  things to all men. Across our vibrant entertainment,
                  lifestyle, food & drink and current affairs coverage, that
                  ethos remains true today.
                </p>
                <p>
                  Esquire has expanded this legacy globally, launching over 18
                  international editions, including its most recent addition,
                  Esquire India.
                </p>
              </div> */}
              <div className="ft-follows">
                <div className="ft-items">
                  <Link
                  aria-label="Visit Esquire India on Facebook (opens in a new tab)"
                  rel="noopener noreferrer"
                    href={"https://www.facebook.com/esquiremagazineindia"}
                    target="_blank"
                    onMouseEnter={() => {
                      setHover(0);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  >
                    {hover == 0 ? (
                      <FaFacebookF className="footer-social-logo" />
                    ) : (
                      <FiFacebook className="footer-social-logo" />
                    )}
                  </Link>
                  <Link
                  aria-label="Visit Esquire India on Instagram (opens in a new tab)"
                  rel="noopener noreferrer"
                    href={"https://www.instagram.com/esquireindia/"}
                    target="_blank"
                    onMouseEnter={() => {
                      setHover(1);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  >
                    {hover == 1 ? (
                      <AiFillInstagram
                        style={{ fontSize: "20px" }}
                        className="footer-social-logo"
                      />
                    ) : (
                      <FiInstagram className="footer-social-logo" />
                    )}
                  </Link>
                  <Link
                  aria-label="Visit Esquire India on Twitter (opens in a new tab)"
                  rel="noopener noreferrer"
                    href={"https://x.com/esquire_india"}
                    target="_blank"
                    style={{ position: "relative" }}
                    onMouseEnter={() => {
                      setHover(2);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  >
                    <Image
                      src={"/x.png"}
                      alt="twitterX"
                      height={29}
                      width={28}
                      className={hover == 2 ? "x-svg visi" : "x-svg"}
                    />
                    <FaXTwitter className="footer-social-logo" />
                  </Link>
                  <Link
                  aria-label="Visit Esquire India on Youtube (opens in a new tab)"
                  rel="noopener noreferrer"
                    href={"https://www.youtube.com/@esquireindia"}
                    target="_blank"
                    onMouseEnter={() => {
                      setHover(3);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  >
                    {hover == 3 ? (
                      <FaYoutube className="footer-social-logo" />
                    ) : (
                      <FiYoutube className="footer-social-logo" />
                    )}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="nav-sec">
                <div className="nav-item-sec">
                  <h4 className="nav-item-title">ESQUIRE INDIA</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href=""
                      >
                        About us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href=""
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href=""
                      >
                        Work with us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-item-sec">
                  <h4 className="nav-item-title">SUPPORTS</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href=""
                      >
                        PRIVACY POLICY
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href=""
                      >
                        TERMS OF USE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href=""
                      >
                        DISCLAIMER
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nsm-view">
                  <div className="ft-artboard">
                    <Link
                      href="https://shop.yudirect.biz/EsquireIndia/Subscribe.php"
                      target="_blank"
                    >
                      <img
                        src="https://www.esquireindia.co.in/artboard/Esquire-Artboard-6.webp"
                        alt="Esquire India Cover Featuring Jr NTR"
                        fill
                      />
                      <button className="btn_cntr">
                        <span className="btn btn-ft-subscribe">SUBSCRIBE</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-10">
              <ul className="ft-list">
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    TERMS & CONDITIONS
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    SUBSCRIPTION
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    ADVERTISING
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    PRIVACY NOTICE
                  </Link>
                </li>
                <li className="ft-item ">
                  <Link className="ft-link" href="">
                    COOKIES SETTINGS
                    <div className="ft-icon">
                      <Image src={Cookies} alt="Toggle sample" fill />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 desk-view">
              <div className="ft-list justify-content-end">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    variant="outline-ft"
                  >
                    <div className="ft-dropdown-icons">
                      <Image
                        fill
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2Yy08TURTGD5jgyvdCF/oPsDEQw0yca9y4UHcU/w010SiPSgpuRPEOND5mGhfGjQHaqnEPRgiakBgSpbAw0ErkoaILmSGBhZ85Q2NENLS9006J/ZKTTid3en7fveeeOylRRRVVpCwM0A7EqB4WXYRNcVg0DptmYZHrxfr1OCwaQIwu4D7V8TMUtHCXDsGmZtiUhk3IKyyag0VduEdHSg8epd2wqAcWreUNvtnIGmwy+TdLA2/ROVg0rwy+2cg87lNT8cBBVbCoAxb98B3e3mAkighV+wsfpZ2w6HlRwe0N8QwDVOMPfISqve5ROnhkV6LPl5WATb0lh7d/mZBq8BadDQzezkaMzhQGH6M93gEUtAGbPuIh7c3fAPfm4OGRLaXb+cE/oP2wabmMDDi4QwfyKZ/2wKHtTSbCucEDVY7jZFzXRTmF4zhpZtvSgOu6x4KGdf9ton5LA47jXFVN1N//Do2NCYRCCe+TIx6fUDawvLx8ORcDCZUkzc2DaG8fwvT0Z0xOLmBqagEzM18QDg+itXVIdQXiuZTQW5WZZ/hUagEjI2kkkxNIJlPeNZtpaxtEIpFSMTGei4FvhSbgUslkljA2Novu7lF0dr5EJDIM03zt3Uunl7wxCgaWcimhtUITcM1PTS16s97ZOYxQKImmpiSuXx/2VmNyctEbo1BCq0U3wJAMy9AMHwo98cywKTZXdAOu6371p4ReeeXT0TEMKddLKJP5UvwSchU2MbfKcPj3TZzyYnQ0421i7kL8vaib2HGcuEICD5K7ze9t9P37T2hpGUI4/EIFHo7jDORi4IpKEg5ulX8eZIozD46VlZVL2/1Vom5LA9lVmN62L3MsTRrXdFOgzKKNcpW4IfZppvheBtDgYBZmonykm4YsHwPGLcpXDdGG3bppzAYOL8WH4zeP78rbwPoqiFO6FD8CNSHFaVKRJg0zQPhuUhaoSjPFo9KXjvGY/PqTtzZSW6NJ42kJZz7JOclX8UpIo6P4e8KI+jbzf5MmTzRpppjzvWRMMaf1GCEqhbitZc+JVR/gV3mzFtwqVaT1agc1KZp105gpYMY/6qboaoiePEyBK0LVDdI4qpvivCZFvyaNN3wA6VK4HHzN93RT9PEYHlvUOq+oov9IPwEygLQ1QwqqZQAAAABJRU5ErkJggg=="
                      />
                    </div>
                    INDIA
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-10">
              <div className="ft-end-sec">
                <div className="sm-width-100 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link href="" className="ft-end-img">
                      <img
                        src={
                          "https://static.wikia.nocookie.net/logopedia/images/2/20/RP-Sanjiv_Goenka_Group_logo.png"
                        }
                        alt="RP-Sanjiv Goenka Group"
                        fill
                      />
                    </Link>
                    <div className="vr md-view"></div>
                    <div className="ft-end-logo md-view">
                      <img
                        src="https://dev.esquireindia.co.in/rpsg-media-logo.png"
                        alt="RPSG Media"
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className="vr nmd-view"></div>
                <div className="ft-end-content">
                  <p>
                    Esquire India is published by RP - Sanjiv Goenka Group under
                    license from Hearst Communications, Inc., New York, United
                    States of America
                  </p>
                </div>
                <div className="vr nmd-view"></div>
                <div className="ft-end-logo nmd-view">
                  <img src="https://dev.esquireindia.co.in/rpsg-media-logo.png" alt="RPSG Media" fill />
                </div>
              </div>
            </div>
            <div className="col-md-2 desk-view">
              <div className="ft-list justify-content-end">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    variant="outline-ft"
                  >
                    <div className="ft-dropdown-icons">
                      <Image
                        fill
                        alt=""
                        aria-hidden="true"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2Yy08TURTGD5jgyvdCF/oPsDEQw0yca9y4UHcU/w010SiPSgpuRPEOND5mGhfGjQHaqnEPRgiakBgSpbAw0ErkoaILmSGBhZ85Q2NENLS9006J/ZKTTid3en7fveeeOylRRRVVpCwM0A7EqB4WXYRNcVg0DptmYZHrxfr1OCwaQIwu4D7V8TMUtHCXDsGmZtiUhk3IKyyag0VduEdHSg8epd2wqAcWreUNvtnIGmwy+TdLA2/ROVg0rwy+2cg87lNT8cBBVbCoAxb98B3e3mAkighV+wsfpZ2w6HlRwe0N8QwDVOMPfISqve5ROnhkV6LPl5WATb0lh7d/mZBq8BadDQzezkaMzhQGH6M93gEUtAGbPuIh7c3fAPfm4OGRLaXb+cE/oP2wabmMDDi4QwfyKZ/2wKHtTSbCucEDVY7jZFzXRTmF4zhpZtvSgOu6x4KGdf9ton5LA47jXFVN1N//Do2NCYRCCe+TIx6fUDawvLx8ORcDCZUkzc2DaG8fwvT0Z0xOLmBqagEzM18QDg+itXVIdQXiuZTQW5WZZ/hUagEjI2kkkxNIJlPeNZtpaxtEIpFSMTGei4FvhSbgUslkljA2Novu7lF0dr5EJDIM03zt3Uunl7wxCgaWcimhtUITcM1PTS16s97ZOYxQKImmpiSuXx/2VmNyctEbo1BCq0U3wJAMy9AMHwo98cywKTZXdAOu6371p4ReeeXT0TEMKddLKJP5UvwSchU2MbfKcPj3TZzyYnQ0421i7kL8vaib2HGcuEICD5K7ze9t9P37T2hpGUI4/EIFHo7jDORi4IpKEg5ulX8eZIozD46VlZVL2/1Vom5LA9lVmN62L3MsTRrXdFOgzKKNcpW4IfZppvheBtDgYBZmonykm4YsHwPGLcpXDdGG3bppzAYOL8WH4zeP78rbwPoqiFO6FD8CNSHFaVKRJg0zQPhuUhaoSjPFo9KXjvGY/PqTtzZSW6NJ42kJZz7JOclX8UpIo6P4e8KI+jbzf5MmTzRpppjzvWRMMaf1GCEqhbitZc+JVR/gV3mzFtwqVaT1agc1KZp105gpYMY/6qboaoiePEyBK0LVDdI4qpvivCZFvyaNN3wA6VK4HHzN93RT9PEYHlvUOq+oov9IPwEygLQ1QwqqZQAAAABJRU5ErkJggg=="
                      />
                    </div>
                    INDIA
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="https://www.esquire.com"
                      target="_blank"
                    >
                      US
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.esquire.com/uk/"
                      target="_blank"
                    >
                      UK
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.esquire.com/es/"
                      target="_blank"
                    >
                      España
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.esquire.com/it/"
                      target="_blank"
                    >
                      Italia
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.esquire.com/jp/"
                      target="_blank"
                    >
                      Japan
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <ScrollToTop /> */}
    </>
  );
};

export default Footer;
