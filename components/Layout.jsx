import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
