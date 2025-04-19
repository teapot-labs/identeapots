"use client";

import Fieldset from "@components/fieldset";
import Range from "@components/range";
import Viewport from "@components/viewport";
import { Download02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { defaultConfig, generateIdenteapot, IdenteapotConfig } from "../../index";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [config, setConfig] = useState<IdenteapotConfig>({
    ...defaultConfig,
    salt: process.env.NEXT_PUBLIC_IDENTEAPOTS_SALT || "",
  });

  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = `identeapot-${input}.png`;
    link.click();
    link.remove();
  };

  const handleConfigChange = (key: keyof IdenteapotConfig, value: number) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (!input) {
      setImage(null);
      return;
    }
    generateIdenteapot(input, config).then(setImage);
  }, [input, config]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Fieldset>
        <div className="mb-2 flex items-center justify-between gap-2">
          <h1 className="text-xl font-black">
            Teapot Labs&apos;{" "}
            <span className="from-secondary to-primary bg-gradient-to-tr bg-clip-text text-transparent">
              Identeapots
            </span>
          </h1>
          <button onClick={downloadImage} disabled={!image} className="btn btn-sm btn-primary btn-square">
            <HugeiconsIcon icon={Download02Icon} size={16} />
          </button>
        </div>
        <Viewport src={image} alt="Identeapot" placeholder="No image yet!" />
        <label className="input mt-2 w-full">
          <span className="label">Username</span>
          <input
            type="text"
            className="grow"
            placeholder="Who do you want to be?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </label>
        <p className="label">Your avatar will be generated live while you type</p>
      </Fieldset>
      <div className="flex flex-col gap-4 *:flex-1">
        <Fieldset className="w-xs">
          <h2 className="mb-2 text-base font-black">Color Configuration</h2>
          <Range
            id="paletteSize"
            label="Palette Size"
            min={2}
            max={16}
            step={2}
            value={config.paletteSize}
            onChange={(e) => handleConfigChange("paletteSize", e.target.valueAsNumber)}
          />
          <Range
            id="coloredCellLightness"
            label="Colored Cells Lightness"
            min={0}
            max={100}
            value={config.coloredCellLightness}
            onChange={(e) => handleConfigChange("coloredCellLightness", e.target.valueAsNumber)}
          />
          <Range
            id="emptyCellLightness"
            label="Empty Cells Lightness"
            min={0}
            max={100}
            value={config.emptyCellLightness}
            onChange={(e) => handleConfigChange("emptyCellLightness", e.target.valueAsNumber)}
          />
        </Fieldset>
        <Fieldset className="w-xs">
          <h2 className="mb-2 text-base font-black">Identicon Configuration</h2>
          <Range
            id="size"
            label="Image Size"
            unit="px"
            min={256}
            max={1080}
            step={8}
            value={config.size}
            onChange={(e) => handleConfigChange("size", e.target.valueAsNumber)}
          />
          <Range
            id="gridSize"
            label="Grid Size"
            min={5}
            max={15}
            step={2}
            value={config.gridSize}
            onChange={(e) => handleConfigChange("gridSize", e.target.valueAsNumber)}
          />
          <Range
            id="patternSize"
            label="Pattern Size"
            min={3}
            max={config.gridSize}
            step={2}
            value={config.patternSize}
            onChange={(e) => handleConfigChange("patternSize", e.target.valueAsNumber)}
          />
          <Range
            id="overlap"
            label="Overlap"
            unit="px"
            min={0}
            max={2}
            step={0.1}
            value={config.overlap}
            onChange={(e) => handleConfigChange("overlap", e.target.valueAsNumber)}
          />
        </Fieldset>
      </div>
    </div>
  );
}
