import * as React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Thing from "../components/Thing"

const THINGS_URL = "http://localhost:3000/api/v1/things";

export interface Thing {
  name: string;
  price: string;
}

const ThingsList = (): JSX.Element => {
  const [things, setThings] = useState([]);

  useEffect(() => {
    Axios.get(THINGS_URL)
      .then(response => {
        setThings(response.data.things);
      })
      .catch(() => {
        console.log("Failed to fetch some things.");
      });
  }, []);

  return (
    <div className="thingsList">
      { things.map((thing: Thing, idx: number) => (<Thing key={idx} {...thing} />)) }
    </div>
  );
};

export default ThingsList;
