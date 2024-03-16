import clsx from "clsx";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={clsx(className, "prose")} {...props} />;
}
