const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./history.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the history database.');
});

db.run('CREATE TABLE events(year number, event text)', (err) => {
  if (err) {
    console.log('Table already exists.');
  } else {
    let insert = 'INSERT INTO events (year, event) VALUES (?,?)';
    db.run(insert, [1969, 'Apollo 11 lands on the Moon.']);
    db.run(insert, [2001, 'September 11 attacks.']);
    db.run(insert, [2020, 'COVID-19 pandemic spreads around the world.']);
  }
});
