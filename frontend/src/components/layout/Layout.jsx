import Navbar from "./Navbar";
import Footer from "./Footer";
//import styles from "./Layout.module.css";
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="appContainer">
      <Navbar />
      <main className="mainContent">{children}</main>
      <Footer />
    </div>
  );
}