import React, { useState } from "react";
import { Input, Button } from "../../Components";
import "./index.css";
import ListData from "../../View/ListData/index";

const Add = () => {
  const [acitvity, setAcitivity] = useState("");
  const [listData, setlistData] = useState([]);

  const inputAct = document.getElementById("inputAct").value;
  const addAcitvity = () => {
    // setlistData([...listData,activity]);
    // console.log("text");

    if (inputAct === "") {
      alert("Please Fill the input box");
    } else {
      setlistData(() => {
        const updatedlist = [...listData, acitvity];
        console.log(updatedlist);
        setAcitivity("");
        return updatedlist;
      });
    }
  };
  const removeAcitvity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  };

  const removeAll = () => {
    setlistData([]);
  };
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <Input
          value={acitvity}
          placeholder="Enter text"
          id="inputAct"
          onChange={(e) => {
            setAcitivity(e.target.value);
          }}
        />
        <Button onClick={() => addAcitvity()} />
        <ListData
          listData={listData}
          removeAcitvity={removeAcitvity}
          removeAll={removeAll}
        />
      </div>
    </>
  );
};

export default Add;
