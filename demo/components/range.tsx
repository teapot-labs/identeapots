import clsx from "clsx/lite";

type RangeProps = {
  id?: string;
  label: string;
  unit?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const Range = (props: RangeProps) => {
  const { id, label, unit, min, max, step, value, onChange, className } = props;

  const classString = clsx("range range-xs mb-2", className);

  return (
    <>
      <label htmlFor={id} className="label">
        {label}:
        <span className="text-base-content">
          {value}
          {unit}
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={classString}
      />
    </>
  );
};

export default Range;
