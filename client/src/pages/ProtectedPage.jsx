import { Context } from "contexts/AppContexts";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const ProtectedPage = ({ children }) => {
  const { user } = useContext(Context);
  console.log(user._id, user.role);
  if (!user || !user._id || !user.role) {
    return <Navigate to="/auth" />;
  }
  return children;
};
export default ProtectedPage;
