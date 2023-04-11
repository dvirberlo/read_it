import { fireEvent, render } from "@testing-library/react";
import { NumberInput } from "./NumberInput";

describe("NumberSetting", () => {
  it("should display the correct label and value", () => {
    const label = "Test Label";
    const value = 5;

    const { getByLabelText } = render(
      <NumberInput label={label} value={value} onChange={() => {}} />
    );

    const input = getByLabelText(label) as HTMLInputElement;

    expect(input).toBeDefined();
    expect(input.value).toBe(value.toString());
  });

  it("should call onChange when input value changes", () => {
    const label = "Test Label";
    const value = 5;
    const newValue = 10;
    const onChange = vi.fn();

    const { getByLabelText } = render(
      <NumberInput label={label} value={value} onChange={onChange} />
    );

    const input = getByLabelText(label) as HTMLInputElement;

    expect(input).toBeDefined();

    fireEvent.change(input, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it("should not call onChange when input value is not a number", () => {
    const label = "Test Label";
    const value = 5;
    const newValue = "not a number";
    const onChange = vi.fn();

    const { getByLabelText } = render(
      <NumberInput label={label} value={value} onChange={onChange} />
    );

    const input = getByLabelText(label) as HTMLInputElement;

    expect(input).toBeDefined();

    fireEvent.change(input, { target: { value: newValue } });

    expect(onChange).not.toHaveBeenCalled();
  });
});
