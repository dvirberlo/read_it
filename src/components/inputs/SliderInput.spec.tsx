import { fireEvent, render, screen } from "@testing-library/react";
import { SliderInput } from "./SliderInput";

describe("SliderInput", () => {
  it("should render the label", () => {
    const label = "Test Label";
    render(<SliderInput label={label} value={0} onChange={vi.fn()} />);
    const inputElement = screen.getByLabelText(label);
    expect(inputElement.tagName).toBe("INPUT");
  });

  it("should update the value when input value changes", () => {
    const onChange = vi.fn();
    const value = 50;
    render(
      <SliderInput label="Test Label" value={value} onChange={onChange} />
    );
    const inputElement = screen.getByRole("slider");
    const newValue = 75;
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it("should render integer values only", () => {
    const onChange = vi.fn();
    const value = 50;
    render(
      <SliderInput
        label="Test Label"
        value={value}
        onChange={onChange}
        integer
      />
    );
    const inputElement = screen.getByRole("slider") as HTMLInputElement;
    const newValue = 75.5;
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChange).not.toHaveBeenCalledWith(newValue);
    expect(onChange).toHaveBeenCalledWith(75);
  });
});
