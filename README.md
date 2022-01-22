# Sketch Document Viewer 💎

A web app to view Sketch documents and associated artboards.

## How to run the app locally

* Clone the repo
`git clone https://github.com/GiuliaTeggi/sketch-test.git`
* Once inside the project directory, type `npm install` or `npm i` in the terminal to download the Node modules
* Type `npm run start` to run the app in development mode
* You should now be able to view the app on http://localhost:3000/
* To visit a document page, go to http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992 or http://localhost:3000/document/40432a93-5434-4059-87b9-
545fd1ad6ee0

## User stories
- As a user I can go to a document page where to view all artboards in the document. The artboards must show as thumbnails.
- As I user I can click on an artboard thumbnail to go to the artboard page, where the artboard is shown in its original size (or fit to screen size).
- As a user I can navigate through the different artboards using the navigation controls on the artboard page.
- As I user I can return to the document page from the artboard page by clicking on the close button in the top bar.


## My solution

I decided to develop this app using the Create React App package in order to speed up development and because the use case was suitable for a client side rendered solution. I have then installed React Router in order to create the routes needed to render the two pages mentioned in project requirements - the Document and Artboard pages. Both routes load the artsboards data coming from the graphQL api (`https://graphql.sketch.cloud/api`) so not to depend on each other, allowing for a future extension of the project. In addition to the project requirements, I have added a Home page to handle the application base path (`/`) and a NotFound page to handle any non existing route.

The app was developed desktop-first assuming the majority of the document viewer users would be desktop users.

Regarding the components that make up the application, I have attempted to organise them following atomic design principles, dividing them in pages, templates, organisms, molecules and atoms. There are several valid ways to structure components folders, atomic design is a methodology I've been following lately which I think is clearer and easier to stick to than others. Therefore, the application pages (`Artboard`, `Document`, `Home` and `NotFound`) can be found in the `pages` folder, the `PageLayout` shared by all of them is in the components `templates` folder, the `ArtboardHeader` component, which includes the components to navigate between artboards is in `organisms`, the `ArtboardsList` component is in `molecules` and the `Heading` component can be found in `atoms`.

The application 'global' styles, that is styles shared across the pages including the application css variables, are in `styles/GlobalStyles` and the svg icons in the `assets` folder.

The overall folder structure looks like this: 

    - public 
    - src
        - assets
        - components 
            - atoms
            - molecules
            - organisms
            - templates
        - graphql
            - queries
            - index.js
        - pages
            - ArtboardPage
            - DocumentPage
            - HomePage
            - NotFoundPage
        - routes
             - index.js
        - styles
             - GlobalStyles
        - App.js
        - index.js
        
## If I had more time...
- I would test the code thoroughly using Jest and the React Testing Library.
- I would look into ways to opmisise the loading of the artboards thumbnails, such as by lazy loading the offscreen images, and reduce the cumulative layout shift they cause, such as by reserving the space they occupy.
- I would look into refactoring the styles. It's the first time I have the chance to use CSS-in-JS and styled components, which I had wanted to try out for a while (usually my go-to css framework is SASS). I have more to learn on the topic.

## Tech Stack
 - React
 - React Router
 - GraphQL
 - Styled Components

 ## Preview
 
 ![document-viewer](https://user-images.githubusercontent.com/30217557/150651799-27e83921-2dd4-4315-a2d5-602f5a70ebc4.PNG)
![document-viewer-2](https://user-images.githubusercontent.com/30217557/150651800-24a8d8bb-c372-48a2-ac20-dd6d5b342818.PNG)
