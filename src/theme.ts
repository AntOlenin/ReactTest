const theme = {
  color: {
    background: '#FFF',
    placeholder: '#EDEDED',
    primary: '#4A4A4A',
    button: '#EA7F28',
    buttonPressed: '#D37324',
    buttonText: '#EDEDED',
  },
  font: {
    size: {
      s: 12,
      m: 14,
      l: 18,
      xl: 32,
    },

    weight: {
      regular: 300,
      bold: 500,
    },
  },
  layout: {
    spacing: {
      s: 8,
      m: 12,
      l: 24,
    },

    headerHeight: 80,
    footerHeight: 80,
    contentWidth: 800,
  },
  ui: {
    button: {
      width: 128,
      height: 32,
      borderRadius: 2,
    }
  }
};

export type Theme = typeof theme;
export type Classes = Record<string, string>;
export default theme;
