import { useState } from "react";

export const Bottom = () => {
  const [state, setState] = useState("testing state");

  const handleChangeState = () => setState("super test");

  return (
    <div className="absolute bottom-[-50px] bg-red-500">
      Footer block with state: {state}
      <button onClick={handleChangeState}>Change state trigger</button>
    </div>
  );
};
