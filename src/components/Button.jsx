const Button = ({ text, onClick, variant = "primary" }) => {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 ${styles[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;
