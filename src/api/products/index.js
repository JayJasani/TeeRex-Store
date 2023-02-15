import client from "api/client";

export const getProducts = () => {
  return client.get("/catalogue.json");
};
