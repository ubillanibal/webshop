import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} - webshop by Anibal Ubilla.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
