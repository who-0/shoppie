import InputCS from "./styles.component";

const Input = ({ type, name, value, handleChange, text, type }) => {
  return (
    <InputCS
      type={type}
      name={name}
      id={name}
      placeholder={text}
      value={value}
      onChange={handleChange}
      data-testid="input"
      $type
    />
  );
};
export default Input;
