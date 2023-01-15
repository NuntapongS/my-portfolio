import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social">
          <a
            href="https://www.facebook.com/bloodzlu5t/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a href="twitter.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter fa-2xl"></i>
          </a>
          <a
            href="https://github.com/NuntapongS"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/nuntapong.sr/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a
            href="mailto:nuntapong.sr@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
