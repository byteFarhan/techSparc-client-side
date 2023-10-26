import useAuth from "../../hooks/useAuth";

const Footer = () => {
  const { darkMode } = useAuth();
  return (
    <>
      <footer
        className={`p-20  footer ${
          darkMode ? "bg-slate-900 text-slate-300" : "bg-base-200"
        } text-base-content`}
      >
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className={`label-text" ${darkMode && "text-slate-300"}`}>
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className={`w-full pr-16 input input-bordered ${
                  darkMode && "bg-slate-300 text-black"
                }`}
              />
              <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
};

export default Footer;
