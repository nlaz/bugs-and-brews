import React from "react";

function App() {
  return (
    <div className="mono bg-washed-blue ma0 ph3" style={{ minHeight: "100vh" }}>
      <div className="pv6 ma0">
        <div className="mw6 center v6 ba bw2">
          <h1 className="f2 ma0 bb bw2 pv1 ph2">
            Bugs & Brews{" "}
            <span role="img" aria-label="Bug and beer emoji">
              🐛🍻
            </span>
          </h1>
          <p className="lh-copy mb4 pv1 ph2">
            Bugs & Brews is a NYC community for creative people to meet up to
            work on their pet projects. The goal is to give people the space to
            focus. Everyone must share what they build each night.
          </p>
          <p className="pv1 ph2">
            Text Niko at <strong>718:568:7032</strong> to get on the list.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
