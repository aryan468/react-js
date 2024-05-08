import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="skill-selection-helper">
      <div className="union-wrapper">
        <img className="union-icon" loading="lazy" alt="" src="/union.svg" />
      </div>
      <div className="frame-parent13">
        <div className="frame-parent14">
          <div className="whats-the-guarantee-that-i-wi-parent">
            <div className="whats-the-guarantee-container">
              <p className="whats-the-guarantee">
                What’s the guarantee that I will be satisfied
              </p>
              <p className="with-the-hired">with the hired talent?</p>
            </div>
            <div className="right-skillset-duration-picker">
              <img
                className="frame-icon3"
                loading="lazy"
                alt=""
                src="/frame-2.svg"
              />
            </div>
          </div>
          <div className="frame-child7" />
        </div>
        <div className="frame-parent15">
          <div className="can-i-hire-multiple-talents-at-parent">
            <div className="can-i-hire">
              Can I hire multiple talents at once?
            </div>
            <div className="what-is-on-your-mind-input">
              <img
                className="frame-icon4"
                loading="lazy"
                alt=""
                src="/frame-3.svg"
              />
            </div>
          </div>
          <div className="if-unhappy-with">
            If unhappy with a project, communicate with the freelancer, allow
            for revisions, and refer to the agreement. Escalate to platform
            support if needed, considering mediation. Review policies, seek
            collaborative solutions for resolution.
          </div>
          <div className="frame-child8" />
        </div>
        <FormControl
          className="group"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "100%",
            height: "53px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "53px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "53px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "53px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "53px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#1c1c1c",
              fontSize: 20,
              fontWeight: "SemiBold",
              fontFamily: "Manrope",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            displayEmpty
            IconComponent={() => (
              <img width="24px" height="24px" src="/frame-4.svg" style={{}} />
            )}
          >
            <MenuItem>Why should I not go to an agency directly?</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="who-can-help-me-pick-a-right-s-parent">
          <div className="who-can-help-container">
            <span className="who-can-help-container1">
              <p className="who-can-help">
                Who can help me pick a right skillset
              </p>
              <p className="and-duration-for">and duration for me?</p>
            </span>
          </div>
          <div className="frame-frame">
            <img
              className="frame-icon5"
              loading="lazy"
              alt=""
              src="/frame-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
