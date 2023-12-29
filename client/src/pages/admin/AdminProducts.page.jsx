import { useContext, useEffect, useState } from "react";
import { Products } from "./styles.admin";
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { ADMIN_PRODUCTS } from "contexts/actions";
import { ProductsContainer, Search, ProductUpdate } from "components";

const body = document.body;

const AdminProducts = () => {
  const {
    color,
    changeColor,
    products,
    getAllProducts,
    categories,
    skip,
    isCartOpen,
    limit,
    user,
    searchProduct,
    changePageByAdmin,
    isUpdateProduct,
    updateProduct,
    closeUpdate,
    updateProductByAdmin,
  } = useContext(Context);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (color !== colors.home_color) {
      changeColor(ADMIN_PRODUCTS);
    } else {
      body.style.background = color;
    }
    getAllProducts();
    // eslint-disable-next-line
  }, [color, skip]);

  const backHandle = () => {
    if (skip !== 0) {
      const page = skip - limit;
      changePageByAdmin(page);
    }
  };
  const nextHandle = () => {
    if (skip !== 80) {
      const page = skip + limit;
      changePageByAdmin(page);
    }
  };
  const handleChange = (e) => {
    setProductName(e.target.value);

    if (e.target.value.length === 0) {
      getAllProducts();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct(productName);
  };

  return (
    <Products>
      {isUpdateProduct ? (
        <ProductUpdate
          updateProduct={updateProduct}
          closeUpdate={closeUpdate}
          updateProductByAdmin={updateProductByAdmin}
        />
      ) : (
        <>
          <Search
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            productName={productName}
            caterogires={categories}
            user={user}
            isCartOpen={isCartOpen}
            role={user.role}
          />
          <ProductsContainer products={products} role={user.role} />
          <div className="icon">
            <div onClick={backHandle}>&lt; </div>
            <div onClick={nextHandle}>&gt;</div>
          </div>
        </>
      )}
    </Products>
  );
};
export default AdminProducts;
