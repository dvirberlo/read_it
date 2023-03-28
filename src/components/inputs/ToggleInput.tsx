import { LabeledInput } from "./Shared";

export interface ToggleSettingProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  divClassName?: string;
  className?: string;
}

export const ToggleSetting: React.FC<ToggleSettingProps> = ({
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
            value ? "bg-primary1" : "bg-background3"
          } w-10 h-5 rounded-full p-1 cursor-pointer flex flex-row items-center`}
          onClick={() => onChange(!value)}
        >
          <div
            className={`${
              value ? "translate-x-5" : "translate-x-0"
            } bg-content1 w-4 h-4 rounded-full transition-transform`}
          />
        </div>
      </div>
    </LabeledInput>
  );
};
