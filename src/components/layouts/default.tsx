import Header from '../Header';
// import Footer from '../Footer';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;