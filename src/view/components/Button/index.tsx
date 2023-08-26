import { ComponentProps } from "react";
import { cn } from "../../../app/utils/cn";
import { Spinner } from "../Spinner";


interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  className?: string;
}

export function Button({ children, className, isLoading, ...props }: ButtonProps) {
  return (
      <button
        {...props}
        className={cn(
          "bg-orange-600 hover:bg-orange-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-lg text-black font-semibold transition-all hidden md:block h-9",
          className
        )}
      >
        {!isLoading && children}
        {isLoading && (
          <div className="flex justify-center">
            <Spinner className="w-6 h-6"/>
          </div>
        )}
      </button>
  )
}