import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/user name/i);
  const emailInput = screen.getByPlaceholderText(/email address/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);
  const interestOne = screen.getByRole("checkbox", { name: /interest one/i });
  const interestTwo = screen.getByRole("checkbox", { name: /interest two/i });
  const interestThree = screen.getByRole("checkbox", {
    name: /interest three/i,
  });

  expect(interestOne).toBeInTheDocument();
  expect(interestTwo).toBeInTheDocument();
  expect(interestThree).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />);
  const interestOne = screen.getByRole("checkbox", { name: /interest one/i });
  const interestTwo = screen.getByRole("checkbox", { name: /interest two/i });
  const interestThree = screen.getByRole("checkbox", {
    name: /interest three/i,
  });

  expect(interestOne).not.toBeChecked();
  expect(interestTwo).not.toBeChecked();
  expect(interestThree).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);
  const nameText = screen.getByLabelText(/user name/i);
  const emailText = screen.getByLabelText(/email address/i);

  userEvent.type(nameText, "christian mugalo");
  expect(nameText).toHaveValue("christian mugalo");

  userEvent.type(emailText, "christian.mugalo@gmail.com");
  expect(emailText).toHaveValue("christian.mugalo@gmail.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
});
