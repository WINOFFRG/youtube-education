import Layout from "../Layout/Layout";

import classes from "../../style/Footer.module.css";

const Footer = () => {
  const changeFooterContentColumnState__FUNC = (e) => {
    const currentFooterContentColumnState =
      e.target.getAttribute("aria-expanded");

    currentFooterContentColumnState === "false"
      ? e.target.setAttribute("aria-expanded", "true")
      : e.target.setAttribute("aria-expanded", "false");
  };
  return (
    <footer
      id="welcomePage_footer--EL"
      className={classes["welcomePage_footer--EL"]}
    >
      <Layout>
        <div
          className={`f-start-between ${classes["welcomePage_footer_content--CONTAINER"]}`}
        >
          <div
            className={`${classes["footer_contentColumn--CONTAINER"]} ${classes["browseHuluNetworks_contentColumn--EL"]}`}
          >
            <h5 className={classes["footer_contentColumn_title--EL"]}>
              browse
            </h5>
            <span
              onClick={changeFooterContentColumnState__FUNC}
              role="button"
              aria-expanded="false"
              className={classes["footer_contentColumn_title--EL"]}
            >
              browse
            </span>
            <div
              className={`f-start-between ${classes["footer_column_content--CONTAINER"]}`}
            >
              <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                <li>
                                  <a href="#">Home</a>
                </li>
                <li>
                                  <a href="#">Discover</a>
                </li>
                <li>
                                  <a href="#">Goals</a>
                </li>
                <li>
                                  <a href="#">Subscribed</a>
                </li>
              </ul>
              <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                <li>
                                  <a href="#">Recent</a>
                </li>
                <li>
                                  <a href="#">Top Rated</a>
                </li>
                <li>
                                  <a href="#">Downloaded</a>
                </li>
                <li>
                                  <a href="#">Playlists</a>
                </li>
                <li>
                                  <a href="#">Watchlist</a>
                </li>
                <li>
                                  <a href="#">Completed</a>
                </li>
              </ul>
              <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                <li>
                                  <a href="#">Notes</a>
                </li>
                <li>
                                  <a href="#">Announcements</a>
                </li>
                <li>
                                  <a href="#">Blogs</a>
                </li>
                <li>
                                  <a href="#">Doubt Section</a>
                </li>
              </ul>
                          <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
              </ul>
            </div>
          </div>
          <div className={classes["footer_contentColumn--CONTAINER"]}>
            <h5 className={classes["footer_contentColumn_title--EL"]}>help</h5>
            <span
              onClick={changeFooterContentColumnState__FUNC}
              role="button"
              aria-expanded="false"
              className={classes["footer_contentColumn_title--EL"]}
            >
              help
            </span>
            <div className={classes["footer_column_linksGrid--CONTAINER"]}>
              <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                <li>
                  <a href="#">Account & billing</a>
                </li>
                <li>
                  <a href="#">plans & pricing</a>
                </li>
                <li>
                  <a href="#">supported devices</a>
                </li>
                <li>
                  <a href="#">accessibility</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["footer_contentColumn--CONTAINER"]}>
            <h5 className={classes["footer_contentColumn_title--EL"]}>
              about us
            </h5>
            <span
              onClick={changeFooterContentColumnState__FUNC}
              role="button"
              aria-expanded="false"
              className={classes["footer_contentColumn_title--EL"]}
            >
              about us
            </span>
            <div className={classes["footer_column_linksGrid--CONTAINER"]}>
              <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                <li>
                                  <a href="#">Creator's Panel</a>
                </li>
                <li>
                                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes["footer_socialMedia_link--CONTAINER"]}>
          <ul>
            <li>
                          <a href="#">
                <img
                                  src="/assets/welcomePage-assets/icons/twitter.svg"
                />
              </a>
            </li>
            <li>
                          <a href="#">
                <img
                                  src="/assets/welcomePage-assets/icons/facebook.svg"
                />
              </a>
            </li>
            <li>
                          <a href="#">
                <img
                                  src="/assets/welcomePage-assets/icons/youtube.svg"
                />
              </a>
            </li>
            <li>
                          <a href="#">
                <img
                                  src="/assets/welcomePage-assets/icons/instagram.svg"
                />
              </a>
            </li>
          </ul>
        </div>

      </Layout>
    </footer>
  );
};

export default Footer;
