import React from "react";
import "./index.css";

const ListData = (props) => {
  return (
    <div>
      <p className="List-heading">Here is your List</p>
      {props.listData.map((data, i) => {
        return (
          <>
            <p key={i}>
              <div className="listData">{data}</div>
              <div className="btn-position">
                <button onClick={() => props.removeAcitvity(i)}>Remove</button>
              </div>
            </p>
          </>
        );
      })}
      {props.listData.length >= 2 && (
        <button onClick={props.removeAll}>Reove All</button>
      )}
    </div>
  );
};

export default ListData;
