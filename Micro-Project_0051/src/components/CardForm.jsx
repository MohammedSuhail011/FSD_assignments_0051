import { useState } from "react";
import "./CardForm.css";

// Only letters (plus spaces, apostrophes and hyphens) allowed in the name,
// matching the validation rule below.
function formatName(raw) {
  return raw.replace(/[^A-Za-z\s'-]/g, "");
}

// Only digits allowed, grouped in 4s with a space: "1234 5678 9123 0000"
function formatCardNumber(raw) {
  const digitsOnly = raw.replace(/\D/g, "").slice(0, 16);
  return digitsOnly.replace(/(.{4})/g, "$1 ").trim();
}

// Digits only, capped at maxLen, and never above 12 (valid month).
function onlyMonth(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 2);
  const num = Number(digits);
  return num > 12 ? "" : digits;
}

function onlyDigits(raw, maxLen) {
  return raw.replace(/\D/g, "").slice(0, maxLen);
}

// One place for every validation rule, so the form and the tests
// (if you add any later) always agree on what "valid" means.
function validate(values) {
  const errors = {};
  const digitsOnlyNumber = values.number.replace(/\s/g, "");

  if (!values.name.trim()) {
    errors.name = "Can't be blank";
  } else if (!/^[A-Za-z\s'-]+$/.test(values.name)) {
    errors.name = "Wrong format, letters only";
  }

  if (!values.number.trim()) {
    errors.number = "Can't be blank";
  } else if (!/^\d{16}$/.test(digitsOnlyNumber)) {
    errors.number = "Wrong format, numbers only (16 digits)";
  }

  if (!values.expMonth.trim() || !values.expYear.trim()) {
    errors.expiry = "Can't be blank";
  } else if (!/^(0[1-9]|1[0-2])$/.test(values.expMonth)) {
    errors.expiry = "Wrong format, MM must be 01-12";
  } else if (!/^\d{2}$/.test(values.expYear)) {
    errors.expiry = "Wrong format, YY must be 2 digits";
  }

  if (!values.cvc.trim()) {
    errors.cvc = "Can't be blank";
  } else if (!/^\d{3}$/.test(values.cvc)) {
    errors.cvc = "Wrong format, numbers only (3 digits)";
  }

  return errors;
}

// onConfirm(values) is called only once every field passes validation.
function CardForm({ onConfirm }) {
  const [values, setValues] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({});

  function updateField(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const foundErrors = validate(values);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      onConfirm(values);
    }
  }

  return (
    <form className="card-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Cardholder name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={values.name}
          onChange={(e) => updateField("name", formatName(e.target.value))}
          className={errors.name ? "invalid" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="number">Card number</label>
        <input
          id="number"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 1234 5678 9123 0000"
          value={values.number}
          onChange={(e) => updateField("number", formatCardNumber(e.target.value))}
          className={errors.number ? "invalid" : ""}
        />
        {errors.number && <span className="error">{errors.number}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label>Exp. date (MM/YY)</label>
          <div className="expiry-inputs">
            <input
              type="text"
              inputMode="numeric"
              placeholder="MM"
              value={values.expMonth}
              onChange={(e) => updateField("expMonth", onlyMonth(e.target.value))}
              className={errors.expiry ? "invalid" : ""}
            />
            <input
              type="text"
              inputMode="numeric"
              placeholder="YY"
              value={values.expYear}
              onChange={(e) => updateField("expYear", onlyDigits(e.target.value, 2))}
              className={errors.expiry ? "invalid" : ""}
            />
          </div>
          {errors.expiry && <span className="error">{errors.expiry}</span>}
        </div>

        <div className="field">
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 123"
            value={values.cvc}
            onChange={(e) => updateField("cvc", onlyDigits(e.target.value, 3))}
            className={errors.cvc ? "invalid" : ""}
          />
          {errors.cvc && <span className="error">{errors.cvc}</span>}
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}

export default CardForm;
