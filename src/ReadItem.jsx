import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseInit";

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
    <div>
      {data.map((items) => (
        <p>{items.data.id}</p>
      ))}
      {console.log(data.data)}
    </div>
  );
};

export default ReadItem;
