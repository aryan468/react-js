import { Button } from "@mui/material";
import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <section className="website-inner2">
      <header className="contctanos-parent">
        <img
          className="contctanos-icon"
          loading="lazy"
          alt=""
          src="/frame-1261155216.svg"
        />
        <div className="ver">
          <Button
            className="ver-child"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: "18",
              borderColor: "#eaeaea",
              borderRadius: "107.05555725097656px",
              "&:hover": { borderColor: "#eaeaea" },
              width: 189.6,
            }}
          >
            Get projects
          </Button>
          <Button
            className="ver-item"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "linear-gradient(97.55deg, #1c1c1c, #454444)",
              borderRadius: "107.05555725097656px",
              "&:hover": {
                background: "linear-gradient(97.55deg, #1c1c1c, #454444)",
              },
              height: 77.2,
            }}
          >
            Onboard Talent
          </Button>
        </div>
        <img
          className="group-icon"
          loading="lazy"
          alt=""
          src="/group-1171281504@2x.png"
        />
      </header>
    </section>
  );
};

export default FrameComponent5;
