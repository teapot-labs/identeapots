import clsx from "clsx/lite";
import Image from "next/image";

type ViewportProps = {
  /** The image to display */
  src: string | null;
  /** The alt text for the image */
  alt: string;
  /** Placeholder text to show when there is no image */
  placeholder?: string;
  /** The size of the viewport in px */
  size?: number;
  /** Additional classes to apply to the viewport */
  className?: string;
};

const Viewport = (props: ViewportProps) => {
  const { src, alt, placeholder, size = 400, className } = props;

  const classString = clsx(
    "relative",
    `h-(--viewport-size-sm) w-(--viewport-size-sm) sm:h-(--viewport-size) sm:w-(--viewport-size)`,
    className,
  );
  const style = {
    "--viewport-size": `${size}px`,
    "--viewport-size-sm": `${size * 0.8}px`,
  } as React.CSSProperties;

  const childClassString = "rounded-field";
  const placeholderClassString = clsx(
    childClassString,
    "h-full w-full",
    "flex items-center justify-center",
    "bg-base-100 border-base-content/60 text-base-content/80 border border-dashed text-base",
  );

  return (
    <div className={classString} style={style}>
      {src ? (
        <Image src={src} alt={alt} className={childClassString} fill />
      ) : (
        <div className={placeholderClassString}>{placeholder}</div>
      )}
    </div>
  );
};

export default Viewport;
