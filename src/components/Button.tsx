export const Button = (props: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button className="bg-slate-400 text-white p-2 rounded-md" {...props}>
    {props.children}
  </button>
); //Button
