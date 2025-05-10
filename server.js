import express from "express";


const server = express();

server.get("/", (request, response) => {
    response.send("Welcome to the Home Page.");
});

const PORT = 1020;

server.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});
// // // Open the terminal and write down the following commands to run/start the server :-
// // // Firstly, clear all the things and ls to check the folder;
// // // Secondly, node --watch server.js to start the server;
// // // Finally, your server started :- Server running at 1020;
// // // Now, open the browser and in url write localhost:1020
// // // You will get the result on the display as :- Welcome to the Home Page.