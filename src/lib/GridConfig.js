import { AjaxStore } from "@bryntum/grid";

const store = new AjaxStore({
  readUrl: "/data/bryntum-data.json",
  autoLoad: true,
});

export const GridConfig = {
  appendTo: document.body,
  store,

  columns: [
    { field: "name", text: "Name", width: 200 },
    { field: "city", text: "City", flex: 1 },
  ],
};
