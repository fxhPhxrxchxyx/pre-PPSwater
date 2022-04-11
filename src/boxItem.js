import React, { useState } from "react";
const BoxItem = (props) => {
  const [isFav, setFav] = useState(false);
  const [count, setCount] = useState(0);
  const handleToggleFav = () => {
    setFav(!isFav);
    setCount(count + 1);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        borderRadius: "15px",
        margin: "5px"
      }} >
      {isFav ? "💖" : "🥲"} BoxItem {props.text} {count}
      <button onClick={handleToggleFav} style={{ marginLeft: 20, border: "none", padding: "5px", borderRadius: "5px", backgroundColor: "rgb(217, 228, 255)" }}>check to change state</button>
    </div>
  );
};
export default BoxItem;