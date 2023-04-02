import { Fragment } from "react";

import Layout from "../Layout/Layout";

import classes from "../../style/Welcome_Plans.module.css";

const Pricing_Checkmark_black_Path =
  "/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg";

const Plans = () => {
  return (
    <Fragment>
      <section
        id="hulupPlans--SECTION"
        className={classes["hulupPlans--SECTION"]}
      >
        <Layout>
          <div className={classes["huluPlans_content--CONTAINER"]}>
            <div className={classes["huluPlans_header--CONTAINER"]}>
              <h2 className="section_title--EL">Select Your Plan</h2>
                          <p className={classes["huluPlans_description--EL"]}>
                <b>Switch plans or cancel anytime.^^</b>
              </p>
            </div>

            <div className={classes["huluPlans_table--WRAPPER"]}>
              <table>
                <thead>
                  <tr>
                    <th className={classes["huluPlan_rowStarter--EL"]}>
                      <div
                        className={classes["huluPlans_rowHeader--CONTAINER"]}
                                          >
                      </div>
                    </th>
                    <th
                      scope="col"
                      className={classes["huluPlan_tableColumn_header--EL"]}
                    >
                      <div className={classes["planHeader_layoutFixer--EL"]}>
                        <div className={classes["plan_header--EL"]}>
                          <span className={classes["planPopularity--EL"]}>
                            Most Popular
                          </span>
                          <span className={classes["plan_header_eyebrow--EL"]}>
                                                      Always Free
                          </span>
                          <h4 className={classes["plan_header_title--EL"]}>
                                                      Freemium
                          </h4>
                          <button
                            type="button"
                            className={classes["plan_cta_btn--EL"]}
                          >
                            select
                          </button>
                        </div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className={classes["huluPlan_tableColumn_header--EL"]}
                    >
                      <div className={classes["planHeader_layoutFixer--EL"]}>
                        <div className={classes["plan_header--EL"]}>
                          <span className={classes["plan_header_eyebrow--EL"]}>
                            30 DAY FREE TRIAL
                          </span>
                          <h4 className={classes["plan_header_title--EL"]}>
                                                      Pro
                          </h4>
                          <button
                            type="button"
                            className={classes["plan_cta_btn--EL"]}
                          >
                            select
                          </button>
                        </div>
                      </div>
                                      </th>
                  </tr>
                </thead>

                <tbody>
                                  <tr>
                                      <th scope="row">Monthly price</th>
                                      <td>Rs.0/mo</td>
                                      <td>Rs.199/mo</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">Discussion Forum</th>
                                      <td>Yes</td>
                                      <td>Yes</td>
                                  </tr>
                  <tr>
                                      <th scope="row">
                                          Personalized Recommendations
                                      </th>
                                      <td>Yes</td>
                                      <td>Yes</td>
                                  </tr>

                  <tr>
                                      <th scope="row">
                                          Access to Creator's Library
                                          <p
                                              style={{
                                                  fontWeight: 400
                                              }}
                                          >
                                              This includes Notes, Announcements, Assignments, Blogs, Doubt Section
                                          </p>
                                      </th>
                                      <td>Yes</td>
                                      <td>Yes</td>
                                  </tr>
                  <tr>
                                      <th scope="row">Live Calendar</th>
                                      <td>No</td>
                                      <td>Yes</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">Ad Free</th>
                                      <td>No</td>
                                      <td>Yes</td>
                                  </tr>

                  <tr>
                                      <th scope="row">Live Chat Support*</th>
                                      <td>No</td>
                                      <td>Yes</td>
                                  </tr>
                  <tr>
                                      <th scope="row">
                                          Private Classes with Live Collaboration
                                      </th>
                                      <td>No</td>
                                      <td>Yes</td>
                                  </tr>
                              </tbody>
                              <tfoot>
                                  <tr>
                                      <td>
                                          <div
                                              className={classes["table_disclaimer_content--WRAPPER"]}
                                          >
                                              <span>
                                                  *Features require creator's to enable the access. This might be limited!
                                              </span>
                                          </div>
                                      </td>
                                  </tr>
                              </tfoot>
              </table>
            </div>
          </div>
        </Layout>
      </section>
    </Fragment>
  );
};

export default Plans;
