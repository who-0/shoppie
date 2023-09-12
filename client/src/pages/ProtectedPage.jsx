// import { useState } from "react";
// import { Navigate } from "react-router-dom";
const ProtectedPage = ({ children }) => {
  // const [admin, setAdmin] = useState(true);
  // const [loading, setLoading] = useState(false);

  // if (loading) return <div>Loading....</div>;
  // if (!admin) return <Navigate to="/login" />;
  return children;
};
export default ProtectedPage;
