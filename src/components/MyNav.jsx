import React from "react";

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
      <div className="flex-grow- ">
        <div className="d-flex align-items-center justify-content-between">
          <span>
           <p>page logo</p>
          </span>
          <h2 onClick={clickshow} className="pointer position-relative Z-3">
            {First ? (
              <img src={nav_btn} alt="nav_btn" />
            ) : (
              <img src={nav_btn} alt="nav_btn" />
            )}
          </h2>
        </div>
        <div className="d-flex justify-content-between">
          <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
            <div className="bg_nav_black py-4 vh_100_1920 position-relative">
              
              <div className="mx-md-5 mx-sm-3 mx-1">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                   
                  </span>
                  <span className="pointer">
                    <h2
                      onClick={clickshow}
                      className="pointer position-relative z-3"
                    >
                      {First ? (
                        <img src={cross} alt="cross" className="w-100" />
                      ) : (
                        <img src={cross} alt="cross" className="w-100" />
                      )}
                    </h2>
                  </span>
                </div>
              </div>
              <div className="">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNav;
