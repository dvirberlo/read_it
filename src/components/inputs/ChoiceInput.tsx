import { useRef } from "react";
import { LabeledInput } from "./Shared";

interface ChoiceInputProps {
  label: string;
  values: string[];
  selectedIndex?: number;
  onChange: (index: number) => void;
  divClassName?: string;
  optionProps?: (
    index: number
  ) => React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >;
  className?: string;
}

export const ChoiceInput: React.FC<ChoiceInputProps> = ({
  label,
  values,
  selectedIndex = 0,
  onChange,
  divClassName,
  optionProps,
  className,
}) => {
  const id = useRef(Math.random().toString(36).slice(2, 9));
  return (
    <LabeledInput label={label} className={divClassName} htmlFor={id.current}>
      <select
        className={`${className} rounded-md`}
        value={selectedIndex}
        onChange={(e) => {
          const index = parseInt(e.target.value);
          if (!isNaN(index)) onChange(index);
        }}
        id={id.current}
      >
        {values.map((value, index) => (
          <option key={index} value={index} {...optionProps?.(index)}>
            {value}
          </option>
        ))}
      </select>
    </LabeledInput>
  );
};
