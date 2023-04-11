import Layout from "@/components/layout/Layout";
import { MultiProvider } from "@/components/MultiProvider";
import "@/index.css";
import { ReaderProvider } from "@/providers/readerProvider";
import { ReaderSettingsProvider } from "@/providers/readerSettingsProvider";
import { UserSettingsProvider } from "@/providers/userSettingsProvider";
import { VoicesProvider } from "@/providers/voicesProvider";
import { StrictMode } from "react";
import { Outlet, RouterProvider, RouterProviderProps } from "react-router-dom";

export function Main() {
  return (
    <MultiProvider
      providers={[
        ReaderProvider,
        ReaderSettingsProvider,
        UserSettingsProvider,
        VoicesProvider,
      ]}
    >
      <Layout>
        <Outlet />
      </Layout>
    </MultiProvider>
  );
}

export type RootProps = {
  router: RouterProviderProps["router"];
};

export const Root: React.FC<RootProps> = ({ router }) => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
