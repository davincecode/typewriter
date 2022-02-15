let sentence = "hello there from lighthouse labs \n";
// sentence += "\n";
let timer = 0;

let result = [];
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}
return result;
