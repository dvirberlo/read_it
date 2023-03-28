export interface LabeledInputProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  children,
  className,
  htmlFor,
}) => {
  return (
    <div className={className}>
      <label className="mr-2" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};
