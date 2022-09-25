import React from "react";

function ListView(props) {
  const { items } = props;

  const listing = items.map((item, i) => {
    return (
      <div className="item" key={i}>
        <div className="item-image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="item-details">
          <p className="item-title">{item.name}</p>
          <p className="item-price">{item.price}</p>
        </div>
      </div>
    );
  });

  return <div className="item-list">{listing}</div>;
}

export default ListView;
