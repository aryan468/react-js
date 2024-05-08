import "./Success.css";

const Success = () => {
  return (
    <div className="success">
      <img className="path70-icon3" alt="" src="/path70.svg" />
      <img className="image-4-icon4" alt="" src="/image-4@2x.png" />
      <img className="image-32315-icon4" alt="" src="/image-32315@2x.png" />
      <img className="image-32510-icon4" alt="" src="/image-32510@2x.png" />
      <section className="frame-parent5">
        <img
          className="frame-child4"
          loading="lazy"
          alt=""
          src="/frame-1261155216.svg"
        />
        <div className="frame-wrapper1">
          <div className="frame-parent6">
            <div className="tick-round-parent">
              <div className="tick-round">
                <img
                  className="frame-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="success-submitted-parent">
                <h2 className="success-submitted">Success Submitted</h2>
                <div className="congratulations-parent">
                  <h1 className="congratulations">Congratulations</h1>
                  <h3 className="your-request-has">
                    Your request has been successfully submitted to us. We will
                    validate your information and reach out to your shortly with
                    updates
                  </h3>
                </div>
              </div>
            </div>
            <footer className="redirecting-you-to-container">
              <span>
                <span>Redirecting you to Homepage in</span>
                <span className="span">{` `}</span>
              </span>
              <b className="seconds">5 Seconds</b>
            </footer>
          </div>
        </div>
      </section>
      <img className="success-child" alt="" src="/group-1171281438@2x.png" />
      <div className="mask-group-container">
        <img className="mask-group-icon2" alt="" />
      </div>
    </div>
  );
};

export default Success;
