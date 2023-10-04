import ProductCard from "../product-card/ProductCard.component";
import Wrapper from "./styles.component";
import {Context} from "contexts/AppContexts";
import {useContext} from "react";

const ProductsContainer = ({ products }) => {
  const {categories,getCategoryByName} = useContext(Context);



  // const splitCategories = () => {
  //   categories.forEach( async category => {
  //     const product = await getCategoryByName(category)
  //     console.log(product)
  //   } )

  // }
  // splitCategories()



  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Wrapper>
  );
};
export default ProductsContainer;
