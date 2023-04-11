import { render, screen } from "@testing-library/react";
import { LabeledInput, LabeledInputProps } from "./Shared";

describe("LabeledInput", () => {
  const childProps = { id: "test-input" };
  const defaultProps: LabeledInputProps = {
    label: "Test Label",
    children: <input {...childProps} />,
    className: "test-class",
    htmlFor: "test-input",
  };

  it("renders label and children with correct props", () => {
    render(<LabeledInput {...defaultProps} />);
    const label = screen.getByText(defaultProps.label);
    const child = screen.getByLabelText(defaultProps.label);

    expect(label.getAttribute("for")).toBe(defaultProps.htmlFor);
    expect(child.getAttribute("id")).toBe(childProps.id);
  });
});
