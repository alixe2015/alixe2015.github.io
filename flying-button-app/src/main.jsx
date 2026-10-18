import React from "react";
import { createRoot } from "react-dom/client";
import FlyingButton from "./FlyingButton.jsx";
import "./demo.css";

function App() {
  return (
    <main className="demo-shell">
      <div className="demo-heading">
        <p className="demo-eyebrow">INTERACTIVE DEMO</p>
        <h1>Ready for takeoff?</h1>
        <p>Hover over the button to ignite the thrusters. Click it to launch.</p>
      </div>
      <div className="demo-stage">
        <FlyingButton
          theme="dark"
          size="medium"
          altitude={170}
          hoverTime={2.4}
          jets={2}
          thrusters
          trigger="hover"
          carryCursor
          smoke={1}
          turbulence={1}
          wobble={1}
          ramp={false}
          thrustColor="#8ec5ff"
          smokeColor="#eef1f6"
          onClick={() => console.log("Lift off")}
        >
          Take off
        </FlyingButton>
      </div>
      <p className="demo-hint">HOVER TO IGNITE · CLICK TO LAUNCH</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
