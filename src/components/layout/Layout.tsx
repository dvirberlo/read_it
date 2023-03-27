import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-auto h-screen w-screen bg-background2 text-content1 ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
