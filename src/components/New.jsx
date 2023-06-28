import React from "react";
import nav_logo from "../assets/img/png/Logo.png";
export const New = () => {
  return (
    <div className="bg_body py-5">
      <div className="nav_container">
        <div className=" d-flex align-items-center justify-content-between">
          <span>
            <img src={nav_logo} alt="nav_logo" />
          </span>

          <ul className="d-flex align-items-center mb-0">
            <li>
              <a href="#" className="color_white fs_lg fw_300 ff_karla me-4">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="color_white fs_lg fw_300 ff_karla me-4">
                Build
              </a>
            </li>
            <li>
              <a href="#" className="color_white fs_lg fw_300 ff_karla me-4">
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
  );
};
