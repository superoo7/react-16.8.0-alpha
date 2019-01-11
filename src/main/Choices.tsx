import * as React from "react";
import Context from "./Context";
import Hooks from "./Hooks";
const Lazy = React.lazy(() => import("./Lazy"));

interface IProps {
  type: string;
}

export default (props: IProps) => {
  switch (props.type) {
    case "default":
      return (
        <div>
          <h1>Default</h1>
        </div>
      );
    case "suspense":
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Lazy />
        </React.Suspense>
      );
    case "context":
      return <Context />;
    case "hooks":
      return <Hooks />;
    default:
      return (
        <div>
          <h1>notfound</h1>
        </div>
      );
  }
};
