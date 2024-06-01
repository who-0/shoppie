import { Link } from "react-router-dom";
import { BtnLogo } from "@assets";
import ContentContainer from "./styles.component.jsx";

const Content = () => {
  return (
    <ContentContainer>
      <h1 data-testid="text-content">
        Make every purchase a delightful experience with
      </h1>
      <Link className="content_btn_cs" to="/shop">
        <BtnLogo className="btn_logo" />
      </Link>
    </ContentContainer>
  );
};
export default Content;
