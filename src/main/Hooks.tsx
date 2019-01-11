import * as React from "react";

export default () => {
  const [count, setCount] = React.useState(0);

  const a = Math.random();
  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(
    () => {
      // Update the document title using the browser API
      // document.title = `You clicked ${count} times`;
      console.log("effect");
      document.title = `${a}`;
    },
    [count]
  );

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
