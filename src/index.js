const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "I'm sorry",
    "Wubba Lubba Dub Dub",
    "I am Root. Resistance is futile",
  ];
  
  const funnyCommit = () => {
      const reverse = messages.map((string) =>  string.split('').reverse().join(''));
    const message = reverse[Math.floor(Math.random() * reverse.length)];

    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };