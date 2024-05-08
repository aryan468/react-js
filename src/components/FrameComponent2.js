import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <div className="whats-on-your-mind-parent">
      <h2 className="whats-on-your">What’s on your mind</h2>
      <div className="spark-instance">
        <h1 className="ask-questions">Ask Questions</h1>
        <div className="staff-deployment-label">
          <FormControl
            className="parent"
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
                <img width="24px" height="24px" src="/frame-1.svg" style={{}} />
              )}
            >
              <MenuItem>Do you offer freelancers?</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
