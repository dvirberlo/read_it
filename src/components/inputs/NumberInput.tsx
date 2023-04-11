import { useEffect, useRef } from "react";
import { LabeledInput } from "./Shared";

interface NumberSettingProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  divClassName?: string;
  className?: string;
}

export const NumberInput: React.FC<NumberSettingProps> = ({
  label,
  value,
  onChange,
  divClassName,
  className,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const id = useRef(Math.random().toString(36).slice(2, 9));

  useEffect(() => {
    if (input.current) input.current.value = value.toString();
  }, [value]);

  return (
    <LabeledInput label={label} className={divClassName} htmlFor={id.current}>
      <input
        className={className}
        type="number"
        ref={input}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) onChange(value);
        }}
        id={id.current}
      />
    </LabeledInput>
  );
};
