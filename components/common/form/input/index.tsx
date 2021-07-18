import React from "react";
import classnames from "classnames";

interface IInput {
  type?: string;
  hasError?: boolean;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({
  type = "input",
  hasError,
  className,
  required,
  placeholder,
}) => {
  return (
    <input
      required={required}
      type={type}
      className={classnames("form-control", className, {
        "is-invalid": hasError,
      })}
      placeholder={placeholder}
    />
  );
};
