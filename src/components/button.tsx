import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950",
      secondary: "border-white",
    },
    size: {
      sm: "h-10",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant: variant,
        className: className,
        size,
      })}
      {...otherProps}
    />
  );
}
