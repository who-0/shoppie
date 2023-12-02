import { useContext, useEffect } from "react";
import { Products } from "./styles.admin"
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { ADMIN_PRODUCTS } from "contexts/actions";
const body = document.body;

const AdminProducts = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== colors.home_color) {
      changeColor(ADMIN_PRODUCTS);
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return (
    <Products>AdminProducts</Products>
  )
}
export default AdminProducts