import { useState } from "react";
const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <button
        onClick={() =>
          setCount((prevCount) => {
            return prevCount + 1;
          })
        }
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() =>
          setCount((prevCount) => {
            return prevCount - 1;
          })
        }
      >
        -
      </button>
    </div>
  );
};

export default App;
