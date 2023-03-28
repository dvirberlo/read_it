import { useEffect, useRef } from "react";
import { LabeledInput } from "./Shared";

export interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  divClassName?: string;
  className?: string;
  defaultValue?: number;
  integer?: boolean;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  divClassName,
  className,
  defaultValue,
  integer = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = value.toString();
  }, [value]);
  return (
    <LabeledInput label={label} className={divClassName}>
      <input
        className={className}
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={(e) => {
          const value = integer
            ? parseInt(e.target.value)
            : parseFloat(e.target.value);
          if (!isNaN(value)) onChange(value);
        }}
      />
    </LabeledInput>
  );
};
