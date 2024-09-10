// operacje są wykonywane nieblokująco. Zamiast czekać na zakończenie operacji,
//Node.js kontynuuje wykonywanie innych zadań, a wynik operacji asynchronicznej zostanie obsłużony później,
//Operacje asynchroniczne pozwalają na wykonywanie innych zadań w trakcie oczekiwania na zakończenie czasochłonnych
//operacji, co zwiększa wydajność.
//W przypadku serwera Node.js, asynchroniczność pozwala na obsługę wielu żądań jednocześnie, co jest bardziej
//efektywne. Zamist tego async await.
const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result; ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
