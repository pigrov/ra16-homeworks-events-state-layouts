function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <span onClick={onSwitch} className="clickable material-icons">
      {icon}
    </span>
  );
}

export default IconSwitch;
