import { ForwardRefRenderFunction, InputHTMLAttributes, useState } from "react";
import DynamicIcon from "~/application/uicomponents/dynamicicon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  inputData?: string[];
  errorMessage?: string;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  label,
  className,
  inputData,
  errorMessage,
  ...props
}) => {
  const [openData, setOpenData] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative flex m-3 w-fit h-fit items-center justify-center">
      <input
        {...props}
        className={`z-0 relative min-w-10 min-h-8 pt-1 pb-1 px-1 my-1 text-theme-base bg-transparent outline-none border border-theme-border disabled:border-theme-border/50 rounded-[4px] placeholder:text-theme-muted invalid:border-theme-warning peer ${className}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <span className="z-10 absolute px-[2px] -top-[5px] left-2 rounded-sm bg-theme-muted leading-none text-sm text-theme-base peer-invalid:text-theme-warning peer-disabled:text-theme-muted">
        {label}
      </span>

      {errorMessage && (
        <span className="z-10 absolute px-[2px] -top-[5px] right-1 rounded-full bg-theme-muted text-sm text-theme-warning leading-none">
          {errorMessage}
        </span>
      )}

      {inputData && (
        <span
          onClick={(e) => setOpenData(!openData)}
          className={`absolute cursor-pointer right-1 border-l border-theme-border w-fit h-fit text-theme-base bg-theme-muted`}
          aria-hidden={true}
        >
          <DynamicIcon
            icon="FiChevronLeft"
            className={`${
              openData && "-rotate-90"
            } h-6 w-6  transition duration-300`}
          />
        </span>
      )}

      {openData && (
        <div
          className={`absolute px-1 py-1 flex-row z-20 bottom-[10px] left-0 w-full bg-theme-muted border-l border-r border-b border-theme-border rounded-[4px] translate-y-full`}
          aria-hidden={true}
        >
          {inputData?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-theme-fill/75 text-theme-base"
              onClick={(e) => {
                setValue(item);
                setOpenData(!openData);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
