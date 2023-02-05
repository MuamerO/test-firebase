import React, { useState, useEffect, useCallback, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseInit";
import imageCardData from "../imageCardData";

const AddItem = () => {
  // get data
  const [fileData, setFileData] = useState([]);
  // set collection name
  const [collectionName, setCollectionName] = useState("ImageCards");
  const [message, setMessage] = useState("");

  // get every member of array data to send in the DB

  useEffect(() => {
    setFileData(imageCardData.map((item) => ({ ...item })));
  }, []);
  const databaseRef = collection(db, `${collectionName}`);
  const addData = () => {
    fileContent.map((data) => {
      addDoc(databaseRef, data)
        .then((response) => console.log())
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  const handleOnclick = () => {
    setCollectionName(message);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //code

  const [fileContent, setFileContent] = useState(" ");
  let fileRef = useRef();

  const readFile = (event) => {
    const fileReader = new FileReader();
    const { files } = event.target;

    fileReader.readAsText(files[0], "UTF-8");
    fileReader.onload = (e) => {
      const content = e.target.result;
      console.log(content);
      setFileContent(JSON.parse(content));
    };
  };

  //code

  return (
    <div>
      <br />
      <br />
      <br />
      <input
        type="text"
        required
        placeholder="Set collection name"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleOnclick}>Set Collection name</button>
      <br />
      <br />
      <br />
      <h1>ADD JSON!!! FILE</h1>
      <input ref={fileRef} type="file" onChange={readFile} />
      <br />
      <br />
      <br />
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default AddItem;
