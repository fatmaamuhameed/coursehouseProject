import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import "./courthouse.css";
import axios from "axios";
import TicketPrint from "./print";
import moment from "moment";
const Issue = (props) => {

  const [Criminal, setCriminal] = useState(1);
  const [phone , setPhone] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [policeStationName, setPoliceStationName] = useState("");
  const [CircleName, setCircleName] = useState("جنح عادية");

  const [year, setYear] = useState("2021");
  const [yearGenerate, setYearGenerate] = useState(moment().year());

  const [yearGenerate10, setYearGenerate10] = useState([]);

  const [element, setElement] = useState("");
  const [terminalId, setTerminalId] = useState("ea9b8e5b0910a1d4");

  let [counterInfo, setCounterInfo] = useState(0);
  const [circleCrim, setCircleCrim] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [tableOfCrim, setTableOfCrim] = useState([]);
  const [displayChooseCircle, setDisplayChooseCircle] = useState(true);
  const [displayYear, setDisplayYear] = useState(true);
  const [displayNumCrim, setDisplayNumCrim] = useState(true);
  const [displayStation, setDisplayStation] = useState(true);
  const [displayPhoneError, setDisplayPhoneError] = useState(true);
  const [displayPhoneError2, setDisplayPhoneError2] = useState(true);

  const [responeAndriod, setResponeAndriod] = useState([]);
  const [displayPayment, setDisplayPayment] = useState(false);
  const [displayFailed, setDisplayFailed] = useState(false);
  const [displayPhoneInput, setDisplayPhoneInput] = useState(false);

  const [displayResultNo, setDisplayResultNo] = useState(true);
  const [displayResultYes, setDisplayResultYes] = useState(true);
  const [displayDetails, setDisplayDetails] = useState(true);
  const [caseSessionId , setCaseSessionId] = useState();
  const [displayDialog, setDisplayDialog] = useState(false);
  const [displayAgain, setDisplayAgain] = useState(true);

  const [displayDialogPhone, setDisplayDialogPhone] = useState(false);

  const [displayPoliceInput, setDisplayPoliceInput] = useState(true);
  const [displayCaseDate, setDisplayCaseDate] = useState(true);

  const [displayInputs, setDisplayInputs] = useState(false);
  const [displaySearchbtn, setDisplaySearchbtn] = useState(false);

  const [allPoliceStations, setAllPoliceStations] = useState([]);
  const [allCircles, setAllCircles] = useState([]);

  const [displayContinue, setDisplayContinue] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      yearGenerate10.push(yearGenerate - i);
    }
    console.log(yearGenerate10);
    axios
      .get("http://41.33.50.5:6654/api/Terminal/getScheduleTypes", {
        params: { DeviceToken: "Court-6" },
      })
      .then(function (res) {
        console.log("circels", res.data.content.result);
        setAllCircles(res.data.content.result);
      })
      .catch(function (err) {
        console.log(err);
      });

    axios
      .get("http://41.33.50.5:6654/api/Terminal/getPoliceStations", {
        params: { DeviceToken: "Court-6" },
      })
      .then(function (res) {
        console.log("policeStationsRes", res.data.content.result);
        setAllPoliceStations(res.data.content.result);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (document.getElementById("tableInfo") != null) {
      var table = document.getElementById("tableInfo");
      var totalRowCount = table.rows.length; // 5
      setTotalRows(totalRowCount);
      //console.log("totalRowCount" , totalRowCount);
    } else {
      setTotalRows(0);
    }
  });

  const no = () => {
    document.getElementById("criNum").value = "";
    document.getElementById("year").value = "";
    document.getElementById("circle").selectedIndex = 0;
    setDisplayDialog(false);
    props.handleDisplayIssuePage(false);
  };

  const yes = () => {
    setDisplayDialog(false);
    setDisplayPoliceInput(false);
    document.getElementById("criNum").value = "";
    document.getElementById("year").value = "";
    document.getElementById("circle").selectedIndex = 0;
    document.getElementById("police").selectedIndex = 0;
  };

  const deleteItem = (index) => {
    setTableOfCrim((prev) => prev.filter((item, i) => i != index));
    setCounterInfo(counterInfo - 20);
  };

  const tryAgain = () => {
    setDisplayFailed(false);
    payConfirm();
  };

  const exitPayment = () => {
    setDisplayFailed(false);
    document.getElementById("phone").value = "";
    axios
      .post("http://localhost:5000/cancel", {
        message: "payment timeout",
        terminal_id: terminalId,
      })
      .then(function (res) {
        console.log("resssssss", res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    props.handleDisplayIssuePage(false);
    props.handleDisplayTicket(false);
    props.handleDisplayMainPage(true);
    setTableOfCrim([]);
    setCounterInfo(0);
    setTotalRows(0);
  };

  const handleTableOfCrim = () => {
    setTableOfCrim([]);
    setCounterInfo(0);
    document.getElementById("phone").value = "";
    setTotalRows(0);
  };

  const handleDisplayContinue = () => {
    setDisplayContinue(false);
  }

  const search = () => {
    console.log(Criminal);
    console.log(document.getElementById("caseDate").value);
    console.log(document.getElementById("criNum").value);
    console.log(policeStation)
    console.log(year);
    if (Criminal == "") {
      setDisplayChooseCircle(false);
      setDisplayYear(true);
      setDisplayNumCrim(true);
      setDisplayStation(true);
      setDisplayCaseDate(true);

    } else if (document.getElementById("criNum").value == "") {
      setDisplayChooseCircle(true);
      setDisplayYear(true);
      setDisplayNumCrim(false);
      setDisplayStation(true);
      setDisplayCaseDate(true);

    } else if (policeStation == "") {
      setDisplayChooseCircle(true);
      setDisplayYear(true);
      setDisplayNumCrim(true);
      setDisplayCaseDate(true);
      setDisplayStation(false);
      //enter station
      console.log("here2");
    } 
    else if (document.getElementById("caseDate").value == "") {
      setDisplayChooseCircle(true);
      setDisplayYear(true);
      setDisplayNumCrim(true);
      setDisplayStation(true);
      setDisplayCaseDate(false);
      //enter station
      console.log("here2");
    }
    else {
      setDisplayPhoneError(true);
      setDisplayChooseCircle(true);
      setDisplayYear(true);
      setDisplayNumCrim(true);
      setDisplayStation(true);
      setDisplayCaseDate(true);

      if (
        tableOfCrim.some(
          (num) => num.numOfCrim === document.getElementById("criNum").value
        ) &&
        tableOfCrim.some((type) => type.typeOfCrim === Criminal)
      ) {
        console.log("yesss");
        setDisplayAgain(false);
        setTimeout(function () {
          resetAllData();
          document.getElementById("circle").selectedIndex = 0;
          setDisplayAgain(true);
        }, 7000);
      } else {
        console.log("noo");
        setDisplayAgain(true);

        axios
          .get("http://41.33.50.5:6654/api/Terminal/viewCaseData", {
            params: {
              DeviceToken: "Court-6",
              CaseNumber: document.getElementById("criNum").value,
              CaseYear: year,
              PoliceStationId: policeStation,
              ScheduleTypeId: Criminal,
              SessionDate: document.getElementById("caseDate").value
            }
          })
          .then(function (res) {
            console.log("resulttt", res.data.content.result);
            if (res.data.content.result != null) {
              console.log(res.data.content.result.caseSessionId)
              setCaseSessionId(res.data.content.result.caseSessionId);
              setDisplayResultYes(false);
              setDisplayResultNo(true);
              console.log(document.getElementById("criNum").value);
              setCounterInfo(counterInfo + 20);
              setDisplayContinue(true);
              setTableOfCrim((prevItems) => [
                ...prevItems,
                {
                  year: year,
                  numOfCrim: document.getElementById("criNum").value,
                  cost: 20,
                  typeOfCrim: Criminal,
                  policeStation: policeStation,
                },
              ]);

              setTimeout(function () {
                resetAllData();
                document.getElementById("circle").selectedIndex = 0;
              }, 7000);
            }
            else {
              setDisplayResultNo(false);
              setDisplayResultYes(true);
              setTimeout(function () {
                resetAllData();
                document.getElementById("circle").selectedIndex = 0;
              }, 5000);
            }

          })
          .catch(function (err) {
            console.log(err);
            setDisplayResultNo(false);
            setDisplayResultYes(true);
            setTimeout(function () {
              resetAllData();
              document.getElementById("circle").selectedIndex = 0;
            }, 5000);
          });
      }
    }
  };

  const selectPoliceStation = (e) => {
    //console.log(e.target);
    const index = e.target.selectedIndex;
    console.log(index);
    const el = e.target.childNodes[index];
    console.log(el.text);
    setPoliceStationName(el.text);
    setPoliceStation(e.target.value);
  };

  const resetAllData = () => {
    // document.getElementById("phone").value = "";
    document.getElementById("criNum").value = "";
    // document.getElementById("year").value = "2021";

    setDisplayResultNo(true);
    setDisplayChooseCircle(true);
    setDisplayYear(true);
    setDisplayCaseDate(true);

    setDisplayNumCrim(true);
    setDisplayStation(true);
    setDisplayResultYes(true);
    setDisplayPoliceInput(true);
    setCriminal(1)
    setCircleCrim(1)
    setPoliceStation("");
    setCounter(0);
    document.getElementById("police").selectedIndex = 0;
    setDisplayInputs(false);
    setDisplaySearchbtn(false);
  };

  const selectCircle = (e) => {
    setCircleCrim(e.target.value);
    //resetAllData();
    setCriminal(e.target.value);
    const index = e.target.selectedIndex;
    console.log(index);
    const el = e.target.childNodes[index];
    console.log(el.text);
    setCircleName(el.text);
    document.getElementById("police").selectedIndex = 0;
  };

  const selectYear = (e) => {
    setYear(e.target.value);
  };

  const checkGet = () => {
    let counter = 1;
    setDisplayPayment(true);

    var interval = setInterval(() => {
      if (counter <= 180) {
        axios
          .get("http://localhost:5000/payment_result", {
            params: { terminal_id: terminalId },
          })
          .then(function (res) {
            setDisplayPayment(false);
            setPhone(document.getElementById("phone").value);

            clearInterval(interval);
            if (res.data == "") {
              setDisplayFailed(true);
            } else {
              console.log(props);
              setResponeAndriod(res.data);
              setDisplayPayment(false);
              props.handleDisplayIssuePage(false);
              props.handleDisplayTicket(true);
              props.handleDisplayMainPage(false);
              //setDisplayTicket(true);
            }
          })
          .catch(function (err) {
            counter++;
            console.log(err);
            setDisplayPayment(true);
          });
      } else {
        console.log("time outttt");
        setDisplayPayment(false);
        setDisplayFailed(true);
        axios
          .post("http://localhost:5000/cancel", {
            message: "payment timeout",
            terminal_id: terminalId,
          })
          .then(function (res) {
            console.log("resssssss", res.data);
          })
          .catch(function (err) {
            console.log(err);
          });
        clearInterval(interval);
      }
    }, 1000);
  };

  const oldNumber = () => {
    setDisplayDialogPhone(false);
    console.log(tableOfCrim.length);
    document.getElementById("phone").value = `${tableOfCrim[tableOfCrim.length - 1].phoneNum
      }`;
    setCounter(0);
  };

  const newNumber = () => {
    setDisplayDialogPhone(false);
    setCounter(1);
  };

  const contu = () => {
    console.log(tableOfCrim);
    let totalCost = 0;
    setDisplayPhoneInput(true);
  };

  const cancelPhoneDialog = () => {
    setDisplayPhoneInput(false);
    document.getElementById("phone").value = "";
    setDisplayPhoneError(true);
  };

  const payConfirm = () => {
    console.log(document.getElementById("phone").value);
    if (/^01[0-2]\d{8}$/.test(document.getElementById("phone").value)) {
      console.log("here");
      console.log(tableOfCrim);
      let totalCost = 0;
      setDisplayPhoneInput(false);
      for (let i = 0; i < tableOfCrim.length; i++) {
        totalCost += tableOfCrim[i].cost;
      }

      axios
        .post("http://localhost:5000/perform_transaction", {
          amount: totalCost,
          terminal_id: terminalId,
        })
        .then(function (res) {
          checkGet();
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      console.log("here");
      setDisplayPhoneError(false);
    }
  };
  return (
    <>
      <section
        style={{
          display:
            props.displayIssuePage &&
              !props.displayTicket &&
              !props.displayMainPage
              ? "block"
              : "none",
        }}
      >
        <div className="d-flex justify-content-center align-items-center  issue-page">
          <div
            className="container p-5"
            style={{ border: "2px solid #C7A66C" }}
          >
            <div className="row">
              <div className="case">
                <h6 className="mt-3">القضية</h6>
              </div>
              <div className="row mt-3">
                <div className="col-md-4 col-lg-4">
                  <h6 style={{ textAlign: "right" }}>المحكمة</h6>
                  <select className="form-control">
                    <option value="محكمة القاهرة الجديدة">
                      محكمة القاهرة الجديدة
                    </option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-3">
                  <h6 style={{ textAlign: "right" }}>رقم القضية</h6>
                  <input
                    type="number"
                    id="criNum"
                    className="form-control"
                    placeholder="ادخل رقم القضية هنا"
                  />
                </div>

                <div className="col-md-2">
                  <h6 style={{ textAlign: "right" }}>سنة القضية</h6>
                  <select
                    className="form-control"
                    id="year"
                    onChange={(e) => selectYear(e)}
                  >
                    {!yearGenerate10.length == 0 ? (
                      yearGenerate10.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))
                    ) : (
                      <option></option>
                    )}
                  </select>
                </div>

                <div className="col-md-3">
                  <h6 style={{ textAlign: "right" }}>نوع الجدول</h6>
                  <select
                    className="form-control"
                    id="circle"
                    onChange={(e) => selectCircle(e)}
                    defaultValue={1}
                  >
                    {!allCircles.length == 0 ? (
                      allCircles.map((circle, index) => (
                        <option key={index} value={circle.id}>
                          {circle.name}
                        </option>
                      ))
                    ) : (
                      <option></option>
                    )}
                  </select>
                </div>

                <div
                  className="col-md-4 col-lg-3"
                  style={{
                    display: displayPoliceInput ? "block" : "none",
                  }}
                >
                  <h6 style={{ textAlign: "right" }}>قسم الشرطة</h6>
                  <select
                    className="form-control"
                    id="police"
                    onChange={(e) => selectPoliceStation(e)}
                  >
                    <option disabled selected>
                      اختار قسم الشرطة
                    </option>
                    {!allPoliceStations.length == 0 ? (
                      allPoliceStations.map((police, index) => (
                        <option
                          key={index}
                          value={police.id}
                          id={police.ID}
                        >
                          {police.name}
                        </option>
                      ))
                    ) : (
                      <option></option>
                    )}
                  </select>
                </div>

                <div
                  className="col-md-4 col-lg-3 mt-3"
                >
                  <h6 style={{ textAlign: "right" }}>تاريخ القضية</h6>
                  <input type="date" className="form-control" id="caseDate"/>
                </div>

              </div>

              <div className="row">
                <div className="mt-3">
                  <button
                    className="btn float-start"
                    style={{
                      backgroundColor: "#C7A66C",
                      color: "white",
                      padding: "8px 30px",
                    }}
                    onClick={() => search()}
                  >
                    بحث
                  </button>
                </div>
              </div>

              <div
                className="mt-5"
                style={{ display: displayNumCrim ? "none" : "block" }}
              >
                <h5 className="alert alert-danger">من فضلك ادخل رقم القضية</h5>
              </div>

              <div
                className="mt-5"
                style={{ display: displayYear ? "none" : "block" }}
              >
                <h5 className="alert alert-danger">من فضلك اختر السنة</h5>
              </div>

              <div
                className="mt-5"
                style={{ display: displayStation ? "none" : "block" }}
              >
                <h5 className="alert alert-danger">من فضلك ادخل قسم الشرطة</h5>
              </div>

              <div
                className="mt-5"
                style={{ display: displayAgain ? "none" : "block" }}
              >
                <h5 className="alert alert-danger">
                  تمت إضافة هذه القضية من قبل{" "}
                </h5>
              </div>

              <div
                className="mt-5"
                style={{
                  display: displayPhoneError2 ? "none" : "block",
                }}
              >
                <h5 className="alert alert-danger">
                  من فضلك تأكد من رقم الهاتف
                </h5>
              </div>

              <div
                className="mt-5"
                style={{
                  display: displayCaseDate ? "none" : "block",
                }}
              >
                <h5 className="alert alert-danger">
                  من فضلك ادخل تاريخ القضية
                </h5>
              </div>

              <div
                className="mt-5"
                style={{
                  display: displayResultNo ? "none" : "block",
                }}
              >
                <h5 className="alert alert-danger">
                  عفوا لا يمكن الاستعلام عن هذه الدعوة
                </h5>
              </div>

              <div
                className="mt-5"
                style={{
                  display: displayResultYes ? "none" : "block",
                }}
              >
                <h5 className="alert alert-success">
                  تمت الاضافة الى جدول الاستعلامات لارسال الحكم ، يمكنك إضافة استعلام آخر
                </h5>
              </div>

              <div>
                <div style={{ border: "2px solid #C7A66C" }} className="mt-3">
                  <div className="row justify-content-between text-center align-items-center">
                    <div className="col-md-4">
                      <h6 className="mt-3" style={{ fontWeight: "bold" }}>
                        الاستعلامات
                      </h6>
                    </div>
                    {tableOfCrim.length == 0 ? (
                      ""
                    ) : (
                      <div className="col-md-3">
                        <h6 className="mt-3">الاجمالي {counterInfo} جنيه</h6>
                      </div>
                    )}
                  </div>

                  <div className="border-bottom mt-2"></div>
                  <div
                    style={{
                      height: "150px",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  >
                    <table
                      className="table table-bordered table-striped text-center my-2"
                      style={{ width: "98%", margin: "auto" }}
                      cellPadding="5"
                      border="1"
                      cellSpacing="0"
                    >
                      <thead
                        className="text-white"
                        style={{ backgroundColor: "#daab5c" }}
                      >
                        <tr>
                          <th>نوع الجدول</th>
                          <th>رقم القضية</th>
                          <th>السنة</th>
                          <th>قسم شرطة</th>
                          <th>تكلفة الخدمة</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody style={{ color: "#5F7030" }} id="tableInfo">
                        {!tableOfCrim.length == 0 ? (
                          tableOfCrim.map((item, index) => (
                            <tr key={index}>
                              <td>{CircleName}</td>
                              <td>{item.numOfCrim}</td>
                              <td>{item.year}</td>
                              <td>
                                {item.policeStation == ""
                                  ? "-"
                                  : policeStationName}
                              </td>
                              <td>{item.cost} جنيه </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => deleteItem(index)}
                                >
                                  حذف
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row" style={{ display: displayContinue ? "flex" : "none" }}>
                  <div className="col-lg-9">
                    <div className="mt-1">
                      <h5 className="text-danger text-center" style={{ fontWeight: "900" }}> * ملحوظة سيتم ارسال رسالة على هاتفك المحمول بنتيجة إستعلامك</h5>

                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="mt-1" style={{ textAlign: "left" }}>
                      <button
                        className="btn btn-success"
                        style={{ padding: "8px 30px" }}
                        onClick={() => contu()}
                      >
                        استمرار
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
            <h3 className="text-white"> هل تريد البحث عن قضية اخرى؟</h3>

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

      <section style={{ display: displayDialogPhone ? "block" : "none" }}>
        <div className=" train-booking-layer1 d-flex justify-content-center position-absolute align-items-center ">
          <div
            className=" p-5"
            style={{
              border: "2px solid black",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            <h3 className="text-white"> هل تريد اضافة الرقم السابق؟</h3>

            <div className="d-flex justify-content-center">
              <div>
                <Button
                  className="btn btn-primary"
                  onClick={() => newNumber()}
                  style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                  لا
                </Button>
                <Button
                  className="btn btn-primary"
                  onClick={() => oldNumber()}
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

      <section style={{ display: displayPayment ? "block" : "none" }}>
        <div className=" train-booking-layer d-flex justify-content-center position-absolute align-items-center ">
          <div className="text-success bg-white p-5 bordoer-2p">
            <h2 className="text-center">عملية الدفع</h2>
            <h2 style={{ fontSize: "9rem" }} className="text-center">
              <i className="fas fa-spinner fa-spin"></i>
            </h2>
            <h2 className="text-center">من فضلك انتظر</h2>
          </div>
        </div>
      </section>

      <section style={{ display: displayFailed ? "block" : "none" }}>
        <div className=" train-booking-layer d-flex justify-content-center position-absolute align-items-center ">
          <div className="text-danger bg-white p-5 bordoer-2p">
            <h2 style={{ fontSize: "9rem" }} className="text-center">
              <i className="fas fa-times-circle"></i>
            </h2>
            <h2 className="text-center">العملية فشلت</h2>
            <div className="d-flex justify-content-center">
              <div>
                <Button
                  className="btn btn-primary"
                  onClick={() => tryAgain()}
                  style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                  حاول مرة اخرى
                </Button>
                <Button
                  className="btn btn-danger"
                  style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                  onClick={() => exitPayment()}
                >
                  خروج
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: displayPhoneInput ? "block" : "none" }}>
        <div className=" train-booking-layer d-flex justify-content-center position-absolute align-items-center ">
          <div className="text-success bg-white p-5 bordoer-2p">
            <h2 style={{ fontSize: "9rem" }} className="text-center">
              <i className="fas fa-sms"></i>{" "}
            </h2>
            <h2 className="text-center">
              {" "}
              ادخل رقم هاتفك المحمول لاستقبال نتيجة استعلاماتك
            </h2>
            <input
              type="number"
              className="form-control w-50 m-auto"
              placeholder="ادخل رقم الهاتف هنا"
              id="phone"
              style={{ fontSize: "22px" }}
            />{" "}
            <div className="d-flex justify-content-center mt-3">
              <div>
                <Button
                  className="btn btn-success"
                  onClick={() => payConfirm()}
                  style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                  الدفع
                </Button>
                <Button
                  className="btn btn-danger"
                  style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                  onClick={() => cancelPhoneDialog()}
                >
                  إلغاء
                </Button>
              </div>
            </div>
            <div
              className="mt-5"
              style={{
                display: displayPhoneError ? "none" : "block",
              }}
            >
              <h5 className="alert alert-danger">
                من فضلك ادخل رقم الهاتف صحيح
              </h5>
            </div>
          </div>
        </div>
      </section>

      <TicketPrint
        responeAndriod={responeAndriod}
        tableOfCrim={tableOfCrim}
        counterInfo={counterInfo}
        numberOfInq={totalRows}
        displayMainPage={props.displayMainPage}
        displayIssuePage={props.displayIssuePage}
        displayTicket={props.displayTicket}
        handleDisplayIssuePage={props.handleDisplayIssuePage}
        handleDisplayMainPage={props.handleDisplayMainPage}
        handleDisplayTicket={props.handleDisplayTicket}
        phone = {phone}
        handleTableOfCrim={handleTableOfCrim}
        handleDisplayContinue={handleDisplayContinue}
        caseSessionId = {caseSessionId}
      />
    </>
  );
};
export default Issue;
