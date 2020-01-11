import * as React from "react";
import { useHover } from "../common/hooks";
import { FaEdit } from "react-icons/fa";

const Thing = (props: { name: string; price: string }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <div className="thing" ref={hoverRef}>
      <div className="thing__image" />
      <div className="thing__details">
        <div className="thing__name">{props.name}</div>
        <div className="thing__quantityAndPrice">
          <div className="thing__quantity">6 units</div>
          <div className="thing__price">Price: {props.price}</div>
        </div>
        <div className={isHovered ? "thing__actions" : "thing__actions thing__actions--collapsed"}>
          <FaEdit />
        </div>
      </div>
    </div>
  );
};
export default Thing;
