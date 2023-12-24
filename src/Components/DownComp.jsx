const DownComp = () => {
  return (
    <div className="dow-main-box" id="download-section">
      <div className="download-comp-container">
        <div className="left-bx-con ">
          <div className="fonsx">
            Embrace the future of work: more time, less stress, and limitless
            possibilities.
          </div>
          <div className="instruct newm">
            Ready to reclaim your time? Download our app now and start enjoying
            the benefits of time-sharing. Your journey to a more effective way
            of pursuing your dreams, passions, and goals with renewed vigour
            begins here.
          </div>
          {/* <div className="app-badge-dow">
            <img src="images/bad1.png" alt="" />

            <img src="images/bad2.png" alt="" />
          </div> */}
        </div>
        <div className="download-ri new-downlad-box ">
          {/* <img src="images/qr.png" alt="" /> */}
          {/* <img src="images/land4.png" alt="" /> */}
          <div className="app-badge-download">
            <div className="apple-down-bx">
              <div className="for-app-sroid">Download for IOS</div>
              <img src="images/bad1.png" alt="" />
            </div>
            <div className="apple-down-bx">
              <div className="for-app-sroid">Download for Android</div>
              <img src="images/bad2.png" alt="" />
            </div>
            {/* <img src="images/qr.png" alt="" className="qr-ma" /> */}
          </div>
        </div>
        <div className="trd-side">
          <img src="/images/trd.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownComp;
