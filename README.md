#### Problem : A retailer offers a rewards program to its customers, awarding points based  on each recorded purchase.  A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction  (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total. 
- Use React JS (do not use TypeScript) 
- Simulate an asynchronous API call to fetch data 
- Make up a data set to best demonstrate your solution 
- Check solution into GitHub 

# How to run the Project 
npm i                  || install software dependencies 
npm start              || start the project 
npm run cypress:open.  || run end-to end test cases

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Basic idea representation on figma 
[https://www.figma.com/file/sllQgy2bPlBLqlN8pTqYAD/Untitled?node-id=2%3A2]

# How is project architecture created 
                                                 __________
                                                |          |
                                                |index.js. |
                                                |__________|
                                                      |
                                                      |
                                                 __________
                                                |          |
                                                |. App.js  |
                                                |__________|
                                                      |
                                                      |
                            |------------------------------------------------------|
                            |                                                      |
                            |                                                      |
                       |----------|                                           ------------
                       |          |                                           |           |
                       |. Navbar  |                                           |   Body.   |
                       |__________|                                           |___________|
                            |                                                       |
                            |                                                       |
                            |                                                       |
                        /------------\                                        |-------------|
                       /        |     \                                       |             |
                      /.        |.     \                                      |             |
                     /.         |.      \                                     |             |
                    /.          |.       \                                    |             |
                   /.           |.        \                                   |.            |
                  /             |          \                                  |.            |
                Logo        Nav Links   Profile Menu                     Typography     Table Design
                                                                            with            |
                                                                          Dropdown          |
                                                                                            |
                                                                                            |
                                                                                            |
                                                                                /---------------------------\      
                                                                              /              |.              \
                                                                             /               |                \
                                                                            /                |                 \
                                                                           /                 |                  \
                                                                     Rewad Logic          Multiple           End-to-end
                                                                        /               custumer data.        test-case
                                                                       /                   listing.         few scnerios
                                                                      /
                                                                     /
                                                                    / 
                                                             Sample Data
                                                            (sampledata.json)

Code based is created in Component based architecture.



# Few practices followed in the project
- Eslint locally configured to have better code readability
- Removed all commented code
- removed all console.log
- if required comment added at logical places
- global cameCase consistency followed
- component level codebase 
- sample data added for testing the logic
- regulary updated readme file
