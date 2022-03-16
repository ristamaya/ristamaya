import { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  errorMessage?: string;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, className, errorMessage, ...otherProps },
  ref
) => {
  return (
    <div className="relative flex m-2 w-fit h-fit items-center">
      <input
        {...otherProps}
        className="z-0 relative min-w-10 min-h-8 pt-1 pb-1 px-1 my-1 text-theme-base bg-transparent outline-none border border-theme-border rounded-[4px] placeholder:text-theme-muted invalid:border-theme-warning peer"
      ></input>

      <span className="z-10 absolute px-[2px] -top-[5px] left-2 rounded-sm bg-theme-muted leading-none text-sm text-theme-base peer-invalid:text-theme-warning">
        {label}
      </span>

      {errorMessage && (
        <span className="z-10 absolute px-[2px] -top-[5px] right-1 rounded-full bg-theme-muted text-sm text-theme-warning leading-none">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
