import { Client } from 'appwrite';
const client = new Client();
const apiKey = import.meta.env.VITE_API_KEY;
client.setProject(apiKey);
if(apiKey === undefined){
    throw new Error;
}
else{
    console.log("Hey Homie I am Tony")
}