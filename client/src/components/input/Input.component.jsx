import InputCS from "./styles.component";

const Input = ({ type, name, value, handleChange, text }) => {
  return (
    <InputCS
      type={type}
      name={name}
      id={name}
      placeholder={text}
      value={value}
      onChange={handleChange}
    />
  );
};
export default Input;
