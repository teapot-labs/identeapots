import clsx from "clsx/lite";

type FieldsetProps = {
  children?: React.ReactNode;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, className } = props;

  const classString = clsx("fieldset bg-base-200 border-base-300 rounded-box border p-4", className);

  return <fieldset className={classString}>{children}</fieldset>;
};

export default Fieldset;
