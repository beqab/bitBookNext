import React, { Children } from "react";
import classnames from "classnames";

interface IFormGroup {
  Label?: string | JSX.Element;
  errorMessage?: string;
  className?: string;
}

export const FormGroup: React.FC<IFormGroup> = ({
  children,
  Label,
  errorMessage,
  className,
}) => {
  return (
    <div className={classnames("form-group", { className })}>
      {typeof Label === "string" ? (
        <label className="form-control-label">{Label}</label>
      ) : (
        Label
      )}

      {children}
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
};
