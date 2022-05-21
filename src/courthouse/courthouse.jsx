import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "../images/Courthouse/logo2.png";
import logohy2a from "../images/Courthouse/logo-white.png";
import logoYello from "../images/Courthouse/Yello-logo-white.png";
import buttonClick from "../images/Courthouse/gold.jpg"
import vid from "../images/Courthouse/moj.mp4";

import Button from "@restart/ui/esm/Button";
import Issue from "../courthouse/Issue.jsx";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./courthouse.css";

const Courthouse = () => {
  const { t, i18n } = useTranslation();
  let history = useHistory();

  const [displayBtnLang, setDisplayBtnLang] = useState(true);
  const [langauage, setLangauage] = useState();
  const [displayControlPanel, setDisplayControlPanel] = useState(false);
  const [displayActivityLog, setDisplayActivityLog] = useState(false);

  const [displayIssuePage, setDisplayIssuePage] = useState(false);
  const [displayMainPage, setDisplayMainPage] = useState(true);
  const [displayTicket, setDisplayTicket] = useState(false);

  let [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("counterInfo", 0);
  }, []);

  const handleDisplayTicket = (status) => {
    setDisplayTicket(status);
  };
  const handleDisplayIssuePage = (status) => {
    setDisplayIssuePage(status);
  };
  const handleDisplayMainPage = (status) => {
    setDisplayMainPage(status);
  };

  const information = () => {
    setDisplayIssuePage(true);
    setDisplayMainPage(false);
    setDisplayTicket(false);
  };

  return (
    <>
      <div className="courthouse" id="courthouse" dir="rtl">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={logo}
                alt=""
                style={{ width: "25%" }}
                className="logoImg"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <h4 style={{ fontWeight: "800", fontSize: "25px" }}>
                منظومة فرض وإنفاذ القانون
              </h4>
            </div>
          </div>
        </div>
        <section
          className="mt-5"
          style={{
            display:
              displayMainPage && !displayIssuePage && !displayTicket
                ? "block"
                : "none",
          }}
        >
          <div className="d-flex justify-content-center align-items-center main-page">
            <div className="container border main-box p-5">
              <div className="row justify-content-center mt-2">
                <div className="text-center">
                  <div>
                    <h6 style={{ fontSize: "25px", fontWeight: "800" }}>
                      خدمة الاستعلام عن الأحكام و القرارات{" "}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-md-8 text-center">
                  <div>
                    {/* <button
                      className="info-button"
                      onClick={() => information()}
                    >
                      للاستعلام عن جلسة اليوم <br />
                      اضغط هنا
                    </button> */}
                    <h2>للاستعلام عن جلسة اليوم</h2>
                    <img src={buttonClick} alt="" onClick={() => information()} />
                  </div>
                  {/* <div
                    style={{ backgroundColor: "rgb(253, 250, 244)" }}
                    onClick={() => information()}
                  >
                    <div className="box-info py-4">
                      <div className="d-flex justify-content-center align-items-center">
                        <h6
                          style={{
                            fontSize: "25px",
                            color: "#5F7030",
                            marginTop: "15px",
                          }}
                        >
                          الاستعلام عن جلسة اليوم
                        </h6>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Issue
          displayIssuePage={displayIssuePage}
          displayMainPage={displayMainPage}
          displayTicket={displayTicket}
          handleDisplayIssuePage={handleDisplayIssuePage}
          handleDisplayMainPage={handleDisplayMainPage}
          handleDisplayTicket={handleDisplayTicket}
        />

        <footer className="bg-dark mt-5" style={{ padding: "3px" }}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-2">
                <div>
                  <img src={logohy2a} alt="" className="w-50" />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <h5 className="text-white">
                    {" "}
                    جميع الحقوق محفوظة , تم تطويره بواسطة Yello{" "}
                  </h5>
                </div>
              </div>

              <div className="col-md-2">
                <div>
                  <img src={logoYello} alt="" className="w-75" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Courthouse;
