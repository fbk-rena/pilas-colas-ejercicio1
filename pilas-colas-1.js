
var nombres = ["Amalia", "Nallely", "Rena", "Macky", "Nohemi"];
var apellidos = ["Rivera", "House", "Martinez", "Solorzano", "Guzman"];

function Stack(){


 this.push = function (element) {
   nombres.push(element);
 };
 this.pop = function () {
     return nombres.pop();
 };
 this.peek = function () {
   return nombres[nombres.length - 1];
 };
 this.isEmpty = function () {
   return nombres.length == 0;
 };
 this.size = function () {
   return nombres.length;
 };
 this.clear = function () {
   nombres = [];
 };
 this.print = function () {
   return console.log(nombres.toString());
 };
}

var nombre = [];
while(nombres != 0){
 var completo = nombres.pop() + " " + apellidos.pop();
 nombre.push(completo);
};
console.log(nombre);


//var nombre = [];

//nombre.push("Amalia");
//nombre.push("Nallely");
//nombre.push("Rena");
//nombre.push("Macky");
//nombre.push("Nohemi");



//while(nombres != 0){ 
  //nombre.push(nombres.pop() + " " + apellidos.pop());
}
 console.log(nombre);