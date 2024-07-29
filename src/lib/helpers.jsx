export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export const clamp = (min, value, max) => Math.min(Math.max(value, min), max);
export const mapRange = (from, to, value, min, max) =>
  ((value - from) * (max - min)) / (to - from) + min;
