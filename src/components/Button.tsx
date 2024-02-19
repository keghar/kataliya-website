import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-md shadow-slate-300 w-40 text-base h-10",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none shadow-md shadow-slate-300 bg-white w-40 h-10 text-base",
};

const variantStyles = {
  solid: {
    purple:
      "bg-[#e1dafd] text-slate-600 hover:bg-[#d5c8fb] hover:text-slate-800 active:bg-purple-500 active:text-slate-800 focus-visible:outline-slate-900",
    blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    purple:
      "ring-[#e1dafd] text-slate-700 hover:text-slate-900 hover:ring-purple-300 active:bg-purple-100 active:text-slate-600 focus-visible:outline-purple-800 focus-visible:ring-purple-300 hover:bg-[#e1dafd]",
    white:
      "ring-purple-800 text-slate-700 hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white shadow-md shadow-gray-600 ",
  },
};

type ButtonProps = (
  | {
      variant?: "solid";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: "outline";
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, "color">
    | (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
        href?: undefined;
      })
  );

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= "solid";
  props.color ??= "purple";

  className = clsx(
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : props.variant === "solid"
        ? variantStyles.solid[props.color]
        : undefined,
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
