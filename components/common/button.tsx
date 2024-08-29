"use client";
type IColor = "primary" | "secondary" | "white";
type IPill = "default" | "rounded";
type IBorder = "white" | "default";

interface IButton {
  color?: IColor;
  children: string | any;
  className?: string;
  pill?: IPill;
  onClick?: () => void;
  name?: string | string[];
  border?: IBorder;
}

const colors = {
  primary: "transparent text-[#fff] hover:bg-primary",
  secondary: "bg-primary text-white hover:bg-primary/70",
  white: "bg-white",
};

const borders = {
  default: "border-[0px]",
  white: "border-[1px] border-solid border-white",
};

const pills = {
  default: "rounded-[1px]",
  rounded: "rounded-full",
};
const Button = ({
  color = "primary",
  children,
  className,
  onClick = () => {},
  pill = "default",
  border = "white",
  name,
}: IButton) => {
  const clsColor = colors[color];
  const clsPill = pills[pill];
  const clsBorder = borders[border];
  const base = "px-5 py-1.5 duration-300 hover:shadow-md";

  return (
    <button
      className={`${base} ${clsColor} ${clsPill} ${className} ${clsBorder}`}
    >
      {children}
    </button>
  );
};

export default Button;
