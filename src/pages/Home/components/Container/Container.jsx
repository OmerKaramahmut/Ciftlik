import React from "react";
import "./Container.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import patato from "../image/patato.jpg";
import corn from "../image/corn.jpg";
import grass from "../image/grass.jpg";
import watermelon from "../image/watermelon.jpg";
const Container = () => {
  const comp = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

      gsap.set(photos, { yPercent: 101 });

      const allPhotos = gsap.utils.toArray(".desktopPhoto");

      let mm = gsap.matchMedia();
      mm.add("(min-width: 600px)", () => {
        console.log("desktop");

        ScrollTrigger.create({
          trigger: galleryRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
        });
        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");

          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0 })
            .set(allPhotos[index], { autoAlpha: 0 });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: false,
          });
        });

        return () => {};
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={comp}>
      <div ref={galleryRef} className="gallery">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection one">
              <h1>Patates</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, necessitatibus. Nulla vel voluptatum temporibus,
                incidunt voluptate veniam autem vitae quidem consectetur, ad id
                rerum asperiores ipsam in reiciendis. Harum, illo!
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Mısır</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                hic veritatis quaerat, eos laudantium odit quia laboriosam
                reiciendis quos consequatur numquam, nihil, fugit odio. Unde
                consectetur facilis quos necessitatibus nesciunt.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Yonca</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                asperiores omnis quasi optio labore iusto saepe iste? Illum
                quisquam praesentium pariatur sit id aut maiores voluptatum
                labore doloribus, reiciendis laboriosam!
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Karpuz</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                minima eos recusandae laudantium cupiditate. Laboriosam quis
                fuga itaque ipsa nam sapiente vel molestiae ab, tenetur eos
                recusandae aliquid, cupiditate voluptatibus.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red">
              <img src={patato} alt="" />
            </div>
            <h1>Patates</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              odio dicta perspiciatis enim vel culpa beatae laborum laboriosam,
              facere, corporis aliquid quis? Placeat vel eveniet consectetur
              dolorem id nulla consequuntur.
            </p>

            <div className="mobilePhoto green">
              <img src={corn} alt="" />
            </div>
            <h1>Mısır</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              sapiente, suscipit ex sint accusantium consequuntur, molestias
              voluptates doloremque fuga amet error quos ipsa, optio tempora.
              Ullam quidem sed odit dignissimos.
            </p>

            <div className="mobilePhoto pink">
              {" "}
              <img src={grass} alt="" />
            </div>
            <h1>Yonca</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              itaque. Cupiditate odit, sunt dolores explicabo ipsa perferendis
              minima placeat qui fugiat est distinctio illo provident non quod
              quisquam iusto quaerat?
            </p>

            <div className="mobilePhoto blue">
              {" "}
              <img src={watermelon} alt="" />
            </div>
<h1>Karpuz</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              dolor, voluptas praesentium possimus eum voluptate. Animi
              consequatur veniam illum provident corporis repellendus debitis
              quas earum dolores, fuga beatae tempore voluptate!
            </p>
          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red">
              <img src={patato} alt="" />
            </div>
            <div className="desktopPhoto green">
              <img src={corn} alt="" />
            </div>
            <div className="desktopPhoto pink">
              <img src={grass} alt="" />
            </div>
            <div className="desktopPhoto blue">
              <img src={watermelon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
