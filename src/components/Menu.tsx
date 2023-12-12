import { useState } from "react";

export const Menu = () => {
  const [num, setNum] = useState(0);

  const handleAdd = () => setNum(num + 1);

  return (
    <div>
      current number: {num} <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
