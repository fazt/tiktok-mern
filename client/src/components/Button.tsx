interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <button className="bg-sky-500 hover:bg-sky-400 px-2 py-1 rounded-sm">
      {children}
    </button>
  );
}

export default Button;
