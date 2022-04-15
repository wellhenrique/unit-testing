import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import "../src/test/setup";

describe("App component", () => {
  it("should render list items", () => {
    render(<App />);
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Peapple")).toBeInTheDocument();
    expect(screen.getByText("Pear")).toBeInTheDocument();
    expect(screen.getByText("Grape")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    render(<App />);
    const buttonAdd = screen.getByText("Add");
    const inputElement = screen.getByPlaceholderText("New Item");

    fireEvent.change(inputElement, { target: { value: "Guava" } });
    fireEvent.click(buttonAdd);
    // const Guava = await screen.findByText("Guava");
    await waitFor(() => {
      expect(screen.getByText("Guava")).toBeInTheDocument();
    });
  });

  it("should be able to add remove item to the list", async () => {
    render(<App data-testid="test-id" />);
    const buttonRemove = screen.getAllByText("Remove");

    fireEvent.click(buttonRemove[0]);
    const app = screen.queryByTestId("test-id");
    await waitFor(() => {
      // eslint-disable-next-line testing-library/prefer-presence-queries
      expect(app).not.stoHaveTextContent("Banana")!;
    });
  });
});
