import { SERVER_HOST } from "../constants";

export const request = async (uri: string) => {
  return await fetch(`${SERVER_HOST}${uri}`)
    .then(response => response.json())
    .then(data => data);
};
