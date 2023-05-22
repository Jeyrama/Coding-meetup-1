/*
You will be given an array of objects representing data about developers who have 
signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

Notes:
  The format of the strings will always be Europe and JavaScript.
  All data will always be valid and uniform as in the example above.
*/



// Solution

function countDevelopers(list) {
  return list.reduce((count, dev) =>
    (dev.continent === 'Europe' && dev.language === 'JavaScript')
      ? count + 1 : count
    , 0);
}

// or

const countDevelopers = list => (
  list.filter(({continent, language}) => continent === 'Europe' && language === 'JavaScript').length
)