# SWAPI | Laravel - React app 

This project is an application that utilizes the provided API endpoint to present users with an interactive user interface for exploring information from the Star Wars universe. The application is built as a no-refresh, Single Page Application using React.js.

## Features

The Star Wars API Explorer supports the following features:

1. **View People:** Users can browse and view a list of people from the Star Wars universe. Each person's details, including their name, gender, height, and other relevant information, are displayed.

2. **View Planets:** Users can explore a list of planets featured in the Star Wars universe. The application provides information such as the planet's name, climate, terrain, population, and more.

3. **View Starships:** Users can access a list of starships used in the Star Wars universe. Details about each starship, including its name, model, manufacturer, and other specifications, are available for exploration.

4. **Search for a Person:** The application enables users to search for a specific person within the Star Wars universe. By entering a person's name in the search bar, users can retrieve detailed information about that individual.

## Getting Started 

To run the web application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/CarlosGoncalves18/star-wars-test.git`
2. In the terminal run `php artisan serve` with composer package manager to run the server with laravel
3. Open a new terminal 
4. Navigate to the frontend directory: cd star-wars-front
5. Install the dependencies: `npm install`
6. Start the development server: npm run serve
7. Open your web browser and access the application at `http://localhost:3000`
   
## Pages
The web application contains:

* "/": Characters' page;
* "/planets": Planets' page;
* "/starships": Starships' page;
