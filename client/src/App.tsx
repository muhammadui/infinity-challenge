import { useState } from "react";
import InfinityChallenge from "./pages/InfinityChallenge/InfinityChallenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InfinityChallenge />
    </>
  );
}

export default App;
