npm install - install all dependencies
npm start - start project

My project has 2 version of realization:
- With library Moment.js
- With library date-fns

The moment.js library does not have the capabilities that the date-fns library provides. Therefore, it was decided to implement two approaches


Sunday calculator allows you to calculate the number of Sundays in a specified period.
- Dates must be at least two years apart
- The start must be in the future and cannot be a Sunday
- Watch for changes to the picking of dates and when two valid dates are selected then display the number of Sundays between the two dates (including the days selected)