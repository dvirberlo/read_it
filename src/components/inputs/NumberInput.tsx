import { useEffect, useRef } from "react";
import { LabeledInput } from "./Shared";

export function NumberSetting({
  label,
  value,
  onChange,
  divClassName,
  className,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  divClassName?: string;
  className?: string;
}) {
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
}
