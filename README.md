# Notes With Express - Module 11: Express.js
[text](../../lessons/11-Express/02-Challenge/README.md)

## Task

The assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. Create the back end, connect the two, and then deploy the entire application to Render.

## Screenshot
![alt text](image.png)

## Links

*  The URL of the functional, deployed application.(https://notes-with-express-4d95.onrender.com/)

*  The URL of the GitHub repository, with a unique name and a README describing the project.(https://github.com/JKrech01/notes-with-express)

## Project Status
This is a work-in-progress which will be evolving over time.

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo.gif)

## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.