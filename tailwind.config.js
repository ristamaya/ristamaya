function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        theme: {
          fill: withOpacity("--color-fill"),
          muted: withOpacity("--color-muted"),
          "button-base": withOpacity("--color-button-base"),
          "button-hover": withOpacity("--color-button-hover"),
          "button-inverted": withOpacity("--color-button-inverted"),
        },
      },
      textColor: {
        theme: {
          base: withOpacity("--color-text-base"),
          strong: withOpacity("--color-text-strong"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          warning: withOpacity("--color-text-warning"),
        },
      },
      borderColor: {
        theme: {
          border: withOpacity("--color-border"),
          warning: withOpacity("--color-border-warning"),
        },
      },
      gradientColorStops: {
        theme: {
          hue: withOpacity("--color-fill"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
