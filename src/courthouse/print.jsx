import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import QRCode from "react-qr-code";
import moment from "moment";
import logo from "../images/Courthouse/logo-modified.png";
import logohy2a from "../images/Courthouse/logo_ar.png";
import logoYello from "../images/Courthouse/logoy.png";

import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import detectBrowserLanguage from "detect-browser-language";
import axios from "axios";

var Barcode = require("react-barcode");

const TicketPrint = (props) => {
  console.log("propsPrint", typeof(props.phone));

  let [widthProgress , setWidthProgress] = useState(100);
  let [valueProgress , setValueProgress] = useState (100);
  let [percentageProgress , setPercentageProgress] = useState(100);
  const [displayDialog, setDisplayDialog] = useState(false);

  let componentRef = useRef();
  const timeRef = useRef(null);
  const timeRef2 = useRef(null);
  let history = useHistory();

  const startTimer = () => {
    if (
      !props.displayIssuePage &&
      props.displayTicket &&
      !props.displayMainPage
    ) {
      var timesRun = 0;
        timeRef2.current = setInterval(function () {
          timesRun++;
          if(timesRun < 4){
            setWidthProgress(widthProgress => widthProgress - 25);
          setValueProgress(valueProgress => valueProgress - 25);
          setPercentageProgress(percentageProgress => percentageProgress - 25);
          }
          else {
           //clearInterval(timeRef2.current);
               yes();

          }
     
          
        } , 4000);

      // timeRef2.current = setTimeout(function () {
      //   setDisplayDialog(true);
      //   timeRef.current = setTimeout(function () {
      //     exit();
      //   }, 15000);
      // }, 30000);
    }
  };

  const no = () => {
    clearTimeout(timeRef.current);
    clearTimeout(timeRef2.current);

    setDisplayDialog(false);
    props.handleTableOfCrim();
    props.handleDisplayIssuePage(false);
    props.handleDisplayTicket(false);
    props.handleDisplayMainPage(true);
  };

  const yes = () => {
    //clearTimeout(timeRef.current);
    clearTimeout(timeRef2.current);
    setPercentageProgress(100)
    setValueProgress(100)
    setWidthProgress(100)
    //setDisplayDialog(false);
    props.handleTableOfCrim();
    props.handleDisplayContinue();
    props.handleDisplayIssuePage(true);
    props.handleDisplayTicket(false);
    props.handleDisplayMainPage(false);
  };

  useEffect(() => {
    if (
      !props.displayIssuePage &&
      props.displayTicket &&
      !props.displayMainPage
    ) {
      console.log("here props lala");
      console.log(props.tableOfCrim.length);
      startTimer();
           axios
            .post("http://41.33.50.5:6654/api/Terminal/registerRequest", {

              deviceToken: "Court-6",
              requests: [
                {
                  caseSessionId : props.caseSessionId,
                  mobileNumber : props.phone
                }
              ]
            })
            .then(function (res) {
              console.log(res);
            })
            .catch(function (err) {
              console.log(err);
            });
        
     
      // if (props.tableOfCrim.length >= 1) {
      //   console.log("here yaaa dg333");
      //   for (let i = 0; i < props.tableOfCrim.length; i++) {
      //     axios
      //       .post("http://localhost:4001/sendSms", {
      //         phone: props.tableOfCrim[i].phoneNum,
      //         year: props.tableOfCrim[i].year,
      //         numOfCrim: props.tableOfCrim[i].numOfCrim,
      //       })
      //       .then(function (res) {
      //         console.log(res);
      //       })
      //       .catch(function (err) {
      //         console.log(err);
      //       });
      //   }
      // }
    }
  }, [props.displayTicket]);

  const exit = () => {
    history.push("/");
  };

  return (
    <>
      <section
        className="print-page"
        style={{
          display:
            !props.displayIssuePage &&
              props.displayTicket &&
              !props.displayMainPage
              ? "block"
              : "none",
        }}
      >
        <div className="text-success text-center mt-3">
          <i style={{ fontSize: "100px" }} className="fas fa-check-circle"></i>
          <h3 style={{ fontSize: "64px" }} className="mt-4">
            تمت عملية الدفع بنجاح
          </h3>
        </div>

        <div className="mt-4 text-center w-50 m-auto">
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginRight: "15px",
              border: "3px solid black",
              padding: "15px",
            }}
          >
            الرقم المرجعي : {props.caseSessionId}
          </h3>
          <h4
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginRight: "15px",
              marginTop: "30px",
            }}
          >
            برجاء الاحتفاظ بالرقم المرجعي
            <br />
            سيصلك رسالة على هاتفك المحمول بنتيجة استعلامك
          </h4>
          <div className="mt-3">
            <button
              className="btn btn-primary"
              style={{ paddingLeft: "30px", paddingRight: "30px" }}
              onClick={() => yes()}
            >
              استعلام جديد
            </button>
            <button
              onClick={() => no()}
              className="btn btn-danger"
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                marginRight: "5px",
              }}
            >
              خروج
            </button>
          </div>

          <div className="progress mt-5" style={{height: "30px"}} dir="ltr">
            <div className="progress-bar" 
            role="progressbar" 
            style={{width: `${widthProgress}%`}}
            aria-valuenow= {valueProgress} 
            aria-valuemin="0" 
            aria-valuemax="100">
              {percentageProgress}%
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: displayDialog ? "block" : "none" }}>
        <div className=" train-booking-layer1 d-flex justify-content-center position-absolute align-items-center ">
          <div
            className=" p-5"
            style={{
              border: "2px solid black",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            <h3 className="text-white"> هل تريد خدمة اخرى؟</h3>

            <div className="d-flex justify-content-center">
              <div>
                <Button
                  className="btn btn-primary"
                  onClick={() => no()}
                  style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                  لا
                </Button>
                <Button
                  className="btn btn-primary"
                  onClick={() => yes()}
                  style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  نعم
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TicketPrint;
