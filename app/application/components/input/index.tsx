import { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className: string;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, className, ...otherProps },
  ref
) => {
  return (
    <div className="relative flex my-2">
      <span className="z-10 absolute px-1 -top-[6px] left-2 rounded-sm bg-theme-muted text-sm text-theme-muted leading-tight">
        {label}
      </span>
      <input
        {...otherProps}
        name={name}
        className="z-0 relative w-full h-10 pt-3 pb-2 px-2 my-1 text-theme-base bg-transparent outline-none border border-theme-border rounded-md placeholder:text-theme-muted"
      ></input>
    </div>
  );
};
