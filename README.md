# Overall project
This project is part of my Software Systems Development curriculum. This project is part of two modules, Agile Development, and Web App Development. In this project I am showcasing a cypress testing along with custom commands. 

# Attention
In one of the custom commands it uses an email for the signup. If this email is already in the Firebase then signup won't work but login will.

# Tools used
* Cypress
* GitLab CI 
* Git
* Webpack

# Additonal Features
* Bundling/Code splitting
* Cypress Custom Commands

# Useful Scripts
In the project directory, you can run:

## Git Scripts
### `git log`
Show all my git log history in each branch.

## React Scripts
### `npm start`
Start up react website. It can be visited here: [localhost](http://localhost:3000/).
### `npm run build`
Creates a build directory with a production build of your app.
### `npx serve -s ./build/ -l 3000`
This command is to quickly create a local server that serves the static files from the ./build/ directory on port 3000: [localhost](http://localhost:3000/)

## Cypress Scripts
### `npx cypress open`
This command is used to open the Cypress Test Runner.

# What I have done.
## Below I have attached some screenshots to showcase the tasks being completed.

1. **Test: Favorite Movies**

   <img src="public/images/Screenshot 2023-11-18 180033.png" alt="Image" width="700" height="500">

   * Currently my **custom commands** are similar to cypress test. One example is it shows a minimum of ten actors on the webpage.

2. **Custom Command: Show Minimum of Ten Actors**

   <img src="public/images/Screenshot 2023-11-18 182014.png" alt="Image" width="700" height="500">

   * I have around **ten** Cypress tests over different files. Some examples of tests run are; favorite movies. Another test adds a review. I have other tests that remove these.

3. **Code Splitting in `src\pages` All files**

   <img src="public/images/Screenshot 2023-11-18 182102.png" alt="Image" width="700" height="500">

   * I have **code splitting** in all my files that are in the `src\pages` folder.

4. **Git Branches and Merging**

   <img src="public/images/Screenshot 2023-11-18 182205.png" alt="Image" width="700" height="500">

   * I have **four branches** in my GitLab. I have merged them into my main repo.
   * If you type `git log` there will be a list of all my commits to each different file.

## Below I have made a list of new features in my Web App Assignment.
* I have created a trending and latest pages.
* I have created an actors page which displays actors and when clicked on, you can see the information of the movie they were in.
* I have create a login and sign up using Firebase. You can check if the login credentials worked by going into the console.
* I have create a button when clicked will show you a list of actors in the repected films.
** Attempted to do a filter by rating but it did not work correctly.

