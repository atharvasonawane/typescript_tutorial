// Variable is set to any when not type inference declared
//let hero;                  //variable will be of type any
var hero; //Strictly it is string(variable can be of type string only)
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);
