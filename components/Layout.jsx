import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
