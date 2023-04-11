import { render, fireEvent } from "@testing-library/react";
import { ToggleInput, ToggleInputProps } from "./ToggleInput";

describe("ToggleInput", () => {
  const onChange = vi.fn();
  const defaultProps: ToggleInputProps = {
    label: "Toggle label",
    value: false,
    onChange,
  };

  beforeEach(() => {
    onChange.mockClear();
  });

  const setup = (props: Partial<ToggleInputProps> = {}) => {
    const mergedProps = { ...defaultProps, ...props };
    return render(<ToggleInput {...mergedProps} />);
  };

  it("should render with the provided props", () => {
    const { getByText, getByRole } = setup();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should call onChange when clicked", () => {
    const { getByRole } = setup();
    fireEvent.click(getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should toggle value when clicked", () => {
    const { getByRole, rerender } = setup();
    expect(getByRole("checkbox").getAttribute("aria-checked")).toBe("false");
    rerender(<ToggleInput {...defaultProps} value />);
    expect(getByRole("checkbox").getAttribute("aria-checked")).toBe("true");
  });
});
