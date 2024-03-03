# Front-end Be

This is a Be Front-end Technical Test. It is intended to demonstrate skills.

## Challenge

The Be Front-End Technical Test consists of building a table view with data that will come from a simulated API, in json-server.

### Technologies used

- React.js
- TypeScript
- Styled Components

NPM package management was used.

### Layout Components
The table contains the following columns:

- Image;
- Mame;
- Office;
- Admission date;
- Telephone;

You can also search the table using a search box.

![Search Boxes](https://i.imgur.com/s9CJHEv.png)

 The search allows you to filter data by position, name and telephone number.

In the mara mobile layout, the `Job`, `Admission date` and `Telephone` columns can be seen after clicking on the `down arrow`.

![Arrow to open employee data](https://i.imgur.com/GZNsxGr.png)

How is the information displayed?

![Arrow to open employee data](https://i.imgur.com/9gGnDvW.png)

The collection of employee information can be done using the `arrow` up.

![Arrow to collect employee data](https://i.imgur.com/RPPhag3.png)



### Commands to Run the Project
You were instructed to use a simulated API.
To access the data that will feed the project and run the project, do the following:

1. If you don't have it, install the [json-server](https://github.com/typicode/json-server) package;
2. Clone this GitHub repository to your machine: [git@github.com:monique282/desafio-front-end.git](https://github.com/BeMobile/desafio-front-end);
3. Enter the project folder, on your machine, and, using the command line, execute the command `npx json-server db.json`, to consume the simulated API. Remembering that you have to leave the command running in the terminal.
4. In another terminal, run the `npm install` command to install all libraries.
5. Use the .env.example file to create the .env .
6. Run the `npm run dev` command to run the project. This command provides a link from which you can open the link in your browser to interact with the project.

``````
Remembering, all the commands above must be given in the folder that corresponds to the project.
``````