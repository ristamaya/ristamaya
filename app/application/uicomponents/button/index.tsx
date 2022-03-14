import React, { ForwardRefRenderFunction, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className: string;
}

export const Button: ForwardRefRenderFunction<HTMLInputElement, ButtonProps> = (
  { label, className, ...otherProps },
  ref
) => {
  return (
    <button
      {...otherProps}
      className="relative flex bg-theme-button-accent h-8 w-32 items-center justify-center outline-none rounded-md hover:bg-theme-button-accent-hover"
    >
      {label}
    </button>
  );
};
