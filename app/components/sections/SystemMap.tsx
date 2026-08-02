"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { PortfolioContent } from "../../content";

export default function SystemMap({
  system,
}: {
  system: PortfolioContent["hero"]["system"];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const productButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProduct = system.products[activeIndex];

  const handleProductKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % system.products.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex =
        (currentIndex - 1 + system.products.length) % system.products.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = system.products.length - 1;
    }

    if (nextIndex === undefined) return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    productButtons.current[nextIndex]?.focus();
  };

  return (
    <div className="system-map" aria-label={system.label}>
      <div className="system-map-header">
        <span className="status-dot" aria-hidden="true" />
        <span>{system.label}</span>
        <span className="system-map-status">{system.interactiveLabel}</span>
      </div>

      <div className="system-map-body">
        <div className="system-column system-column-sources">
          <p>{system.sourcesLabel}</p>
          <ul aria-live="polite">
            {activeProduct.sources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="system-connector" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="system-core">
          <p>{system.coreLabel}</p>
          <div
            className="system-core-grid"
            role="group"
            aria-label={system.coreLabel}
          >
            {system.products.map((product, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={product.name}
                  ref={(button) => {
                    productButtons.current[index] = button;
                  }}
                  type="button"
                  aria-pressed={isActive}
                  data-active={isActive || undefined}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) =>
                    handleProductKeyDown(event, index)
                  }
                >
                  {product.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="system-connector" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="system-column system-column-outcomes">
          <p>{system.outcomesLabel}</p>
          <ul aria-live="polite">
            {activeProduct.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="system-map-footer" aria-hidden="true">
        <span>{system.flowStart}</span>
        <span>{system.flowProcess}</span>
        <span>{system.flowOutcome}</span>
      </div>
    </div>
  );
}
