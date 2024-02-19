import clsx from "clsx";
import Image from "next/image";
type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx("px-0 md:px-6 lg:px-16 bg-slate-100 relative", className)}
      {...restProps}>
      <div className="mx-auto w-full max-w-7xl relative bg-white">
        {/* <div className=" max-w-5xl">
          <Image
            src="/bubbles.png"
            alt=""
            fill
            className="object-cover w-full -z-10"
          />
        </div> */}
        {children}
      </div>
    </Comp>
  );
}
