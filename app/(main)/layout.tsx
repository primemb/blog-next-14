import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full min-h-full dark:bg-[#1F1F1F] bg-gray-100 ">
      <Navbar />
      <main className="h-full flex-1 w-full px-2 xl:px-60">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
