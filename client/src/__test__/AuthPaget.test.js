import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Auth } from "pages";
import { Provider, Context } from "contexts/AppContexts";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

afterEach(cleanup);
describe("Test Auth Paget", () => {
  const AuthSetUp = () => {
    render(
      <Provider value={{ signup: false }}>
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </Provider>
    );
  };
  const Signup = () => {
    const changeColor = jest.fn();
    const signUpUser = jest.fn();
    const submitAuth = jest.fn();
    render(
      <Context.Provider
        value={{ signup: true, changeColor, signUpUser, submitAuth }}
      >
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </Context.Provider>
    );
  };

  test("should correct render Auth Page without crash", () => {
    AuthSetUp();
    expect(screen).toBeDefined();
  });

  test("should correct render Login", () => {
    AuthSetUp();
    const link = screen.getByTestId("text-content");
    const input = screen.getAllByTestId("input");
    expect(screen.getByRole("heading")).toHaveTextContent("login");
    expect(link).toHaveTextContent("signup");
    expect(input).toHaveLength(2);
  });

  test("should correct render Signup", () => {
    Signup();
    const link = screen.getByTestId("text-content");
    const input = screen.getAllByTestId("input");
    expect(screen.getByRole("heading")).toHaveTextContent("signup");
    expect(link).toHaveTextContent("login");
    expect(input).toHaveLength(4);
  });

  test("snapshot Auth Page", () => {
    const tree = renderer
      .create(
        <Provider value={{ signup: false }}>
          <MemoryRouter>
            <Auth />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
