function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

const exampleObj = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(hasProperty(exampleObj, "age")); 
console.log(hasProperty(exampleObj, "country")); 