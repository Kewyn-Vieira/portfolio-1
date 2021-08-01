# About the template
This is a modular website template where you can just merge the branches that have the technologies you will need for your project.

This template currently suports:

 - HTML
 - Handlebars
 - Javascript
 - Typescript
 - CSS
 - Sass - SCSS

## How to start
This template requires you to have [Node](https://nodejs.org/en/).

To start you will need to clone the repository:
	Open a terminal in your folder of choice and type 
	`$ git clone https://github.com/Kewyn-Vieira/website-template`

Choose the template type you will use and follow its instructions

### HTML
Open a terminal in the root folder
`$ git rebase origin/HTML`
This command will take you to the HTML branch. The HTML comes with Javascript and CSS by default.

#### Install Sass
Open a terminal in the root folder
`$ git merge origin/Sass`

#### Install Typescript
Open a terminal in the root folder
`$ git merge origin/Typescript -X rename-threshold=25`

If you wish to install both Sass and Typescript, a conflict will happen. To solve it see section  **[Merge Conflicts](#id1)**.
### Handlebars
`$ git rebase origin/Handlebars`
This command will take you to the HTML branch. The HTML comes with Javascript and CSS by default.

#### Install Sass
Open a terminal in the root folder
`$ git merge origin/Sass`

#### Install Typescript
Open a terminal in the root folder
`$ git merge origin/Typescript -X rename-threshold=25`
`$ npm i --package-lock-only`
`$ git add .`
`$ git merge --continue`
A text file will open. To finish installation just close it.

If you wish to install both Sass and Typescript, a conflict will happen. To solve it see section **[Merge Conflicts](#id1)**.

## Merge conflicts<a id="id1"></a>

When merging branches conflicts between `package-lock.json` files might happen, but it's easy to solve them:
`$ npm i --package-lock-only`
`$ git add .`
`$ git merge --continue`
A text file will open. To finish installation just close it.

## How to start developing
After switching to the branch with the template type you wish to work with and merging with all the branches you will use, you can start your development server doing the following:

Install modules → Open a terminal in your root folder and type
`$ npm i`

Start the server → After installing the modules, type 
`$ npm run dev`

Open the page → **Ctrl + Click** over the link given by the terminal