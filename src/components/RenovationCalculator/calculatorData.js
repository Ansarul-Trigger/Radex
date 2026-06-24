export const calculatorConfig = {
  bathroom: {
    title: "Badsanierung",
    type: "fixed",
    defaultSize: 8,
    min: 3,
    max: 40,

    prices: {
      basis: {
        min: 8000,
        avg: 11500,
        max: 15000,
      },
      komfort: {
        min: 15000,
        avg: 20000,
        max: 25000,
      },
      premium: {
        min: 25000,
        avg: 35000,
        max: 45000,
      },
    },
  },

  apartment: {
    title: "Wohnungssanierung",
    type: "sqm",
    defaultSize: 80,
    min: 20,
    max: 500,

    prices: {
      basis: {
        min: 300,
        avg: 450,
        max: 600,
      },

      komfort: {
        min: 600,
        avg: 800,
        max: 1000,
      },

      premium: {
        min: 1000,
        avg: 1400,
        max: 1800,
      },
    },
  },

  oldbuilding: {
    title: "Altbausanierung",

    type: "sqm",

    defaultSize: 120,

    min: 20,

    max: 1000,

    prices: {
      basis: {
        min: 500,
        avg: 700,
        max: 900,
      },

      komfort: {
        min: 900,
        avg: 1200,
        max: 1500,
      },

      premium: {
        min: 1500,
        avg: 2000,
        max: 2500,
      },
    },
  },
};