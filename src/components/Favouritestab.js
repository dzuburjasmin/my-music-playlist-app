import React from "react";

function Favouritestab(props) {
  return (
    <button className="mt-auto btn favouritebutton btn-sm">
      {props.AddOrRem}
    </button>
  );
}
export default Favouritestab;
