import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);
const projects = [
  {
    id: "pr0",
    name: "Yol Meoded",
    href: "",
    img: "/default/imagenes/2021/11/7222_en-yol-meoded-index-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr1",
    name: "Gal Josef",
    href: "",
    img: "/default/imagenes/2021/11/8066_en-gal-josef-home-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr2",
    name: "Ran Graber",
    href: "",
    img: "/default/imagenes/2021/11/8068_en-ran-graber-home-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr3",
    name: "Roi Bardas",
    href: "",
    img: "/default/imagenes/2021/11/7320_en-roi-bardas-index-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr4",
    name: "Yulie Toledano",
    href: "",
    img: "/default/imagenes/2021/11/7220_en-yulie-toledano-index-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr5",
    name: "Akiho Ka",
    href: "",
    img: "/default/imagenes/2022/02/8227_en-akiho-ka-index-Real.jpg",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
  {
    id: "pr6",
    name: "Yol Meoded",
    href: "",
    img: "/default/imagenes/2021/11/7222_en-yol-meoded-index-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr7",
    name: "Gal Josef",
    href: "",
    img: "/default/imagenes/2021/11/8066_en-gal-josef-home-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr8",
    name: "Ran Graber",
    href: "",
    img: "/default/imagenes/2021/11/8068_en-ran-graber-home-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr9",
    name: "Roi Bardas",
    href: "",
    img: "/default/imagenes/2021/11/7320_en-roi-bardas-index-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr10",
    name: "Yulie Toledano",
    href: "",
    img: "/default/imagenes/2021/11/7220_en-yulie-toledano-index-Real.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr11",
    name: "Akiho Ka",
    href: "",
    img: "/default/imagenes/2022/02/8227_en-akiho-ka-index-Real.jpg",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
];
const TransmissionSlider = () => {
 
  useEffect(() => {
    let iteration = 0;
    let trigger;
    let playhead = { offset: 0 }; // Actual target offset
    let lerpedOffset = { value: 0 };
    gsap.set(".cards li", {
      xPercent: 210,
      scale: 0.25,
    });

    const cards = gsap.utils.toArray(".cards li");
    const spacing = 0.105;
    const snapTime = gsap.utils.snap(spacing);
    const sp = window.innerWidth > 1024 ? 210 : 180;
    const dr = window.innerWidth > 1024 ? 0.85 : 0.5;

    const animateFunc = (element) => {
      return gsap
        .timeline()
        .fromTo(
          element,
          { scale: 0.25 },
          {
            scale: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.in",
            immediateRender: false,
          }
        )
        .fromTo(
          element,
          { xPercent: 210 },
          {
            xPercent: -210,
            duration: 1,
            ease: "none",
            immediateRender: true,
          },
          0
        );
    };

    const buildSeamlessLoop = (items, spacing, animateFunc) => {
      const rawSequence = gsap.timeline({ paused: true });
      const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 100);
        },
      });

      const cycleDuration = spacing * items.length;
      let dur;

      items.concat(items, items, items, items).forEach((item, i) => {
        const anim = animateFunc(items[i % items.length]);
        rawSequence.add(anim, i * spacing);
        if (!dur) dur = anim.duration();
      });

      seamlessLoop.fromTo(
        rawSequence,
        { time: cycleDuration + dur / 2 },
        {
          time: `+=${cycleDuration}`,
          duration: cycleDuration,
          ease: "none",
        }
      );

      return seamlessLoop;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate: () => {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: dr,
      ease: "power4.out",
      paused: true,
    });
    var math = {
      lerp: function lerp(a, b, n) {
        return (1 - n) * a + n * b;
      },
      norm: function norm(value, min, max) {
        return (value - min) / (max - min);
      },
    };

    // Define progressToScroll correctly
    const progressToScroll = (progress) => {
      // Example of how you might calculate scroll progress:
      return gsap.utils.clamp(
        1,
        seamlessLoop.duration() - 1,
        gsap.utils.wrap(0, seamlessLoop.duration(), progress) *
          seamlessLoop.duration()
      );
    };

    function smoothLerpRender() {
      lerpedOffset.value = math.lerp(lerpedOffset.value, playhead.offset, 0.05);
      seamlessLoop.time(wrapTime(lerpedOffset.value));
      // Determine which card is centered
      let centerIndex = Math.round(lerpedOffset.value / spacing) % cards.length;
      // Normalize negative index
      if (centerIndex < 0) centerIndex += cards.length;
      cards.forEach((card, index) => {
        if (index === centerIndex) {
          card.classList.add("in-center");
        } else {
          card.classList.remove("in-center");
        }
      });
      requestAnimationFrame(smoothLerpRender);
    }
    requestAnimationFrame(smoothLerpRender);

    // 👇 Fix: Better drag handling
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = playhead.offset;
        this.startX = this.x;
      },
      onDrag() {
        const sensitivity = window.innerWidth > 1024 ? 0.0015 : 0.003;
        const deltaX = this.x - this.startX;
        const offsetChange = -deltaX * sensitivity;

        playhead.offset = this.startOffset + offsetChange;
      },
      onRelease() {
        const finalOffset = playhead.offset;
        // Delay snap until after some time (e.g., 300ms)
        setTimeout(() => {
          playhead.offset = snapTime(finalOffset);
        }, 300);
      },
    });
  }, []);

  return (
    <>
      <div className="project__carousel">
        <input type="hidden" id="nTitle" />
        <section className="projects__gallery bw">
          <ul className="cards__container cards">
            {projects.map((project) => (
              <li key={project.id} className="element">
                <div className="thumbnail-scroll">
                  <a
                    className="ajax-link"
                    href={project.href}
                    data-href={project.href}
                    data-type="project__post"
                    data-from="projects"
                  >
                    <div className="inner__name">
                      <span className="pr-name">
                        <span className="pr-name-big">{project.name}</span>
                      </span>
                    </div>
                    <div className="card__img is-portrait">
                      <div className="overlayer tt-ab" />
                      <img src={project.img} alt={`${project.name}-Index`} />
                    </div>
                  </a>
                  <div className="outer__name">
                    <span className="pr-name cb">
                      <span className="pr-name-big">{project.name}</span>
                    </span>
                  </div>
                </div>
                <div className="props">
                  <input
                    type="hidden"
                    name="school"
                    defaultValue={project.school}
                    data-val={project.school}
                  />
                  {project.tags.map((tag, idx) => (
                    <input
                      key={idx}
                      type="hidden"
                      name="tag"
                      defaultValue={tag}
                      data-val={tag}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <div
          className="drag-proxy"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            cursor: "grab",
          }}
        />
      </div>
    </>
  );
};

export default TransmissionSlider;
