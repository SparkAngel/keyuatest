
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
  const [errorInput, setErrorInput] = useState(false);
  const [errorInput2, setErrorInput2] = useState(false);
  const [inputName, setInputName] = useState('');
  const [errorInputName, setErrorInputName] = useState(false);
  const [inputLastName, setInputLastName] = useState('');
  const [errorInputLastName, setErrorLastInputName] = useState(false);

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

  const errorInputLength = () => {
    if (changeCardNumber === true && filterValue.length < 15) {
      return true;
    }

    return false;
  };

  const onErrorSelect = () => {
    if (
      (changemonth === true && month === 'Month')

      || (changeYear === true && year === 'Year')

    ) {
      return true;
    }

    return false;
  };

  const onChangeInputName = (event) => {
    setInputName(event.target.value.trim());
  };

  const onChangeInputLastName = (event) => {
    setInputLastName(event.target.value.trim());
  };

  const disabledButton = () => {
    if (errorInputLastName === true
      || inputLastName === true
      || errorInput2 === true
      || errorInput === true
      || year === 'Year'
      || month === 'Month') {
      return true;
    }

    return false;
  };

  const DropList = getDropList();
  const errorInputLengths = errorInputLength();
  const onErrorSelects = onErrorSelect();
  const disabledButtons = disabledButton();

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
          onValueChange={(values) => {
            setFilterValue(values.value);
            setChangeCardNumber(true);
            errorInputLengths ? setErrorInput(true) : setErrorInput(false);
            values.value.indexOf(4)
              ? setErrorInput2(true)
              : setErrorInput2(false);
          }}
          placeholder="Enter card number"
          format="#### #### #### ####"
          className={errorInput
            || errorInput2 ? 'form-card-input-error'
            : 'form-card-input'}
        />

        {errorInput
          ? (<p className="form-input-error">Minimum length 16</p>) : '' }
        {errorInput2
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
          value={month}
          onChange={(event) => {
            onChange(event);
          }}
          onClick={onClick}
          className={onErrorSelects
            ? 'form-select_month-error'
            : 'form-select_month'}
        >
          <option disabled value="Month">Month</option>
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

        { onErrorSelects
          ? (<p className="form-input-error">You entered incorrect data</p>)
          : ''}
      </form>

      <p className="secction-form-space">/</p>

      <form className="secction-form_select">
        <p className="form-card-text">Exp. year</p>
        <select
          name="years"
          aria-label="select years"
          value={year}
          onClick={onClickYears}
          onChange={onChangeYears}
          className={onErrorSelects
            ? 'form-select_years-error'
            : 'form-select_years'}
        >
          <option disabled value="Year">Year</option>
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
          placeholder="Enter First Name"
          value={inputName}
          onChange={(event) => {
            onChangeInputName(event);
            event.target.value.charAt(0).match(/[A-Z]/g)
              ? setErrorInputName(false)
              : setErrorInputName(true);
          }}
          className={errorInputName
            ? 'secction-form_input-name-error'
            : 'secction-form_input-name'}
        />
        {errorInputName
          ? (<p className="form-input-error">First letter must be uppercase</p>)
          : ''}
      </form>

      <form className="secction-form">
        <p className="form-card-text">Cardholder Last Name</p>
        <input
          type="text"
          maxLength="16"
          name="input Last Name"
          autoComplete="off"
          aria-label="input Last Name"
          placeholder="Enter Last Name"
          value={inputLastName}
          onChange={(event) => {
            onChangeInputLastName(event);
            event.target.value.charAt(0).match(/[A-Z]/g)
              ? setErrorLastInputName(false)
              : setErrorLastInputName(true);
          }}
          className={errorInputLastName
            ? 'secction-form_input-lastnameEr'
            : 'secction-form_input-lastname'}
        />
        {errorInputLastName
          ? (<p className="form-input-error">First letter must be uppercase</p>)
          : ''}
      </form>

      <div className="section-confirm">
        <button
          type="button"
          disabled={disabledButtons}
          className={disabledButtons
            ? 'secction-button-error'
            : 'secction-button'
          }
        >
            Confirm
        </button>
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
/* eslint-disable */

