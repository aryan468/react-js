import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <div className="frame-wrapper3">
      <div className="frame-parent9">
        <div className="frame-wrapper4">
          <div className="frame-parent10">
            <div className="frame-wrapper5">
              <img
                className="frame-child5"
                alt=""
                src="/group-1171281573.svg"
              />
            </div>
            <div className="days-parent">
              <b className="days">10 days</b>
              <div className="staff-deployment">Staff Deployment</div>
            </div>
          </div>
        </div>
        <div className="frame-parent11">
          <div className="frame-parent12">
            <img
              className="frame-child6"
              loading="lazy"
              alt=""
              src="/group-1171281558.svg"
            />
            <img className="mask-group-icon3" alt="" src="/mask-group@2x.png" />
          </div>
          <div className="meshiistudiocloseupofdiferrent">
            <div className="inicio-maquina-parent">
              <div className="inicio-maquina">$0.5</div>
              <div className="million-wrapper">
                <div className="million">million</div>
              </div>
            </div>
            <div className="reduced-client-expenses">
              Reduced client expenses by saving on hiring and employee costs.
            </div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <Button
            className="frame-button"
            endIcon={<img width="24px" height="24px" src="/frame.png" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "linear-gradient(97.55deg, #1c1c1c, #454444)",
              borderRadius: "100px",
              "&:hover": {
                background: "linear-gradient(97.55deg, #1c1c1c, #454444)",
              },
              height: 88,
            }}
          >
            Explore more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
