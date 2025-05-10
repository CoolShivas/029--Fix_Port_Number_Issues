/**
 * 
 * * * As per the previous assignment i.e,(028--Environment_Var_NodeJS_ExpressJS).
 * 
 * 
 * * * We have used the Environment Variable in Powershell Terminal :-
              - $env:PORT = 6789; node --watch app.js to start the server.
 * 
 * 
 * * * We have used the Environment Variable in Command Prompt Terminal :-
              - set PORT=2050 && node --watch app.js to start the server.
 * 
 * 
 * * * So, if the port number change or you have define the PORT = 3000;
              - And, it's not coming or showing that 3000 instead showing the Server running at 6789 or Server running at 2050

              - To check which port number is running use this command i.e,(echo $env:PORT) it will show the port number whatever is running.

              - If you want to remove or change the port number from the CLI then use this command i.e,(Remove-Item env:\PORT) it will remove the port number whatever is running.

              - To check whether it is removed or not run again the same command i.e,(echo $env:PORT) it will show nothing or clear field.

 * 
 * 
 */



// // // --------------------------------------------------------------------------------------------



/**
 * 
 * * * How to use .gitignore file :-
              
              - If we add some file or folder name inside .gitignore file it will not upload that file to the GitHub account.

              - Or it bypass that files only that are added on .gitignore.
 * 
 */


// // // --------------------------------------------------------------------------------------------



/**
 * 
 * * * How to use .env file :-
              
              - .env file represents an Environment Variable file.

              - That is used to hide data or information from other developer or person.

              - And, this file is always added on the .gitignore file.
 * 
 */


// // // --------------------------------------------------------------------------------------------


/**
 * 
 * * * How to use .env-example file :-
              
              - .env-example file also respresents the Environment Variable file.

              - But, it is different from the .env file because it shows the half details of the files and hide the sensitive data or information espically the values.
 * 
 */



// // // --------------------------------------------------------------------------------------------


/**
 * 
 * * * How to use npm run dev to get rid of node --watch app.js to start the server :-
 * 
              - The package.json file have this scripts tag i.e., (mention below). 

              - "scripts": {
                            "test": "echo \"Error: no test specified\" && exit 1"
                            },

              - To make the server command to run directly writting this line i.e., (npm run dev). We have to do some changes in the package.json file especially the scripts tags.

              - "scripts": {
                            "test": "echo \"Error: no test specified\" && exit 1",
                            "dev": "node --env-file=.env --watch app.js"
                            },

              - Mentioning of this dev or any other name also works the same thing ("dev": "node --env-file=.env --watch app.js") 
 * 
 */

// // // --------------------------------------------------------------------------------------------


// // // --------------------------------------------------------------------------------------------