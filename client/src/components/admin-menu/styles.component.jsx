import styled from "styled-components";

const Menu = styled.div.withConfig({
  // !solve error (styled-components: it looks like an unknown prop "isopen" is being sent through to the DOM, which will likely trigger a React console error.)
  shouldForwardProp: (prop) => prop !== "isopen",
})`
  transition: all 0.2s;
  background-color: white;
  width: ${(props) => (props.isopen ? "23%" : null)};
  height: 85vh;
  padding: 30px 5px;
  margin: 14px 10px;
  border-radius: 10px;
  position: relative;

  .menu_icon {
    position: absolute;
    font-size: 1.7rem;
    top: 6px;
    right: 9px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #9b4e5b;
    }
  }
`;

export default Menu;
