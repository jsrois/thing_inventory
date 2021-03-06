import * as React from "react";
import { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const NEW_THING_URL = "http://localhost:3000/new";

const ThingForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    Axios.post(NEW_THING_URL, { name, price: 0.0 })
      .then(response => {
        if (response.status === 200) {
          setSubmitted(true);
        } else {
          console.log("Failed to create the thing");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {submitted ? (
        <Redirect to="/" />
      ) : (
        <div className="panel">
          <div className="panelHeader">Create new</div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="Name">Name</label>
            <input
              id="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="Price">Price</label>
            <input id="price" />
            <label htmlFor="Quantity">Quantity</label>
            <input id="quantity" type="number"/>
            <input value="Add" type="submit" disabled={loading} />
          </form>
        </div>
      )}
    </>
  );
};

export default ThingForm;
