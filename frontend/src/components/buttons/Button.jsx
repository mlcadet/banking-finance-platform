export default function Button({
  children,
  variant = "primary",
  ...props
}) {

  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-4";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",

    secondary:
      "border border-slate-500 text-white hover:bg-white hover:text-slate-900 focus:ring-slate-400",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}