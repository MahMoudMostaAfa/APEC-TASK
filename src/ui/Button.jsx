function Button({ children, type, onClick }) {
  return (
    <button
      style={{
        marginRight: children === "back" ? "auto" : undefined,
        marginLeft: children !== "back" ? "auto" : undefined,
      }}
      className=" border text-lg capitalize border-black rounded-sm px-6 py-1 bg-[#5f0b0b] text-white"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
