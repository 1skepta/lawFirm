import React from "react";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Fifth from "./Fifth/Fifth";
import Last from "./Last/Last";
import Control from "../Control/Control";

function Landing() {
  return (
    <div className="App">
      <Control />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Last />
    </div>
  );
}

export default Landing;
