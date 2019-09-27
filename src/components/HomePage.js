import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import '../style/homepage.css';
import '../style/header.css';

const HomePage = () => (
  <>
    <header className="header">
      <Header />
    </header>
    <main className="main">
      <div className="main-wrapper">
        <h1 className="main-wrapper-h1">
        Your profile is ready. Get your personalized cover letter now for
        than the price of a cup of coffee and improve your career.
        </h1>
        <div className="main-wrapper_plan">
          <div className="wrapper_plan-trial">
            <div className="plan-trial_header">
              <p className="plan-trial_text">LIMITED SUMMER OFFER</p>
              <p className="plan-trial_text2">02d : 24h : 55m</p>
            </div>
            <img alt="logo plan trial" className="plan-trial_logo" />
            <p className="plan-trial_text-trial">Trial</p>
            <p className="plan-trial_text-4">The first week only for</p>
            <p className="plan-trial_text-price">$0.99</p>
            <p
              className="plan-trial_price1"
            >
              Rebills at $8.99 per month after your trial is completed.
            </p>
            <Link
              to="/trial"
              className="plan-trial_link"
            >
              <button
                type="button"
                className="plan-trial_button"
              >
                Get started
              </button>
            </Link>
          </div>
          <div className="wrapper_plan-annual">
            <img alt="logo" className="plan-annual_logo" />
            <p className="plan-annual_text-annual">Annual Plan</p>
            <p className="plan-annual_text-price">$39.00</p>
            <p
              className="plan-annual_price1"
            >
              Your Premium plan will auto-renew. Cancel any time.
            </p>
            <Link
              to="/annual"
              className="plan-annual_link"
            >
              <button
                type="button"
                className="plan-annual_button"
              >
                Get started
              </button>
            </Link>
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
        <div className="main-wrapper_carousel">
          <Carousel />
        </div>
      </div>
    </main>
    <footer className="footer">
      <Footer />
    </footer>
  </>
);

export default HomePage;
