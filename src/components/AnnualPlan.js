import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import Payments from './Payments';
import '../style/annualplan.css';

const AnnualPlan = () => (
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
            <div className="annual-plan">
              <div className="annual-plan_body">
                <img alt="logo" className="annual-plan_logo" />
                <div className="annual-plan_main">
                  <p className="plan_main-annual">Annual Plan</p>
                  <span className="plan_main-text-wrapper">
                    <p className="plan_main-price-annual">$39.00</p>
                    <p className="plan_main-text-annual">/ year</p>
                  </span>
                  <p className="plan_main-price-text">
                  Your Premium plan will auto-renew.
                   Cancel any time.
                  </p>
                </div>
                <Link
                  to="/"
                  className="annual-plan_link"
                >
                  <button
                    type="button"
                    className="annual-plan_button"
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

export default AnnualPlan;

/*
 <div className="main-wrapper">
        <h1>
        Your profile is ready. Get your personalized cover letter now for less
        than the price of a cup of coffee and improve your career.
        </h1>
        <div className="wrapper-plan">
          <div className="box1-wrapper">
            <div className="box1-paln">
              <div>
                <img alt="logo" className="planlogo2" />
                <div>
                  <p>Annual Plan</p>
                  <p>$39.00</p>
                  <p>/ year</p>
                  <p>
                  Your Premium plan will auto-renew.
                  Cancel any time.
                  </p>
                </div>
                <Link
              to="/"
            >
              <button type="button">Change</button>
            </Link>
              </div>
            </div>
            */
