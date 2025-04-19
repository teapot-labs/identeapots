import { CopyrightIcon, GithubIcon, NpmIcon, SourceCodeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import clsx from "clsx/lite";

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps) => {
  const { className } = props;

  const classString = clsx("text-base-content/60 p-3 text-sm", className);

  return (
    <footer className={classString}>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={CopyrightIcon} size={16} />
          {new Date().getFullYear()}
        </div>
        -
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={SourceCodeIcon} size={16} />
          <a href="https://lorenzofratus.it" target="_blank" rel="noopener noreferrer" className="link">
            Lorenzo Fratus
          </a>
        </div>
        -
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={GithubIcon} size={16} />
          <a
            href="https://github.com/teapot-labs/identeapots"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
        </div>
        -
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={NpmIcon} size={16} />
          <a
            href="https://www.npmjs.com/package/@teapotlabs/identeapots"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            NPM
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
