# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [X] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  *`React PropTypes`: Are used in validating data types and catching bugs of values being passed to a component through props*

  *`Why PropTypes`: It makes it easy to catch bugs caused by passing wrong data type to a component (like a string in a Boolean space). And it makes debugging of application easier and throw specific error with a good formated error message and line of code where error occurred*

- [X] Describe a life-cycle event in React?

  *`life-cycle event`: When developing in react, every component follows a cycle from when it's created and mounted to the DOM to when is unmounted and destroyed. React provides hook's methods that get called automatically at each point in the life cycle of a component e.g componentDidMount()*

- [X] Explain the details of a Higher Order Component?

  *`Higher Order Component` is a function that takes in a component as an argument and returns back the component based on the logic written in the function declaration and it allows for component re-useability. `NOTE`: Higher Order Component is just a component `Architecture design pattern` which is not part of react library just a concept*

- [X] What are three different ways to style components in React? Explain some of the benefits of each.

  *`Using CSS`: this is declaration of a css file and importing it in to a specific component and get injected into the global application scope*

  *`Using Less`: this is is same with vanilla css but must be configured in the webpack configuration file with loader for transcompilling into the global scope and if not using create-react-app, it must be configured*

  *`Using styled-component`: this is more efficient, concise and allows structure and design (css styles) more maintainable and don't pollute the global app styles and prevent style conflict(specificity). It's a package that must be installed through npm and import into where we want to use it.*


## Project Setup

Follow these steps to set up your project:

- [X] Create a forked copy of this project.
- [X] Add your project manager as collaborator on Github.
- [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.
- [X] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [X] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [X] Add your project manager as a reviewer on the pull-request
- [X] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [X] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [X] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [X] You should now be able to filter cards using your tabs!
- [X] Make sure all of your props being passed are validated using PropTypes.
- [X] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [X] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [X] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [X] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
