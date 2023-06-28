import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Col, Container, Row } from "react-bootstrap";
import buildimg from "../assets/img/png/build_fast.png";
import scaleimg from "../assets/img/png/scale_easy.png";

const Build = () => {
  return (
    <>
      <section className="py-5">
        <Container className="pt_29 pb_29">
          <Row>
            <Col lg={6}>
              <div className="build_section_box h-100">
                <Splide
                  className="p_0"
                  options={{
                    type: "loop",
                    drag: "free",
                    perPage: 1,
                    arrows: false,
                    autoScroll: {
                      speed: -1,
                    },
                    
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <img
                      src={buildimg}
                      alt="slider image 1"
                      className="w-100 h_147"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src={buildimg}
                      alt="slider image 2"
                      className="w-100 h_147"
                    />
                  </SplideSlide>
                </Splide>
                <div className="pt-4 ps-5 pb_41 pr_33">
                  <div className="d-flex align-items-center">
                    <span className="build_line"></span>
                    <p className="pl_16 ff_inter fw_700 color_white m-0 fs_5xl">
                      Build <span className="fw_300 fs_7xl">fast</span>
                    </p>
                  </div>
                  <p className="pt_18 ff_karla fw_300 fs_lg color_lightgray mw_410">
                    Benefit from a unique combination of our consensus protocol,
                    AlephBFT, and ink!, the Rust-based WASM programming
                    environment.
                  </p>
                </div>
                <div className="d-flex justify-content-end pr_33">
                  <p className=" pe-2 ff_inter fw_500 fs_md">
                    <a href="#" className="color_lightgreen">
                      {" "}
                      Deploy apps
                    </a>
                  </p>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_569)">
                      <path
                        d="M14.6483 7.24306L14.1321 6.70344L13.0529 7.78268L17.3229 12.0293H0.359985V13.5308H17.3229L13.0529 17.7774L14.1321 18.8567L19.6691 13.3197C19.8099 13.1633 19.8803 12.9834 19.8803 12.7801C19.8803 12.5767 19.8099 12.3969 19.6691 12.2404L14.6483 7.24306Z"
                        fill="#00CCAB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_569">
                        <rect
                          width="24.64"
                          height="25"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.359985 25.28)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="build_section_box h-100 mt-lg-0 mt-md-5 mt-4">
                <Splide
                  className="p_0"
                  options={{
                    type: "loop",
                    drag: "free",
                    perPage: 1,
                    arrows: false,
                    autoScroll: {
                      speed: -1,
                    },
                 
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <img
                      src={scaleimg}
                      alt="slider image 1"
                      className="w-100 h_147"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src={scaleimg}
                      alt="slider image 2"
                      className="w-100 h_147"
                    />
                  </SplideSlide>
                </Splide>
                <div className="pt-4 ps-5 pb_41 pr_33">
                  <div className="d-flex align-items-center">
                    <span className="build_line"></span>
                    <p className="pl_16 ff_inter fw_700 color_white m-0 fs_5xl">
                      Scale <span className="fw_300 fs_7xl"> easy</span>
                    </p>
                  </div>
                  <p className="pt_18 ff_karla fw_300 fs_lg color_lightgray mw_410">
                    Stake your AZERO with a trusted network of validators—or
                    help scale Aleph Zero and make it more secure for everyone
                    involved by becoming one yourself.
                  </p>
                </div>
                <div className="d-flex justify-content-end pr_33">
                  <p className=" pe-2 ff_inter fw_500 fs_md">
                    <a href="#" className="color_lightgreen">
                      {" "}
                      Validate and nominate
                    </a>
                  </p>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_569)">
                      <path
                        d="M14.6483 7.24306L14.1321 6.70344L13.0529 7.78268L17.3229 12.0293H0.359985V13.5308H17.3229L13.0529 17.7774L14.1321 18.8567L19.6691 13.3197C19.8099 13.1633 19.8803 12.9834 19.8803 12.7801C19.8803 12.5767 19.8099 12.3969 19.6691 12.2404L14.6483 7.24306Z"
                        fill="#00CCAB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_569">
                        <rect
                          width="24.64"
                          height="25"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.359985 25.28)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Build;
