import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color } = props;
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div
        className={twMerge(
          "absolute inline-flex border border-white/15 px-1 rounded-tl-none rounded-full bg-blue-600 font-semibold text-sm top-full left-full",
          color === "red" && "bg-red-500"
        )}
      >
        {name}
      </div>
    </div>
  );
}
