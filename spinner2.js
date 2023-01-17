const spinner = ['|', '/', '-', '\\', '|'];
let timer = 100;
let i = 0;

while (i < 3) {
  spinner.map(line => setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, timer += 200));
  i++;
};

setTimeout(() => {
  console.log();
}, timer);