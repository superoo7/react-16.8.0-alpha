import * as React from "react";
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
    default:
      return (
        <div>
          <h1>notfound</h1>
        </div>
      );
  }
};
