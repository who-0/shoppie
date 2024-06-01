import Btn from "./styles.component";

const Button = ({ type, name, func = null }) => {
  return (
    <Btn type={type} onClick={func}>
      {name}
    </Btn>
  );
};
export default Button;
