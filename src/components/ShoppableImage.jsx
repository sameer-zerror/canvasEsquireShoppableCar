import React, { useState } from "react";
import styles from "./ShoppableImage.module.css";
import { FaPlus } from "react-icons/fa6";
const ShoppableImage = ({ imageDesktop, imageMobile, products }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.shoppableSection}>
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(max-width: 768px)" srcSet={imageMobile} />
          <img src={imageDesktop} alt="" className={styles.heroImage} />
        </picture>

        {products.map((product, i) => (
          <div
            key={i}
            className={styles.dotWrapper}
            style={{ top: `${product.y}%`, left: `${product.x}%` }}
            // onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <div className={styles.dot}>
              <div className={styles.ring}></div>
              <div className={styles.ring}></div>
              <div className={styles.ring}></div>
              <div className={styles.ring}></div>
              <div className={styles.circle}>
                <FaPlus />
              </div>
            </div>

            {activeIndex === i && (
              <div className={styles.tooltip}>
                <div className={styles.tooltipLink}>
                  {/* <img
                    src={product.img}
                    alt={product.title}
                    className={styles.tooltipImage}
                  /> */}

                  <div className={styles.tooltipBody}>
                    <span className={styles.carDesc}>{product.desc}</span>
                    {/* <div className={styles.brand}>{product.brand}</div>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.price}>${product.price}</div> */}
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
