/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import App from "App";
import { Provider } from "../src/contexts/AppConte";

test("should render without crash", () => {
  render(
    <Provider>
      <App />
    </Provider>
  );
});
