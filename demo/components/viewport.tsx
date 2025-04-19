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

  const classString = clsx("rounded-field", className);
  const placeholderClassString = clsx(
    "flex items-center justify-center",
    "bg-base-100 border-base-content/60 text-base-content/80 border border-dashed text-base",
    classString,
  );
  const placeholderStyle = {
    height: `${size}px`,
    width: `${size}px`,
  };

  if (!src) {
    return (
      <div className={placeholderClassString} style={placeholderStyle}>
        {placeholder}
      </div>
    );
  }

  return <Image src={src} alt={alt} width={size} height={size} className={classString} />;
};

export default Viewport;
