import { useContext, useEffect } from "react";
import { Products } from "./styles.admin"
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { ADMIN_PRODUCTS } from "contexts/actions";
import { AdminProductsHeader, ProductsContainer,ProductBtn } from "components";



const body = document.body;

const AdminProducts = () => {
  const { color, changeColor,products,getAllProducts,skip,limit,total,changePageByAdmin } = useContext(Context);

  // console.log(skip,limit,total);

  useEffect(() => {
    if (color !== colors.home_color) {
      changeColor(ADMIN_PRODUCTS);
    } else {
      body.style.background = color;
    }
    getAllProducts()
    // eslint-disable-next-line
  }, [color,skip]);

  const backHandle = () => {
    if(skip !== 0) {
    const page = skip - limit
      changePageByAdmin(page)
    }
    else {
      console.log('back end');
    };
  }
  const nextHandle = () => {
    if(skip !== 80) {
      const page = skip + limit
        changePageByAdmin(page)
      }
    else {
      console.log('next end');
    };
  }


  return (
    <Products>
      <AdminProductsHeader />
      <ProductsContainer products={products} />
      <div className="icon">
        <div onClick={backHandle}>&lt; </div>
        <div onClick={nextHandle}>&gt;</div>
      </div>
    </Products>
  )
}
export default AdminProducts