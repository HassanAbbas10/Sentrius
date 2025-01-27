import { Client, Account } from "appwrite";


const projectID = import.meta.env.VITE_APPWRITE_SECRET_KEY;
const apiKey = import.meta.env.VITE_APPWRITE_SECRET_KEY;
const projectEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const client = new Client()
.setEndpoint(projectEndpoint).
setProject(projectID);


if (apiKey === undefined) {
  throw new Error();
} else {
  console.log("Hey Homie I am Tony");
}

export const account = new Account(client);
export { ID } from "appwrite";