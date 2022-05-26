/**
 * @author n0ct3ri4 <contact@wlvs.fr>
 * @description Fake Hacker View, lines of random characters.
 * @license "MIT License"
 */

const { v4: uuid } = require("uuid");
const { green } = require("colors");

while (true) {
  console.log(
    green(
      `${uuid().slice(
        3,
        Math.floor(Math.random() * uuid().length)
      )}${uuid().slice(0, Math.floor(Math.random() * uuid().length))}`
    )
  );
}
