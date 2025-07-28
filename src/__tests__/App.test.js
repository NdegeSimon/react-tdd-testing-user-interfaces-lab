// src/__tests__/App.test.js
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Portfolio Component", () => {
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with alt text", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt");
    expect(image.alt).not.toBe("");
  });

  test("displays a second-level heading with text 'About Me'", () => {
    render(<App />);
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a paragraph with biography text", () => {
    render(<App />);
    const bio = screen.getByText(/biography/i, { exact: false });
    expect(bio).toBeInTheDocument();
    expect(bio.tagName).toBe("P");
  });

  test("displays GitHub link with correct href", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
  });

  test("displays LinkedIn link with correct href", () => {
    render(<App />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
  });
});