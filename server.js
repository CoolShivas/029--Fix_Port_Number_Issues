import express from "express";


const server = express();

server.get("/", (request, response) => {
    response.send("Welcome to the Home Page.");
});

server.get("/about", (request, response) => {
    response.send("Welcome to the About Page.");
});

server.get("/contact", (request, response) => {
    return response.send(`<div class="container">
        <h1>Contact Us</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Name :-</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="shortCode">Problem :-</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Resolve</button>
        </form>
    </div>`);
});

// // // Use of Older Version of Environment Variable;
const PORT = process.env.PORT || 1020;// // Default PORT is 1020;

server.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});
// // // Open the terminal and write down the following commands to run/start the server :-
// // // Firstly, clear all the things and ls to check the folder;
// // // Secondly, if you are using the Powershell Terminal then write the command :- $env:PORT = 6070; node --watch app.js to start the server;
// // // Finally, your server started :- Server running at 6070;
// // // Now, open the browser and in url write localhost:6070
// // // You will get the result on the display as :- Welcome to the Home Page.
// // // As well as you can switch the pages as localhost:6070/about or localhost:6070/contact;