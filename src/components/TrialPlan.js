import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import Payments from './Payments';
import '../style/trialplan.css';

const TrialPlan = () => (
  <>
    <header className="header">
      <Header />
    </header>
    <main className="main">
      <div className="main-container">
        <h1 className="main-wrapper-h1">
        Your profile is ready. Get your personalized cover letter now for less
        than the price of a cup of coffee and improve your career.
        </h1>
        <div className="main-wrapper_cards">
          <div className="main-wrapper_trial">
            <div className="trial-plan">
              <div className="trial-plan_header">
                <p className="trial-plan_text">LIMITED SUMMER OFFER</p>
                <p className="trial-plan_text2">02d : 24h : 55m</p>
              </div>
              <div className="trial-plan_body">
                <img alt="logo" className="trial-plan_logo" />
                <div className="trial-plan_main">
                  <p className="plan_main-trial">Trial</p>
                  <span className="plan_main-text-wrapper">
                    <p className="plan_main-text">The first week only for</p>
                    <p className="plan_main-price">$0.99</p>
                  </span>
                  <p className="plan_main-price-text">
                    Rebills at $8.99 per month
                    after your trial is completed.
                  </p>
                </div>
                <Link
                  to="/"
                  className="trial-plan_link"
                >
                  <button
                    type="button"
                    className="trial-plan_button"
                  >
                    Change
                  </button>
                </Link>
              </div>
            </div>
            <img alt="logopayments" className="main-wrapper-logo-pay" />
            <Payments />
          </div>
          <div className="wrapper_plan-about">
            <img alt="logo" className="plan-about_logo" />
            <ul className="plan-about_texth1">
              Your plan will include:
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Unlimited Cover Letters
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                50+ custom templates
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Creative design
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Custom backgrounds
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                More than 15 color schemes
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Create multiple versions
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Custom sections
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Unlimited PDF downloads
              </li>
              <li className="plan-about_textp">
                <img alt="logo" className="plan-about_logo-v" />
                Email sharing
              </li>
            </ul>
          </div>
        </div>
        <Carousel />
      </div>

    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default TrialPlan;
