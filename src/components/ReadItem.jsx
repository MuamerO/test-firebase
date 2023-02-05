import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseInit";
import uniqid from "uniqid";

const ReadItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const dataCollection = collection(db, `ImageCards`);
    getDocs(dataCollection)
      .then((response) => {
        const dta = response.docs.map((doc) => {
          return { data: doc.data(), id: doc.id };
        });
        setData(dta);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container">
      {data.map((items) => (
        <ul>
          <li key={uniqid()}>
            img: {<img src={items.data.cardImage} alt="img" />}
          </li>
          <li key={uniqid()}>
            <p>id:{items.data.id}</p>
          </li>
          <li key={uniqid()}>Collection: {items.data.collection}</li>
          <li key={uniqid()}>LinkPath: {items.data.linkpath}</li>
        </ul>
      ))}
    </div>
  );
};

export default ReadItem;
