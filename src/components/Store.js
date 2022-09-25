import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store(props) {
  const [icon, setIcon] = React.useState("view_list");
  const { products } = props;
  const onSwitch = (icon) => {
    setIcon(icon);
  };
  console.log(products);

  return (
    <div>
      <IconSwitch
        icon={icon}
        onSwitch={() => {
          onSwitch(icon === "view_list" ? "view_module" : "view_list");
        }}
      />
      {icon === "view_list" ? (
        <CardsView items={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}

export default Store;
