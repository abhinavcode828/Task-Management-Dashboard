### Task Management Dashboard

This project is a GitHub Repositories Explorer that allows users to browse repositories from a specific GitHub organization. It fetches data from GitHub's API and displays a repository listing, with the ability to search through them. You can also view more detailed information for each repository, such as:
Repository name
Description
Number of forks, open issues, and watchers
Primary language
Link to the repository on GitHub

### Features:

List Repositories: Displays a list of repositories fetched from the GitHub API.
Search Repositories: A search bar allows users to filter repositories by name.
View Repository Details: Clicking on a repository provides more detailed information like forks, watchers, issues, and language.
Responsive Design: Built with a mobile-first approach, ensuring the app works across all device sizes.
Code-Splitting: Pages are lazy-loaded to optimize performance, resulting in faster loading times.
Error Handling: Gracefully handles and displays errors if API calls fail.

### Technologies Used:

The following technologies were used to build this project:

React: The core library for building user interfaces with a component-based structure.
CSS: For responsive styling and layout of the components.
Native Fetch API: For making HTTP requests to communicate with the GitHub API.
React Router: To manage navigation between the home page and the repository details page.
PropTypes: For prop validation, ensuring the components receive the correct data types.
Lazy Loading: Implemented for dynamic imports to ensure that components are loaded only when needed, improving performance.

### Why These Libraries?

React was chosen for its flexibility and ease of creating reusable UI components.
Native Fetch API was chosen for simplicity, as it is built-in to modern browsers and provides a lightweight way to handle HTTP requests.
React Router allows for seamless navigation without full-page reloads.
PropTypes helps with prop validation, making the app more robust by ensuring components receive the expected data.

### Installation and Running the Project

Prerequisites:
You need Node.js and npm (or yarn) installed on your machine.
A GitHub account for accessing the GitHub API.

Step-by-Step Instructions:

1. Clone the Repository:
   Step 1: Clone the Repository
   Open your terminal (or command prompt).
   Run the following command to clone the repository from GitHub:
   git clone https://github.com/bhawneetkaur13/github_repos_website.git

2. Step 2: Navigate to the Project Directory
   After the repository is cloned, navigate to the project folder by using the cd command:
   cd github_repos_website

3. Step 3: Install Dependencies
   Run the following command to install all the required dependencies:
   npm install

4. Step 4: Set up Environment Variables

   1. In the root of your project, create a .env file by running:
      touch .env (for mac)
      OR
      echo. > .env (for windows)
   2. Open the .env file and add the following line:
      REACT_APP_GITHUB_API=https://api.github.com/orgs/godaddy/repos

5. Step 5: Run the App
   Run the following command to start the development server:
   npm start

6. Step 6: Run Tests
   To ensure everything is working correctly, you can run the tests by executing:
   npm test

### Time Constraints and Omissions:

While the current version of the project provides core functionality, there are some features that could be added in future iterations:

Pagination: If the number of repositories is large, implementing pagination would improve the user experience.
Advanced Search: Expanding the search functionality to filter repositories by language, forks, or watchers would give users more control over their search.
