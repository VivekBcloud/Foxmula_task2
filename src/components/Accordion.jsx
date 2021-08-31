import React, { useState } from "react";
import "../styles/accordionStyle.css";
import { ArrowIcon } from "../assets/icons";
const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="table">
      <div className="table-title" onClick={() => setIsOpen((s) => !s)}>
        {data.week}
        <div className={isOpen ? "arrow arrow-down" : "arrow"}>
          <ArrowIcon />
        </div>
      </div>
      <div
        key={data.week}
        className="table-contents"
        style={{
          height: isOpen ? `${data.tests * 28}px` : "0",
          overflowY: "hidden",
        }}
      >
        {Array(data.tests)
          .fill()
          .map((_, idx) => (
            <span className="table-item" key={idx}>
              List item
            </span>
          ))}
      </div>
    </div>
  );
};

export default Accordion;
