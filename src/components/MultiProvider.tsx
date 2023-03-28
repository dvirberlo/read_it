export type Provider = ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element;

export interface MultiProviderProps {
  providers: Provider[];
  children: React.ReactNode;
}

export const MultiProvider: React.FC<MultiProviderProps> = ({
  providers,
  children,
}) => {
  let rootProvider = children;
  for (let i = providers.length - 1; i >= 0; i--) {
    const Provider = providers[i];
    rootProvider = <Provider>{rootProvider}</Provider>;
  }
  return rootProvider as JSX.Element;
};
