import { ChangeEventHandler } from "react";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  placeholder?: string;
  type?: "text" | "textarea" | "email" | "password";
  [props: string]: any;
}

const className =
  "bg-zinc-800 px-2 py-1 outline-none focus:outline-sky-500 text-slate-300 block mb-2";

export function Input({ onChange, name, placeholder, type, ...props }: Props) {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        {...props}
      ></textarea>
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      {...props}
    />
  );
}
