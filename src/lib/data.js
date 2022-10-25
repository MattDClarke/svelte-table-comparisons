import { client } from "../utils/fetchWrapper";

export const load = async () => {
  let dataRes;

  await client("data/data-tables.json").then(({ data }) => {
    const formattedData = data.map((item) => {
      return Object.values(item);
    });
    dataRes = formattedData;
  });
  return dataRes;
};
