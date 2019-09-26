/* eslint-disable */
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import '../style/payments.css';

const Payments = () => {
  const [inputvalue] = useState(new Date().getFullYear());
  const [filterValue, setFilterValue] = useState('');
  const [month, setMonth] = useState('Month');
  const [year, setYear] = useState('Year');
  const [changemonth, setchangemonth] = useState(false);
  const [changeYear, setchangeYear] = useState(false);
  const [changeCardNumber, setChangeCardNumber] = useState(false);

  const getDropList = () => {
    let years = inputvalue - 1;
    const options = [];

    for (let i = years; i <= inputvalue + 15; i += 1) {
      years += 1;
      options.push(<option key={years} value={years}>{years}</option>);
    }

    return options;
  };

  const onChange = (event) => {
    setMonth(event.target.value);
  };

  const onClick = () => {
    setchangemonth(true);
  };

  const onClickYears = () => {
    setchangeYear(true);
  };

  const onChangeYears = (event) => {
    setYear(event.target.value);
  };

  const DropList = getDropList();

  return (
    <section className="main-secction">
      <form className="secction-form_card">
        <p
          className="form-card-text"
          htmlFor="inputcard"
        >
        Card number
        </p>

        <NumberFormat
          id="inputcard"
          className="form-card-input"
          onValueChange={(values) => {
            setFilterValue(values.value);
            setChangeCardNumber(true);
          }}
          placeholder="Enter card number"
          format="#### #### #### ####"
        />

        {changeCardNumber === true
          && filterValue.length < 16
          ? (<p className="form-input-error">Minimum length 16</p>) : '' }
        {changeCardNumber === true
          && filterValue.indexOf(4)
          ? (
            <p
              className="form-input-error"
            >
            Credit card number is not valid
            </p>
          )
          : '' }
      </form>

      <form className="secction-form_select">
        <p className="form-card-text">Exp. month</p>
        <select
          id="selectMonth"
          name="Month"
          aria-label="select Month"
          className="form-select_month"
          onChange={onChange}
          onClick={onClick}
        >
          <option value="Month">Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        {changemonth === true
          && month === 'Month'
          || changeYear === true
          && year === 'Year'
          ? (<p className="form-input-error">You entered incorrect data</p>)
          : ''}
      </form>

      <p className="secction-form-space">/</p>

      <form className="secction-form_select">
        <p className="form-card-text">Exp. year</p>
        <select
          name="years"
          aria-label="select years"
          className="form-select_years"
          onClick={onClickYears}
          onChange={onChangeYears}
        >
          <option value="Year">Year</option>
          {DropList}
        </select>
      </form>

      <form className="secction-form_name">
        <p className="form-card-text">Cardholder First Name</p>
        <input
          type="text"
          maxLength="16"
          name="input First Name"
          autoComplete="off"
          aria-label="input First Name"
          className="secction-form_input-name"
          placeholder="Enter First Name"
        />
      </form>

      <form className="secction-form">
        <p className="form-card-text">Cardholder Last Name</p>
        <input
          type="text"
          maxLength="16"
          name="input Last Name"
          autoComplete="off"
          aria-label="input Last Name"
          className="secction-form_input-name"
          placeholder="Enter Last Name"
        />
      </form>

      <div className="section-confirm">
        <button type="button" className="secction-button">Confirm</button>
        <img alt="logo" className="confirm-logo" />
        <p className="confirm-text">Secure credit card payment</p>
      </div>
      <div className="section-terms">
              Your card will be automatically attached to your profile,
              you can remove it at any time. By clicking “Confirm”
              you agree to the Terms & Conditions
      </div>
    </section>
  );
};

export default Payments;
