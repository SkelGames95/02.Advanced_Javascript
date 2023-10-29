const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

const person2 = person1;
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// We are obtaining the same result for person1 and person2 because we are using the same object with two different variables. Comparing person1 with person2 we are saying they are the
// same object and then trying to modify one of them referring to the "person2" variable, we are modifying the content of the object itself, so undepending on which variable we are
// calling later, we are going to obtain the same result.