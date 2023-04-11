import { render, screen, fireEvent } from "@testing-library/react";
import { ChoiceInput } from "./ChoiceInput";

describe("ChoiceInput", () => {
  const values = ["Option 1", "Option 2", "Option 3"];
  const label = "Choose an option";
  const onChange = vi.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it("should render correctly with default props", () => {
    render(<ChoiceInput label={label} values={values} onChange={onChange} />);

    const selectElement = screen.getByLabelText(label) as HTMLSelectElement;
    expect(selectElement.value).toBe("0");
    expect(selectElement.children).toHaveLength(values.length);

    values.forEach((value, index) => {
      expect(selectElement.children[index].textContent).toBe(value);
    });
  });

  it("should render correctly with custom props", () => {
    const divClassName = "my-div-class";
    const className = "my-select-class";

    render(
      <ChoiceInput
        label={label}
        values={values}
        selectedIndex={2}
        onChange={onChange}
        divClassName={divClassName}
        className={className}
      />
    );

    const selectElement = screen.getByLabelText(label) as HTMLSelectElement;
    expect(selectElement.value).toBe("2");
    expect(selectElement.className).toContain(className);
    expect(selectElement.parentElement!.className).toContain(divClassName);
    expect(selectElement.children).toHaveLength(values.length);

    values.forEach((value, index) => {
      const optionElement = selectElement.children[index] as HTMLOptionElement;
      expect(optionElement.textContent).toBe(value);
    });
  });

  it("should call onChange when a new option is selected", () => {
    render(<ChoiceInput label={label} values={values} onChange={onChange} />);

    const selectElement = screen.getByLabelText(label) as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: "1" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("should not call onChange when an invalid option is selected", () => {
    render(<ChoiceInput label={label} values={values} onChange={onChange} />);

    const selectElement = screen.getByLabelText(label) as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: "invalid" } });

    expect(onChange).not.toHaveBeenCalled();
  });
});
