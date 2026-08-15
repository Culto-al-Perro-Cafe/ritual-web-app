import { useState } from "react";
import { posthog } from "../lib/posthog";
import type { CoffeeRatioCalculatorContent } from "../seo/coffeeRatioCalculator";

type CoffeeRatioCalculatorProps = {
  content: CoffeeRatioCalculatorContent;
};

const MIN_RATIO = 10;
const MAX_RATIO = 20;

function parsePositiveNumber(value: string) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

function isValidRatio(value: string) {
  const ratio = parsePositiveNumber(value);
  return ratio !== null && ratio >= MIN_RATIO && ratio <= MAX_RATIO;
}

function formatAmount(amount: number) {
  return amount.toFixed(1);
}

export default function CoffeeRatioCalculator({ content }: CoffeeRatioCalculatorProps) {
  const defaultMethod = content.methods[0];
  const [methodId, setMethodId] = useState(defaultMethod.id);
  const [coffee, setCoffee] = useState("15.0");
  const [water, setWater] = useState("240.0");
  const [ratio, setRatio] = useState(String(defaultMethod.ratio));

  const ratioIsValid = isValidRatio(ratio);
  const coffeeAmount = parsePositiveNumber(coffee);
  const waterAmount = parsePositiveNumber(water);
  const activeMethod = content.methods.find((method) => method.id === methodId) ?? defaultMethod;
  const calculatorIsValid = ratioIsValid && coffeeAmount !== null && waterAmount !== null;

  const selectMethod = (methodId: typeof defaultMethod.id) => {
    const method = content.methods.find((item) => item.id === methodId) ?? defaultMethod;
    const nextRatio = method.ratio;
    const nextCoffee = coffeeAmount;
    const nextWater = waterAmount;

    setMethodId(method.id);
    setRatio(String(nextRatio));

    if (nextCoffee !== null) {
      setWater(formatAmount(nextCoffee * nextRatio));
    } else if (nextWater !== null) {
      setCoffee(formatAmount(nextWater / nextRatio));
    }

    posthog.capture("calculator_method_selected", {
      locale: content.lang,
      method: method.id,
      ratio: nextRatio,
      coffee_grams: nextCoffee ?? 0,
      water_grams: nextCoffee !== null ? Number(formatAmount(nextCoffee * nextRatio)) : nextWater ?? 0,
    });
  };

  const updateCoffee = (value: string) => {
    setCoffee(value);
    const nextCoffee = parsePositiveNumber(value);
    const nextRatio = parsePositiveNumber(ratio);

    if (nextCoffee !== null && nextRatio !== null && ratioIsValid) {
      setWater(formatAmount(nextCoffee * nextRatio));
    } else if (value === "") {
      setWater("");
    }
  };

  const updateWater = (value: string) => {
    setWater(value);
    const nextWater = parsePositiveNumber(value);
    const nextRatio = parsePositiveNumber(ratio);

    if (nextWater !== null && nextRatio !== null && ratioIsValid) {
      setCoffee(formatAmount(nextWater / nextRatio));
    } else if (value === "") {
      setCoffee("");
    }
  };

  const updateRatio = (value: string) => {
    setRatio(value);
    const nextRatio = parsePositiveNumber(value);

    if (nextRatio !== null && nextRatio >= MIN_RATIO && nextRatio <= MAX_RATIO) {
      if (coffeeAmount !== null) {
        setWater(formatAmount(coffeeAmount * nextRatio));
      } else if (waterAmount !== null) {
        setCoffee(formatAmount(waterAmount / nextRatio));
      }
    }
  };

  const handleCtaClick = () => {
    posthog.capture("calculator_app_cta_clicked", {
      locale: content.lang,
      method: activeMethod.id,
      ratio: ratioIsValid ? Number(ratio) : 0,
      coffee_grams: coffeeAmount ?? 0,
      water_grams: waterAmount ?? 0,
    });
  };

  return (
    <section className="bg-brand-sand border-3 border-ink shadow-hard p-4 sm:p-6" aria-label={content.hero.title}>
      <div className="bg-brand-white border-2 border-ink p-4 sm:p-5 space-y-6">
        <fieldset>
          <legend className="font-label-bold text-label-bold uppercase text-brand-roast mb-3">
            {content.calculator.methodLabel}
          </legend>
          <div className="grid grid-cols-3 border-2 border-ink">
            {content.methods.map((method) => {
              const isSelected = method.id === methodId;

              return (
                <button
                  className={`min-h-20 px-2 border-r-2 last:border-r-0 border-ink font-label-bold text-label-bold uppercase transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-origin ${
                    isSelected ? "bg-brand-roast text-white" : "bg-brand-ivory text-ink hover:bg-brand-sand"
                  }`}
                  key={method.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => selectMethod(method.id)}
                >
                  {method.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="space-y-2">
            <span className="font-label-bold text-label-bold uppercase text-ink">{content.calculator.coffeeLabel}</span>
            <span className="flex border-2 border-ink bg-brand-ivory">
              <input
                aria-label={content.calculator.coffeeLabel}
                className="min-w-0 w-full border-0 bg-transparent px-4 py-3 font-h3 text-[36px] leading-none text-ink focus:ring-0"
                inputMode="decimal"
                min="0"
                onChange={(event) => updateCoffee(event.target.value)}
                step="0.1"
                type="number"
                value={coffee}
              />
              <span className="border-l-2 border-ink px-4 py-3 font-h3 text-[28px] text-ink">g</span>
            </span>
          </label>
          <label className="space-y-2">
            <span className="font-label-bold text-label-bold uppercase text-ink">{content.calculator.waterLabel}</span>
            <span className="flex border-2 border-ink bg-brand-ivory">
              <input
                aria-label={content.calculator.waterLabel}
                className="min-w-0 w-full border-0 bg-transparent px-4 py-3 font-h3 text-[36px] leading-none text-ink focus:ring-0"
                inputMode="decimal"
                min="0"
                onChange={(event) => updateWater(event.target.value)}
                step="0.1"
                type="number"
                value={water}
              />
              <span className="border-l-2 border-ink px-4 py-3 font-h3 text-[28px] text-ink">g</span>
            </span>
          </label>
        </div>

        <label className="block border-y-2 border-ink py-4 text-center">
          <span className="block font-label-bold text-label-bold uppercase text-brand-roast mb-2">{content.calculator.ratioLabel}</span>
          <span className="flex max-w-xs mx-auto border-2 border-ink bg-brand-ivory">
            <span className="px-4 py-3 font-h3 text-[34px] leading-none text-brand-origin">1:</span>
            <input
              aria-describedby="ratio-hint ratio-error"
              aria-invalid={!ratioIsValid}
              className="min-w-0 w-full border-0 bg-transparent px-2 py-3 font-h3 text-[34px] leading-none text-ink focus:ring-0"
              inputMode="decimal"
              min={MIN_RATIO}
              max={MAX_RATIO}
              onChange={(event) => updateRatio(event.target.value)}
              step="0.1"
              type="number"
              value={ratio}
            />
          </span>
          <span id="ratio-hint" className="block mt-2 font-body-md text-sm text-ink">{content.calculator.ratioHint}</span>
          {!ratioIsValid ? <span id="ratio-error" className="block mt-2 font-body-md text-sm text-red-700">{content.calculator.ratioError}</span> : null}
        </label>

        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-h3 text-h3 text-ink">{content.calculator.resultTitle}</h2>
            <span className="font-label-bold text-label-bold uppercase text-brand-origin">1:{ratioIsValid ? Number(ratio).toFixed(1).replace(/\.0$/, "") : "—"}</span>
          </div>
          {calculatorIsValid ? (
            <p className="font-body-lg text-body-lg text-ink">
              <strong>{formatAmount(coffeeAmount)} g</strong> {content.calculator.coffeeLabel.toLowerCase()} · <strong>{formatAmount(waterAmount)} g</strong> {content.calculator.waterLabel.toLowerCase()}
            </p>
          ) : (
            <p className="font-body-md text-body-md text-red-700" role="status">{content.calculator.amountError}</p>
          )}
          <p className="font-body-md text-body-md leading-7 text-ink">{content.calculator.resultBody}</p>
          <a
            className="inline-block w-full bg-brand-roast text-white border-2 border-ink px-5 py-4 text-center font-label-bold text-label-bold uppercase shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all no-underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-origin"
            href="/#download"
            onClick={handleCtaClick}
          >
            {content.calculator.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
