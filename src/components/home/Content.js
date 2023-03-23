import React from 'react';
import "../../styles/Content.css";

const Content = () => {
    


    return (
      <div>
        {/*   Coupons Container    */}
        <div className="position-relative">
          <div className="holiday-coupon-container bg-white p-2 shadow">
            <div className="float-left mr-4 ml-4">
              <img
                src="https://i.postimg.cc/XYxVCYGb/holiday.png"
                alt="holiday_coupon"
              />
            </div>

            <div className="d-table-cell align-middle pl-2">
              <div className="lead font-weight-bold">
                SAVE UPTO RS 375 ON BUS TICKETS
              </div>
              <div className="text-muted">Use code FIRST on App</div>
            </div>
          </div>
        </div>

        {/*   Cashback Container    */}
        <div className="cashback-container d-flex justify-content-center bg-light mb-5 pb-5 pt-5">
          <div className="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
            <div className="text-muted font-weight-bold small">
              Travel on RTC and Save up to Rs 175
            </div>
            <div>
              <img src="https://i.postimg.cc/kG8J6N81/bus.png" alt="bus" />
            </div>
            <div className="text-muted small">Pay using Amazon Pay</div>
            <div className="font-weight-normal">Use code : AABBC</div>
          </div>

          <div className="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
            <div className="text-muted font-weight-bold small">
              Cashback up to Rs 275 on bus tickets.
            </div>
            <div>
              <img
                src="https://i.postimg.cc/kg7JGb5s/holiday-cashback.png"
                alt="bus"
              />
            </div>
            <div className="text-muted small">Limited Period Offer</div>
            <div className="font-weight-normal">Use code : CCDDEE</div>
          </div>

          <div className="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
            <div className="text-muted font-weight-bold small">
              Cashback up to Rs 275 on bus tickets.
            </div>
            <div>
              <img src="https://i.postimg.cc/d1htvc0K/amazon.png" alt="bus" />
            </div>
            <div className="text-muted small">Pay using Amazon Pay</div>
            <div className="font-weight-normal">Limited Period Offer</div>
          </div>
        </div>

        <div className="on-time-guarantee d-flex mt-5 mb-5 p-4 border">
          <div className="pr-4">
            <img
              src="https://i.postimg.cc/xTDTr7DW/hero-ontime.png"
              alt="hero_ontime"
              width="80px"
            />
          </div>

          <div>
            <div>
              <h2>Introducing On-Time Guarantee</h2>
              <h4 className="text-muted font-weight-normal">
                Leave on time, everytime
              </h4>
            </div>

            <div className="d-flex pt-4 pb-4">
              <p className="font-weight-light mr-3">
                <span>
                  <img
                    src="https://i.postimg.cc/Z5Ym4zfD/tip-icon.png"
                    height="23"
                  />
                </span>{" "}
                Look for buses with
              </p>
              <p className="mr-3">
                <img src="https://i.postimg.cc/fyxsTzn1/otgText.png" />
              </p>
              <p className="font-weight-light mr-3">
                tag while booking your journey
              </p>
            </div>

            <div className="d-flex">
              <div>
                <h5 className="text-primary">Bus on time</h5>
                <div className="font-weight-bold">Get 25% refund</div>
                <div className="text-muted">
                  If bus departure is delayed by 30 mins from boarding point.
                </div>
              </div>

              <div>
                <h5 className="text-primary">No bus cancellation</h5>
                <div className="font-weight-bold">Get 150% refund</div>
                <div className="text-muted">
                  Bus is cancelled without an alternate arrangement.
                </div>
              </div>

              <div>
                <h5 className="text-primary">Alternate assurance</h5>
                <div className="font-weight-bold">Get 300% refund</div>
                <div className="text-muted">
                  Bus breaks down with no alternate arrangement within 6 hours.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   redBus Video Container    */}
        <div className="m-5 pl-5">
          <div className="ml-5 pl-4">
            <iframe
              src="https://www.youtube.com/embed/x5EQNUsYNUM"
              width="375"
              height="198"
            ></iframe>
          </div>
        </div>

        {/*   Track My Bus - Smarter Way To Travel Container    */}
        <div className="track-my-bus bg-light p-4 mb-5 pb-5">
          <div className="mb-5">
            <div className="float-left mr-5 ml-5">
              <img
                src="https://i.postimg.cc/mkGxnvzj/tmb-img.png"
                alt="tmb_img"
              />
            </div>

            <div className="d-table-cell align-middle pl-5 pr-5">
              <h3>TRACK MY BUS - Smarter Way To Travel</h3>
              <p className="text-muted">
                Track your bus with our ‘Track My Bus’ feature and know the
                exact location in real-time.Stay informed and keep your family
                informed!
              </p>
              <button className="btn btn-light btn-outline-danger">
                Know More
              </button>
            </div>
          </div>

          <hr className="w-75 border" />

          <div className="d-flex justify-content-around p-5">
            <div className="text-center">
              <div className="lead text-muted font-weight-normal">BUSES</div>
              <h1 className="text-danger">10,000</h1>
              <div className="text-muted">
                Total buses currently being tracked
              </div>
            </div>

            <div className="text-center">
              <div className="lead text-muted font-weight-normal">ROUTES</div>
              <h1 className="text-danger">60,000</h1>
              <div className="text-muted">
                Total routes covered by live tracking
              </div>
            </div>

            <div className="text-center">
              <div className="lead text-muted font-weight-normal">USERS</div>
              <h1 className="text-danger">40,000</h1>
              <div className="text-muted">
                Total users using Track My Bus feature
              </div>
            </div>
          </div>
        </div>

        {/*   Convenience On-The-Go IOS/Android Container    */}
        <div className="ios-android-container position-relative mb-5">
          <div>
            {/*   Background Image Container    */}
            <div className="d-flex justify-content-around">
              <div className="pt-4">
                <h3>CONVENIENCE ON-THE-GO.</h3>
                <div className="w-75">
                  <p className="text-dark small">
                    Exclusive features on mobile include
                  </p>
                  <p className="text-dark small">
                    redBus NOW - when you need a bus in the next couple of
                    hours. Board a bus on its way.
                  </p>
                  <p className="text-dark small">
                    Boarding Point Navigation - Never lose your way while
                    travelling to your boarding point!
                  </p>
                  <p className="text-dark small">
                    1-click Booking - Save your favourite payment options
                    securely on redBus, and more.
                  </p>
                  <p className="text-dark small">Download the app.</p>
                  <p className="text-dark small">
                    Enter your mobile number below to download the redBus mobile
                    app.
                  </p>
                  {/*   SMS me the link    */}
                  <form className="form-inline">
                    <select className="form-control form-control-sm mr-2 mb-2">
                      <option>+91</option>
                    </select>
                    <input
                      className="form-control form-control-sm mr-2 mb-2 w-50"
                      type="text"
                      placeholder="Enter your mobile number"
                    />
                    <button
                      className="btn btn-outline-danger btn-sm mb-2"
                      type="submit"
                    >
                      SMS ME THE LINK
                    </button>
                  </form>
                  {/*   Download redBus Application    */}
                  <button className="btn btn-dark rounded-circle mr-2">
                    <i className="fab fa-apple"></i>
                  </button>
                  <button className="btn btn-dark rounded-circle">
                    <i className="fab fa-google-play"></i>
                  </button>
                </div>
              </div>

              <div>
                <img
                  src="https://i.postimg.cc/TP4ftNJN/IOS-Android-device.png"
                  alt="IOS_Android_device"
                  width="420"
                />
              </div>
            </div>
          </div>
        </div>

        {/*   We Promise To Deliver Container    */}
        <div className="we-promise-container bg-light p-3 pb-5">
          <div className="text-center m-4">
            <img
              src="https://i.postimg.cc/QN5hqb9S/promise.png"
              alt="promise"
              width="85"
            />
            <h2 className="text-dark m-2">WE PROMISE TO DELIVER</h2>
          </div>

          <div className="text-center d-flex">
            <div className="border bg-white w-25">
              <div className="p-4">
                <img
                  src="https://i.postimg.cc/wMKHptPh/maximum-choices.png"
                  alt="maximum_choices"
                  width="120"
                />
              </div>
              <div className="mb-5 m-4 font-weight-light lead">
                MAXIMUM CHOICE
              </div>
              <div className="m-4 p-1 text-muted">
                We give you the widest number of travel options across thousands
                of routes.
              </div>
            </div>

            <div className="border bg-white w-25">
              <div className="p-4">
                <img
                  src="https://i.postimg.cc/Y2mqs7V6/customer-care.png"
                  alt="customer_care"
                  width="91"
                />
              </div>
              <div className="mb-5 mt-4 font-weight-light lead">
                SUPERIOR CUSTOMER SERVICE
              </div>
              <div className="m-4 p-1 text-muted">
                We put our experience and relationships to good use and are
                available to solve your travel issues.
              </div>
            </div>

            <div className="border bg-white w-25">
              <div className="p-4">
                <img
                  src="https://i.postimg.cc/JnHmv3Tr/lowest-Fare.png"
                  alt="lowest_Fare"
                  width="120"
                />
              </div>
              <div className="mb-5 mt-4 font-weight-light lead">
                LOWEST PRICES
              </div>
              <div className="m-4 p-1 text-muted">
                We always give you the lowest price with the best partner
                offers.
              </div>
            </div>

            <div className="border bg-white w-25">
              <div className="p-4">
                <img
                  src="https://i.postimg.cc/k4LMgYVR/benefits.png"
                  alt="benefits"
                  width="120"
                />
              </div>
              <div className="mb-5 mt-4 font-weight-light lead">
                UNMATCHED BENEFITS
              </div>
              <div className="m-4 p-1 text-muted">
                We take care of your travel beyond ticketing by providing you
                with innovative and unique benefits.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Content;