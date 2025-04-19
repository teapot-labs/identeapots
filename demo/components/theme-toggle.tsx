"use client";

import { Moon02Icon, Sun02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import clsx from "clsx/lite";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = (props: ThemeToggleProps) => {
  const { className } = props;

  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const classString = clsx("toggle text-base-content", className);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <label className={classString}>
      <input type="checkbox" checked={currentTheme === "dark"} onChange={toggleTheme} />

      <HugeiconsIcon icon={Sun02Icon} size={16} className="text-base-content" />
      <HugeiconsIcon icon={Moon02Icon} size={16} className="text-base-content" />
    </label>
  );
};

export default ThemeToggle;
