interface ThemeIconProps {
  className?: string;
  onClick?: () => void;
}

export const ThemeIcon: React.FC<ThemeIconProps> = ({ className, onClick }) => {
  return (
    <i
      className={`inline-block items-baseline themeIcon ${className}`}
      onClick={onClick}
    />
  );
};
