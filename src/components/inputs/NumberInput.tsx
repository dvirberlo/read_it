import { useEffect, useRef } from "react";
import { LabeledInput } from "./Shared";

interface NumberSettingProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  divClassName?: string;
  className?: string;
}

export const NumberSetting: React.FC<NumberSettingProps> = ({
  label,
  value,
  onChange,
  divClassName,
  className,
}) => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) input.current.value = value.toString();
  }, [value]);

  return (
    <LabeledInput label={label} className={divClassName}>
      <input
        className={className}
        type="number"
        ref={input}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) onChange(value);
        }}
      />
    </LabeledInput>
  );
};
