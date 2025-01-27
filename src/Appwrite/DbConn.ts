import { Client } from 'appwrite';
const client = new Client();
const apiKey = import.meta.env.;

client.setProject(apiKey);
if(apiKey === undefined){
    throw new Error;
}
else{
    console.log("Hey Homie I am Tony")
}