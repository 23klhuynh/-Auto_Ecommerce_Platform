import React from "react";

function FormField({ label, id, type = "text", placeholder, required, rows }) {
  return (
    <div className="contact__form-group">
      <label htmlFor={id}>{label}</label>
      {type==="textarea" ? (
        <textarea
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      ) }
    </div>
  );
}

export default FormField;
