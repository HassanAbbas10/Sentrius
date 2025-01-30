import { Client, Account, Storage,Databases, ID } from "appwrite"; 

const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const apiKey = import.meta.env.VITE_APPWRITE_SECRET_KEY;
const projectEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
export const bucketID = import.meta.env.VITE_APPWRITE_BUCKET_ID;

const client = new Client();

client.setEndpoint(projectEndpoint).setProject(projectID);

if (apiKey === undefined) {
  throw new Error("Appwrite API Key is undefined.");
} else {
  console.log("Hey Homie I am Tony");
}
export const databaseID = projectID;
export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client); 
export { ID };
