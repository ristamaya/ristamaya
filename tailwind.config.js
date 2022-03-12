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
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      textColor: {
        theme: {
          base: withOpacity("--color-text-base"),
          strong: withOpacity("--color-text-strong"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      borderColor: {
        theme: {
          border: withOpacity("--color-border"),
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
