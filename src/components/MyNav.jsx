import React from "react";
import nav_btn from "../assets/img/png/Logo.png";
import { ImCross } from "react-icons/im";
import { AiOutlineAlignRight } from "react-icons/ai";
const MyNav = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className=" bg_body">
        {/* btn */}
        <div className=" d-flex justify-content-between d-lg-none align-items-center px-4 py-3">
          <span>
            <img
              src={nav_btn}
              alt="nav_btn"
              className="w-100 position-relative z_10"
            />
          </span>
          <h2
            onClick={clickshow}
            className="pointer position-relative z_10 text-white ps-4"
          >
            {First ? <AiOutlineAlignRight /> : <ImCross />}
          </h2>
        </div>
        {/* nav */}
        <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
          <div className="bg_nav_black py-4 vh_100_1920 position-relative">
            <div className="mx-md-5 mx-sm-3 mx-1">
              <div className="nav_container">
                <div className=" d-flex align-items-center flex-lg-row flex-column justify-content-center justify-content-lg-between  vh_100_992">
                  <span className=" d-lg-block d-none">
                    <img src={nav_btn} alt="nav_logo" />
                  </span>

                  <ul className="d-flex align-items-center mb-lg-0 flex-lg-row flex-column ps-0 gap-lg-0 gap-2 mb-4">
                    <li>
                      <a
                        href="#"
                        className="color_white fs_lg fw_300 ff_karla me-lg-4"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="color_white fs_lg fw_300 ff_karla me-lg-4"
                      >
                        Build
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="color_white fs_lg fw_300 ff_karla me-lg-4"
                      >
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color_white fs_lg fw_300 ff_karla">
                        Content
                      </a>
                    </li>
                  </ul>
                  <button className="color_body fs_xsm ff_inter fw_500 rounded-pill bg_line border-0 nav_btn">
                    Explore the ecosystem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNav;
