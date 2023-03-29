import { LabeledInput } from "./Shared";

export interface ToggleInputProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  divClassName?: string;
  className?: string;
}

export const ToggleInput: React.FC<ToggleInputProps> = ({
  label,
  value,
  onChange,
  divClassName,
  className,
}) => {
  return (
    <LabeledInput label={label} className={divClassName}>
      <div className={className}>
        <div
          className={`${
            value ? "bg-primary3 flex-row-reverse" : "bg-background3 flex-row"
          } w-10 h-5 rounded-full p-1 cursor-pointer flex items-center`}
          onClick={() => onChange(!value)}
        >
          <div className={`bg-content2 w-4 h-4 rounded-full`} />
        </div>
      </div>
    </LabeledInput>
  );
};
