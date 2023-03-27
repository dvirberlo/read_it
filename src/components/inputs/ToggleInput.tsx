import { LabeledInput } from "./Shared";

export function ToggleSetting({
  label,
  value,
  onChange,
  divClassName,
  className,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  divClassName?: string;
  className?: string;
}) {
  return (
    <LabeledInput label={label} className={divClassName}>
      <input
        className={className}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </LabeledInput>
  );
}
