export const Input = (props: InputPropsType) => {
  return (
    <input
      type="text"
      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500"
      {...props}
    />
  );
};

type InputPropsType = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
