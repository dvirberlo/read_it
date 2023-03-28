import { LabeledInput } from "./Shared";

interface ChoiceSettingProps {
  label: string;
  values: string[];
  selectedIndex: number;
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

export const ChoiceSetting: React.FC<ChoiceSettingProps> = ({
  label,
  values,
  selectedIndex = 0,
  onChange,
  divClassName,
  optionProps,
  className,
}) => {
  return (
    <LabeledInput label={label} className={divClassName}>
      <select
        className={`${className} rounded-md`}
        value={selectedIndex}
        onChange={(e) => {
          const index = parseInt(e.target.value);
          if (!isNaN(index)) onChange(index);
        }}
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
