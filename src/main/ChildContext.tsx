import * as React from "react";
import store from "./ContextStore";

export default () => (
  <div>
    <h3>Child Context</h3>
    <store.ThemeContext.Consumer>
      {value => <h2>{value}</h2>}
    </store.ThemeContext.Consumer>
  </div>
);
