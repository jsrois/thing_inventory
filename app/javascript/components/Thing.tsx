import * as React from "react";

const Thing = (props: { name: string; price: string }): JSX.Element => (
  <div className="thing">
    <div className="thing__image" />
    <div className="thing__details">
      <div className="thing__name">{props.name}</div>
      <div className="thing__price">Price: {props.price}</div>
    </div>
    <div className="thing__actions"></div>
  </div>
);
export default Thing;
