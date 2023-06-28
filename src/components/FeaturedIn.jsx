import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import slide1 from "../assets/img/png/coin_desk.png"
import slide2 from "../assets/img/png/point.png"
import slide3 from "../assets/img/png/mas.png"
import slide4 from "../assets/img/png/blockworks.png"
import slide5 from "../assets/img/png/sifted.png"
import slide6 from "../assets/img/png/mycompany.png"
import slide7 from "../assets/img/png/nasdaq.png"
import { Container } from 'react-bootstrap';
const FeaturedIn = () => {
  return (
    <>
      <section className="bg_featured">
        <div className="h_212">
          <Container>
            <div className="d-flex justify-content-center">
              <p className="pt_32 m-0 ff_inter fw_300 fs_xsm color_white lp_3">
                FEATURED IN
              </p>
            </div>
            <Splide
              options={{
                type: "loop",
                drag: "free",
                perPage: 7,
                arrows: false,
                autoScroll: {
                  speed: 1,
                },
                breakpoints: {
                  1200: {
                    perPage: 5,
                  },
                  992: {
                    perPage: 4,
                  },
                  768: {
                    perPage: 3,
                  },
                  576: {
                    perPage: 2,
                  },
                  380: {
                    perPage: 1,
                  },
                },
              }}
              extensions={{ AutoScroll }}
            >
              <SplideSlide>
                <img
                  src={slide1}
                  alt="slider image 1"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide2}
                  alt="slider image 2"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide3}
                  alt="slider image 3"
                  className="mw_112 h_48 object-fit-contain"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide4}
                  alt="slider image 4"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide5}
                  alt="slider image 5"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide6}
                  alt="slider image 6"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide7}
                  alt="slider image 7"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide1}
                  alt="slider image 1"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide2}
                  alt="slider image 2"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide3}
                  alt="slider image 3"
                  className="mw_112 h_48 object-fit-contain"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide4}
                  alt="slider image 4"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide5}
                  alt="slider image 5"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide6}
                  alt="slider image 6"
                  className="mw_160 h_48"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={slide7}
                  alt="slider image 7"
                  className="mw_160 h_48"
                />
              </SplideSlide>
            </Splide>
            <div className="slider_bottom_line"></div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default FeaturedIn;