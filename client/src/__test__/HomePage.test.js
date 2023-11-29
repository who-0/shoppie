import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "pages";
import { Provider } from "contexts/AppContexts";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { Content, Images } from "components";

afterEach(cleanup);
describe("Test <Home /> render", () => {
  const homeSetup = () =>
    render(
      <Provider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

  const ContentComponent = () =>
    render(
      <Provider>
        <MemoryRouter>
          <Content />
        </MemoryRouter>
      </Provider>
    );

  const ImagesComponent = () =>
    render(
      <Provider>
        <MemoryRouter>
          <Images />
        </MemoryRouter>
      </Provider>
    );

  test("should render HOME page without crash", () => {
    homeSetup();
    expect(screen).toBeDefined();
  });

  test("should render Contet component", () => {
    ContentComponent();
    const text = screen.getByTestId("text-content");
    expect(text).toHaveTextContent(
      /Make every purchase a delightful experience with/
    );
  });

  test("should render SVG image from Image component", () => {
    ImagesComponent();
    const SVG = screen.getAllByTestId("svg-img");
    expect(SVG).toHaveLength(4);
  });

  test("snapshot Home page", () => {
    const tree = renderer
      .create(
        <Provider>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
