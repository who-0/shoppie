import { Link } from "react-router-dom";
import { ReactComponent as BtnLogo } from "../../assets/btn_logo.svg";
import ContentContainer from "./styles.component.jsx";

const Content = () => {
  return (
    <ContentContainer>
      <h1>Make every purchase a delightful experience with</h1>
      <Link className="content_btn_cs" to="/shop">
        <BtnLogo className="btn_logo" />
      </Link>
    </ContentContainer>
  );
};
export default Content;
