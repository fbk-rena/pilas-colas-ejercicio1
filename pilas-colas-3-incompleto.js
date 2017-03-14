var pregunta = parseInt(prompt("Cuantos usuarios va a ingresar"));

do{prompt("Cual es tu nonmbre?");
  }while (0 <= pregunta);

function Queue() {
 this.dataStore = Array.prototype.slice.call(arguments, 0);
 this.enqueue = enqueue;
 this.dequeue = dequeue;
 this.empty = empty;
 this.print = print;

 function enqueue (element) {
   this.dataStore.push(element);
 }
 function dequeue () {
   return this.dataStore.shift();
 }
 function empty () {
   return this.dataStore.length == 0;
 }
 function print(element) {
   return console.log(this.dataStore);
 }
}
