import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Modal from "../components/Ui/Modal";
import Navbar from "../components/Ui/Navbar";
import Plans from "../components/Ui/Plans";
import Footer from "../components/Ui/Footer";

import classes from "../style/Welcome.module.css";



export default function Welcome({ users }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeChannelsCategory, setActiveChannelsCategory] = useState(0);

  const displayModal__FUNC = (openModal) => {
    setDisplayModal(openModal);
  };

  const changeModalState__FUNC = (e, modalContentState, openModal) => {
    e.preventDefault();

    setModalContent(modalContentState);
    displayModal__FUNC(openModal);
  };

  const changeChannelsCategory__FUNC = (e, categoryNum) => {
    e.preventDefault();

    const clickedTapLink = e.target;

    const channelsTap_LinksArr =
      clickedTapLink.parentElement.querySelectorAll("a");
    channelsTap_LinksArr.forEach((tapLinkEl) =>
      tapLinkEl.classList.remove(classes["activeTap"])
    );

    clickedTapLink.classList.add(classes["activeTap"]);

    setActiveChannelsCategory(categoryNum);
  };

  useEffect(() => {
    if (displayModal) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [displayModal]);

  return (
    <Fragment>
      <Head>
        <title>Stream TV and movies Live and Online | Hulu</title>
      </Head>
      <main className={`${classes["main_welcomePage--EL"]}`}>
        {!!modalContent && displayModal && (
          <Modal
            modalContent={modalContent}
            closeModalHandler={changeModalState__FUNC}
            usersAccounts={users}
          />
        )}
        <header className={classes["welcome_header--EL"]}>
          <div className={classes["welcome_header_content--WRAPPER"]}>
            <Navbar changeModalStateHandler={changeModalState__FUNC} />
            <div className={classes["header_content--CONTAINER"]}>
              <div className={classes["header_content--EL"]}>
                <span className="section_eyebrow--EL">
                                  Study without Distractions
                </span>


                <p className={classes["header-text"]}>
                                  Focus on what matters, Set your Goals, Find everything at one place
                </p>

                <div className={classes["header_ctas--WRAPPER"]}>
                                  <button type="button">Sign Up</button>
                  <span className={classes["SUBFEATURESandTERMS--CONTAINER"]}>
                    <a
                                          href="javascript:void(0)"
                    >
                      What's includes
                    </a>{" "}
                    See <Link href="javascript:void(0)">Bundle terms</Link>.
                  </span>
                                  {/* <Link href="/signup/plans">Sign up for Hulu only</Link> */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="plansFeatures--SECTION"
          className={classes["plansFeatures--SECTION"]}
        >
          <Layout>
            <div className={classes["plansFeaturesSection_content--CONTAINER"]}>
              <div className={classes["plansFeaturesSection_typos--WRAPPER"]}>
                <span className="section_eyebrow--EL">
                  INCLUDED IN ALL PLANS
                </span>
                              <h2 className="section_title--EL">All The Content You Love</h2>
                              <p className="section_paragraph--EL">
                                  Study without any Distractions, Set Goals, Focus on Priorities.
                              </p>
                              <p className="section_paragraph--ELSMALL">
                                  Find chapters, notes, announcements, assignments, blogs, support and many more. 
                </p>
              </div>

              <div
                className={classes["plansFeaturesSection_features--CONTAINER"]}
              >
                <button
                  style={{
                    background:
                                          'url("/c1.jpg") center',
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",
                  }}
                  className={`${classes["plansFeatureCard--EL"]} ${classes["tvShows_FeatureCard"]}`}
                              >
                </button>
                <button
                  style={{
                    background:
                                          'url("/c2.jpg") center',
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",

                  }}
                                  className={`${classes["plansFeatureCard--EL"]} ${classes["tvShows_FeatureCard"]}`}
                              >
                </button>
                <button
                  style={{
                    background:
                                          'url("/c3.jpg") center',
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",

                  }}
                                  className={`${classes["plansFeatureCard--EL"]} ${classes["tvShows_FeatureCard"]}`}
                              >
                </button>
                <button
                  style={{
                    background:
                                          'url("/c4.jpg") center',
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",

                  }}
                                  className={`${classes["plansFeatureCard--EL"]} ${classes["tvShows_FeatureCard"]}`}
                              >
                </button>
              </div>
            </div>
          </Layout>
        </section>

        <section
          id="billboard--SECTION"
          className={classes["billboard--SECTION"]}
        >
          <Layout biggerspacing={true}>
            <div className={classes["billboard_content--CONTAINER"]}>
              <div className={classes["billboard_content_header--WRAPPER"]}>
                <span className="section_eyebrow--EL">
                                  Youtube but only for Education
                </span>
                              <h2 className="section_title--EL">Curation makes it Better</h2>
                <p className="section_paragraph--EL">

                </p>
              </div>

              <div className={classes["billboard_content_footer--WRAPPER"]}>
                <span className={classes["Billboard_disclaimer--EL"]}>
                                  We collect your data after your agreement{" "}
                                  For personalized recommendations of videos based on your interest.{" "}
                </span>
                <a
                                  href="javascript:void(0)"
                  className={classes["Billboard_modalLink--EL"]}
                >
                                  View top Creators &#8594;
                </a>
                <a
                  href="#channels--SECTION"
                  className={classes["downScrollBtn--EL"]}
                >
                  <img
                    src="/assets/welcomePage-assets/icons/down-arrow.svg"
                    alt="down arrow"
                  />
                </a>
              </div>
            </div>
          </Layout>
        </section>

        <section
          id="channels--SECTION"
          className={`${classes["channels--SECTION"]} ${
            !activeChannelsCategory
              ? classes["liveSports_channel"]
              : activeChannelsCategory === 1
              ? classes["breakingNews_channel"]
              : classes["biggestEvents_channel"]
          }`}
        >
          <Layout biggerspacing={true}>
            <div className={classes["channelsSection_content--CONTAINER"]}>
                          <div className={classes["channelsTapLinks_Block--CONTAINER"]}>
                <div className={classes["channel_activeTap--EL"]}>
                  <span className={classes["channel_activeTap_bar--EL"]}></span>
                </div>
                          </div>
            </div>
          </Layout>
        </section>

        <Plans />

        <Footer />
      </main>
    </Fragment>
  );
}
