import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import box_img_2 from "../assets/img/svg/CardinalsLogo.svg";
import box_img_1 from "../assets/img/svg/Alephbottom1.svg";
import location from "../assets/img/svg/location.svg";
import email from "../assets/img/svg/email.svg";
import world from "../assets/img/svg/world.svg";
export const AlphaBottom = () => {
  return (
    <div className=" bg_body pt-5 pb-4">
      <Container>
        <Row>
          {/* box 1 */}
          <Col lg={6} xs={12}>
            <div className="bottom_box_footer hover_box_shadow px-lg-4 px-2 w-100 pt-3 pb-lg-5 pb-3 pe-xxl-5 pe-2 h-100 d-flex flex-column justify-content-start">
              <div className=" d-flex align-items-sm-center flex-column flex-sm-row">
                <span>
                  <img
                    src={box_img_1}
                    alt="box_img_1"
                    className="w_bottom_custom"
                  />
                </span>
                <div className="ps-sm-4 pt-sm-0 pt-3">
                  <p className="mb-0 ff_inter fs_xsm color_white fw_300">
                    Aleph Zero Foundation
                  </p>
                  <p className="mb-0 color_lightgray ff_karla fw_300 fs_sm pb-xxl-4 ">
                    The Aleph Zero Foundation is responsible for overseeing the
                    development of Aleph Zero protocol. The Foundation is also
                    the issuer of the AZERO coin.
                  </p>
                </div>
              </div>
              <hr className="bottom_line" />
              <div className=" d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                <div className=" d-flex align-items-center">
                  <span>
                    <img src={location} alt="location" className="w-100" />
                  </span>
                  <p className=" ff_karla fw_300 fs_sm color_lightgray mb-0 ps-2">
                    Bergliweg 15, 6300 Zug, Switzerland
                  </p>
                </div>
                {/* email */}
                <div className=" d-flex align-items-center">
                  <span>
                    <img src={email} alt="email" className="w-100" />
                  </span>
                  <p className=" ff_karla fw_300 fs_sm color_lightgray mb-0 ps-2">
                    hello@alephzero.org
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* box 2 */}
          <Col lg={6} xs={12} className="pt-lg-0 pt-4">
            <div className="bottom_box_footer px-lg-4 px-2 hover_box_shadow w-100 pt-3 pb-lg-5 pb-3 pe-xxl-5 pe-2 h-100 d-flex flex-column justify-content-start">
              <div className=" d-flex align-items-sm-center flex-column flex-sm-row">
                <span>
                  <img
                    src={box_img_2}
                    alt="box_img_1"
                    className="w_bottom_custom"
                  />
                </span>
                <div className="ps-sm-4 pt-sm-0 pt-3">
                  <p className="mb-0 ff_inter fs_xsm color_white fw_300">
                    Cardinal Cryptography sp. z o.o.
                  </p>
                  <p className="mb-0 color_lightgray ff_karla fw_300 fs_sm">
                    Aleph Zero core developer responsible for research,
                    development, cryptography, native tooling, and incubating
                    use cases deploying on top of the network.
                  </p>
                </div>
              </div>
              <hr className="bottom_line" />
              <div className=" d-flex flex-column flex-sm-row justify-content-between align-items-sm-start">
                <div className=" d-flex align-items-center ">
                  <span className="pointer">
                    <img src={location} alt="location" className="w-100" />
                  </span>
                  <p className=" ff_karla pointer fw_300 fs_sm color_lightgray mb-0 ps-2">
                    Zamoyskiego 79A, 30-519 Krakow, Poland
                  </p>
                </div>
                {/* email */}
                <div>
                  <div className=" d-flex align-items-center">
                    <span className="pointer">
                      <img src={world} alt="email" className="w-100" />
                    </span>
                    <p className="pointer ff_karla fw_300 fs_sm color_lightgray mb-0 ps-2">
                      www.cardinal.co
                    </p>
                  </div>
                  <div className=" d-flex align-items-center mt-1">
                    <span className="pointer">
                      <img src={email} alt="email" className="w-100" />
                    </span>
                    <p className=" ff_karla pointer fw_300 fs_sm color_lightgray mb-0 ps-2">
                      hello@cardinals.cc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* most last */}
        <div className=" d-flex align-items-lg-center justify-content-between flex-column flex-lg-row pt-5">
          <p className=" ff_inter fw_500 fs_xsm color_lightgray mb-0">
            Aleph Zero Foundation © 2018-2023, design and development by
            Cardinal
          </p>
          <div className=" d-flex align-items-center pt-lg-0 pt-4">
            <p className=" ff_inter fw_500 fs_xsm color_lightgray mb-0 ps-lg-5">
              Privacy Policy
            </p>
            <p className=" ff_inter fw_500 fs_xsm color_lightgray mb-0 ps-5">
              Cookies Policy
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
