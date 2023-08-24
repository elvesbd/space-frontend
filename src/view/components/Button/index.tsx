import { ComponentProps } from "react";
import { cn } from "../../../app/utils/cn";
import { Spinner } from "../Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ children, className, isLoading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-orange-600 hover:bg-orange-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-lg font-medium text-white transition-all hidden md:block",
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6"/>}
    </button>
  )
}