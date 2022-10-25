import { AjaxStore, StringHelper } from "@bryntum/grid";

const store = new AjaxStore({
  readUrl: "/data/bryntum-data.json",
  autoLoad: true,
});

export const GridConfig = {
  appendTo: "bryntum-grid",
  features: {
    filter: true,
    stripe: true,
    quickFind: true,
  },

  tbar: [
    {
      ref: "removeAll",
      text: "Remove all filters",
      onAction: () => store.clearFilters(),
    },
  ],

  store,

  columns: [
    { type: "rownumber" },
    {
      text: "Name (custom filter: whole words)",
      field: "name",
      width: 300,
      // This column has a custom filtering function that matches whole words
      filterable: ({ value, record }) =>
        Boolean(record.name.match(new RegExp(`${value}\\b`, "i"))),
    },
    {
      text: "Age",
      field: "age",
      width: 100,
      type: "number",
      filterType: "number",
    },
    { text: "Job", field: "job", width: 200 },
    { text: "City", field: "city" },
  ],
};
