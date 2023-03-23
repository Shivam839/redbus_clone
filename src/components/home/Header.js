import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"
import switchBtn from "../../Images/switch_btn.png"
import ValidateInputComp from "../general/ValidateInputComp";
import calender from "../../Images/calender.png"

function Header() {
  const navigate = useNavigate()
  const [fromS, setFromS] = useState("ahmedabad");
  const [toDest, setToDest] = useState("surat");
  const [getDate, setGetDate] = useState("2023-03-21")
  const [submit, setSubmit] = useState(false)
  const [errorMsg, setErrorMsg] = useState({
    fromS: false,
    toDest: false,
    getDate: false
  })

  const checkDate = (e) => {
    let date = new Date()
    let day = date.getDate();
    if (day <= e.target.value.slice(-2)) {
      console.log("done")
      setGetDate(e.target.value)
      setErrorMsg({ ...errorMsg, getDate: false })
    } else {
      console.log("sad")
      setErrorMsg({ ...errorMsg, getDate: true })
    }

    //setGetDate(e.target.value)

    console.log(e.target.value.slice(-2))
  }
  const swapFn = () => {
    const temp = fromS
    setFromS(toDest)
    setToDest(temp)
  }

  const submitFn = () => {
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    let obj = {
      fromS: false,
      toDest: false,
      getDate: false
    }
    if (!ValidateInputComp(pattern, fromS)) {
      obj.fromS = true
      console.log("input 1")
    } else {
      obj.fromS = false
    }
    if (!ValidateInputComp(pattern, toDest)) {
      obj.toDest = true
      console.log("input 2")
    } else {

      obj.toDest = false
    }
    if (!getDate) {
      obj.getDate = true
      //setErrorMsg({...errorMsg,getDate:true})
    }
    setErrorMsg(obj)
    setSubmit(!submit)


  }
  useEffect(() => {
    if (!errorMsg.fromS && !errorMsg.toDest && !errorMsg.getDate && fromS && submit) {

      navigate('/bus-tickets', { state: { fromS, toDest, getDate } })
    }
    console.log(errorMsg, "useEffect")
  }, [submit])

  return (
    <>
      <header>
        <div className="header-search-box">
          <div className="header-search-inner-box">
            <div className="header-search-input-container">
              <div className="input_box">
                <label htmlFor="source">FROM</label>
                <br></br>
                <div className="input_From">
                  <input
                    className="input_width"
                    type="text"
                    id="source"
                    value={fromS}
                    onChange={(e) => setFromS(e.target.value)}
                    placeholder="Source"
                  />
                </div>
              </div>
              <div className="input_box swap">
                <img
                  width={"30px"}
                  height={"30px"}
                  src={switchBtn}
                  alt="switch-btn"
                  onClick={swapFn}
                />
              </div>
              <div className="input_box">
                <label htmlFor="destination">TO</label>
                <br></br>
                <div className="input_From">
                  <input
                    className="input_width"
                    type="text"
                    id="destination"
                    value={toDest}
                    onChange={(e) => setToDest(e.target.value)}
                    placeholder="Destination"
                  />
                </div>
              </div>
              <div className="header-input-wraper-date">
                <label
                  htmlFor="date"
                  className={errorMsg.getDate && "error-msg-date"}
                >
                  <img src={calender} alt="calender icon" />{" "}
                  {getDate ? (
                    <span className="date-value">{getDate}</span>
                  ) : (
                    "Date"
                  )}{" "}
                </label>
                <span class="datepicker-toggle">
                  <span class="datepicker-toggle-button"></span>
                  <input
                    type="date"
                    id="date"
                    class="datepicker-input"
                    onChange={(e) => checkDate(e)}
                  />
                </span>
              </div>
              <div className="header-input-wraper-btn" onClick={submitFn}>
                <h4>Search Bus</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
