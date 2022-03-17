import React, { ForwardRefRenderFunction, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className: string;
}

export const Button: ForwardRefRenderFunction<
  HTMLInputElement,
  ButtonProps
> = ({ label, className, ...props }) => {
  const spanClass =
    "absolute top-0 h-full w-0 bg-theme-button-hover/20 group-hover:w-full transition-all ease-out duration-700";

  return (
    <button
      {...props}
      className={`relative min-h-fit min-w-fit px-4 py-1 bg-theme-button-base outline-none rounded-md group active:text-theme-inverted m-2 items-center justify-center overflow-hidden text-theme-base ${className}`}
    >
      {label}
      <span className={`left-0 ${spanClass}`}></span>
      <span className={`right-0 ${spanClass}`}></span>
    </button>
  );
};
