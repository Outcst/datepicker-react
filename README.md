# Date Picker Calculation

This is a React.js application with "moment" and "date-fns" libs to work with a date.

### Hierarchy

- `README.md` - project description
- `.git` - git repository
- `.gitignore` - list of files ignored by git
- `package.json` - the main project configuration with all dependencies, scripts, and paths
- `package-lock.json` - automatically generated file by nmp package manager
- `tsconfig.json` - TypeScript configuration file
- `/public` - directory with app static files (e.g. images)
- `/src` - directory with files with project business logic

### How do I get set up it locally in DEV mode?

- Install the last versions of `node` and `npm` to your OS
- Go to the root app folder
- Install all dependencies via `npm install`
- Run the project via `npm run start`

### Notes about the app logic:

This project has 2 versions of realization:
- With library moment.js lib.
- With library date-fns lib.

The moment.js library does not have the capabilities that the date-fns library provides. Therefore, it was decided to implement two approaches to demonstrate two realizations.

Sunday calculator allows you to calculate the number of Sundays in a specified period.

- Dates must be at least two years apart.
- The start must be in the future and cannot be a Sunday.
- Watch for changes to picking dates and when two valid dates are selected then display the number of Sundays between the two dates (including the days selected).