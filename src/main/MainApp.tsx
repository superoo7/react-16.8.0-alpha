import * as React from "react";
import Choices from "./Choices";

export default () => {
  const [choices, setChoices] = React.useState("default");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setChoices((e.target as any).value);
  return (
    <div>
      <div>React V16.8.0-alpha</div>
      <select name="choices" value={choices} onChange={handleChange}>
        <option value="default">default</option>
        <option value="suspense">suspense</option>
      </select>
      <Choices type={choices} />
    </div>
  );
};
