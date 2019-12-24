import * as React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

const THINGS_URL = "some-url";

export interface Thing {
  name: string;
  price: string;
}

const ThingsList = (): JSX.Element => {
  const [things, setThings] = useState(Array<Thing>());

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
    <div>
      {things.map((thing: Thing) => (
        <div key={thing.name.toLowerCase()}>{thing.name}</div>
      ))}
    </div>
  );
};

export default ThingsList;
