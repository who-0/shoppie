import { render } from "@testing-library/react";
import App from "App";
import { Provider } from "contexts/AppContexts";

test("should render without crash", () => {
  render(
    <Provider>
      <App />
    </Provider>
  );
});
