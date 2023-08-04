//A map holds key-value pairs where the keys can be any datatype.
//A Map remember the orignal insertion order of the key.
//A Map has a property that represents the size of the map.
/* 
Create a map
new Map()
Map.set()
*/

//first method
const fruits=new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
console.log(fruits);
//set map values...
fruits.set("apples",900)
console.log(fruits);
//Map.get() method getss the values of a key in Map:
console.log(fruits.get("apples"));//Returns 500
console.log(fruits.size);
console.log(fruits.delete("apples"));
//fruits.clear() remove the all the element from a Map:
//fruits has() method returns true if a key exits in Map: