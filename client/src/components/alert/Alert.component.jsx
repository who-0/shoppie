import { useContext } from "react";
import Wrapper from "./styles.component";
import { Context } from "../../contexts/AppContexts";

const Alert = () => {
  const { alert_msg, alert_type } = useContext(Context);
  return <Wrapper $alert_type={alert_type}>{alert_msg}</Wrapper>;
};
export default Alert;
