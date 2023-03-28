export interface LabeledInputProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={className}>
      <label className="mr-2">{label}</label>
      {children}
    </div>
  );
};
