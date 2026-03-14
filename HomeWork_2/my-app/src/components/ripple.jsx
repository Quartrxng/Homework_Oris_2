import { useEffect, useState } from "react";

export default function useGlobalRipple() {
  const [rippleColorMap, setRippleColorMap] = useState({});
  const [defaultRippleColor, setDefaultRippleColor] = useState(
    "rgba(255, 255, 255, 0.2)"
  );

  useEffect(() => {
    const loadColors = async () => {
      try {
        const response = await fetch("/api/rippleColor.json");
        const data = await response.json();

        setRippleColorMap(data.rippleColorMap || {});
        setDefaultRippleColor(data.defaultRippleColor);
      } catch (error) {
        console.error("Ошибка загрузки rippleColor.json:", error);
      }
    };

    loadColors();
  }, []);

  useEffect(() => {
    const getRippleColor = (attributeValue) => {
      if (!attributeValue) {
        return defaultRippleColor;
      }

      if (rippleColorMap[attributeValue]) {
        return rippleColorMap[attributeValue];
      }

      return defaultRippleColor;
    };

    const createRipple = (event) => {
      const button = event.target.closest(
        "a.button--ripple, button.button--ripple"
      );
      if (!button) return;

      const computedStyle = window.getComputedStyle(button);
      if (computedStyle.position === "static") {
        button.style.position = "relative";
      }
      button.style.overflow = "hidden";

      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const distX = Math.max(x, rect.width - x);
      const distY = Math.max(y, rect.height - y);
      const radius = Math.sqrt(distX * distX + distY * distY);
      const size = radius * 2;

      const ripple = document.createElement("span");

      ripple.style.position = "absolute";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x - radius}px`;
      ripple.style.top = `${y - radius}px`;
      ripple.style.background = getRippleColor(
        button.getAttribute("data-ripple-color")
      );
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.opacity = "0.6";
      ripple.style.transition =
        "transform 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease";
      ripple.style.pointerEvents = "none";

      button.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.transform = "scale(1)";
      });

      const removeRipple = () => {
        ripple.style.opacity = "0";
        setTimeout(() => ripple.remove(), 400);
        button.removeEventListener("pointerup", removeRipple);
        button.removeEventListener("pointerleave", removeRipple);
      };

      button.addEventListener("pointerup", removeRipple);
      button.addEventListener("pointerleave", removeRipple);
    };

    document.addEventListener("pointerdown", createRipple);

    return () => {
      document.removeEventListener("pointerdown", createRipple);
    };
  }, [rippleColorMap, defaultRippleColor]);
}