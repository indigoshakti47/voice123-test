# Guess who your next voice actor will be ?

In this project a search application demo was created using React. It has the ability to search for voice actors through their name, description or category. Which is then displayed to filter the ones that follow said criteria. In order to accomplish this, the Voice123 API was used. If the user wishes to listen to a sample audio of any of the voice actors they can do so from the platform. However, to make direct contact with the actor they will need to click on their name and we will redirect them to their real profile. In order to handle all the data a fully functional pagination system was implemented. As for the design system Tailwind was used. 

## Application Set Up
-  This project requires node v 11. 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
npm install node
- Create a `.env` file in the project root directory.
- Add REACT_APP_BASE_URL=https://api.sandbox.voice123.com to the .env file.
- Run `npm install` 
- Run `npm start` 


## Worklog:

- Project Setup - 60 Min 
- Components UI - 120 Min
- API setup - 30 Min
- API integration - 60 Min
- Audio player integration - 30 Min
- Pagination. - 60 Min
- Search Algorithm -  30 Min
- Styling - 60 Min

## Future Improvements:

- Testing 
- Deployment
- Branding development (Logo)
- Modals to show more information regarding the project description
