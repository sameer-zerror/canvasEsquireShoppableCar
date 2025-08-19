import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./ShoppableImage.module.css";
import { FaPlus } from "react-icons/fa6";
import { gsap } from "gsap";
const ShoppableImage = ({ imageDesktop, imageMobile, products }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(null); // stays mounted for exit
  const tooltipRefs = useRef([]);

  // Handle switching logic (decides what should be mounted)
  useEffect(() => {
    // Set initial positions for all tooltips
    tooltipRefs.current.forEach((tooltipEl, index) => {
      if (!tooltipEl) return;

      // Example: change second index coordinates
      if (index === 0) {
        gsap.set(tooltipEl, {
          x: "-42%",
          y: "-20%",
          //   x: "-3%",
          //   y: "-20%",
          transform: "translate(-50%, 0%)",
        });
      }
      if (index === 1) {
        gsap.set(tooltipEl, {
          x: "48%",
          y: "-98%",
          transform: "translate(-50%, 0%)",
        });
      }
      if (index === 2) {
        gsap.set(tooltipEl, {
          x: "-92%",
          y: "-20%",
          //   transform: "translate(-50%, -50%)",
        });
      }
    });
    if (activeIndex === null && visibleIndex !== null) {
      // animate OUT current, then unmount
      const el = tooltipRefs.current[visibleIndex]?.querySelector(
        `.${styles.tooltipInner}`
      );
      if (el) {
        gsap.killTweensOf(el);
        gsap.to(el, {
          opacity: 0,
          y: 10,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => setVisibleIndex(null),
        });
      } else {
        setVisibleIndex(null);
      }
      return;
    }

    if (activeIndex !== null) {
      if (visibleIndex === null) {
        // nothing mounted → mount new, enter runs in useLayoutEffect
        setVisibleIndex(activeIndex);
      } else if (visibleIndex !== activeIndex) {
        // switch: exit old first, then mount new
        const old = visibleIndex;
        const oldEl = tooltipRefs.current[old]?.querySelector(
          `.${styles.tooltipInner}`
        );
        if (oldEl) {
          gsap.killTweensOf(oldEl);
          gsap.to(oldEl, {
            opacity: 0,
            y: 10,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setVisibleIndex(activeIndex),
          });
        } else {
          setVisibleIndex(activeIndex);
        }
      }
    }
    // second index position change
    // second index position change
  }, [activeIndex, visibleIndex]);

  // Run ENTER animation after the tooltip for visibleIndex is mounted
  useLayoutEffect(() => {
    if (visibleIndex === null) return;
    const el = tooltipRefs.current[visibleIndex]?.querySelector(
      `.${styles.tooltipInner}`
    );
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [visibleIndex]);
  return (
    <section className={styles.shoppableSection}>
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(max-width: 768px)" srcSet={imageMobile} />
          <img src={imageDesktop} alt="" className={styles.heroImage} />
        </picture>
        <div className={styles.ClickBtnIndicator}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            Click the{" "}
            <span className={styles.ClickBtn}>
              <FaPlus />
            </span>{" "}
            icon for more information
          </span>
        </div>
        {products.map((product, i) => (
          <div
            key={i}
            className={styles.dotWrapper}
            style={{
              top: `${product.y}%`,
              left: `${product.x}%`,
              zIndex: activeIndex === i ? "99" : "",
            }}
            // onMouseEnter={() => setActiveIndex(i)}
            // onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <div className={styles.dot}>
              <div className={styles.ring}></div>
              <div
                className={styles.circle}
                style={{
                  backgroundColor: activeIndex === i ? "#000" : "#fff",
                  color: activeIndex === i ? "#fff" : "#000",
                }}
              >
                <FaPlus
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      activeIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>

            {visibleIndex === i && (
              <div
                className={styles.tooltip}
                ref={(el) => (tooltipRefs.current[i] = el)}
              >
                <div className={styles.tooltipInner}>
                  <div className={styles.tooltipLink}>
                    {/* If product has an image, show image block */}
                    {product.img ? (
                      <img
                        src={product.img}
                        alt={product.title}
                        className={`${styles.tooltipImage} ${
                          activeIndex === i ? styles.tooltipContentActive : ""
                        }`}
                      />
                    ) : null}

                    {/* If product has text/desc, show text block */}
                    {product.desc ? (
                      <div
                        className={`${styles.tooltipBody} ${
                          activeIndex === i ? styles.tooltipContentActive : ""
                        }`}
                      >
                        <span className={styles.carDesc}>{product.desc}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShoppableImage;
