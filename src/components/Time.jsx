import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Time = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={2}>
              <div className="time_section_box pl_16 pr_16">
                <div className="p_section_small_box">
                  <p className="ff_inter fw_700 color_white fs_4xl m-0">
                    0.9 sec
                  </p>
                </div>
                <div className="bottom_line ms-auto me-auto"></div>
                <p className="pt_16 ff_karla fw_300 color_lightgray fs_lg m-0">
                  Time to finality
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="time_section_box">
                <div className="p_section_small_box">
                  <p className="ff_inter fw_700 color_white fs_4xl m-0">
                    0.0003 AZERO
                  </p>
                </div>
                <div className="bottom_line ms-auto me-auto "></div>
                <p className="pt_16 ff_karla fw_300 color_lightgray fs_lg m-0">
                  Avg cost per transaction
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="time_section_box pl_16 pr_16">
                <div className="p_section_small_box">
                  <p className="ff_inter fw_700 text-center color_white fs_4xl m-0">
                    57449
                  </p>
                </div>
                <div className="bottom_line ms-auto me-auto"></div>
                <p className="pt_16 ff_karla fw_300 color_lightgray fs_lg m-0">
                  Accounts
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="time_section_box pl_16 pr_16">
                <div className="p_section_small_box">
                  <p className="ff_inter fw_700 color_white fs_4xl ms-auto">123</p>
                </div>
                <div className="bottom_line ms-auto me-auto"></div>
                <p className="pt_16 ff_karla fw_300 color_lightgray fs_lg m-0">
                  Mainnet validators 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Time;
