import React from "react";
import { render } from "@testing-library/react";
import App from "App";

test("Should render without crashing", () => {
  render(<App />);
});
