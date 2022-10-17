import React, { useState } from "react";

const Accordion = ({ items }) => {
  // activeIndex is to initialize the state we want to use later
  // setActiveIndex is a function that we call when we want to update our state
  // these 2 names are not special (can be changed to anything)
  // initial value is not always null
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    // call the function and set a new value
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
