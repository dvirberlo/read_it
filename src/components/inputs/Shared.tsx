export function LabeledInput({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mr-2">{label}</label>
      {children}
    </div>
  );
}
