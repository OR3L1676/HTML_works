import { useState } from "react";

function Person() {
  // Define the initial state
  const [person, setPerson] = useState({
    firstName: "Orel",
    lastName: "Sabash",
    address: {
      city: "Rishon Lezion",
      zipCode: "1234",
    },
  });

  // Update the state using the setPerson function inside a function or an event handler
  const updatePerson = () => {
    setPerson({
      ...person,
      firstName: "google",
      lastName: "translate",
      address: { city: "Florida", zipCode: "4321" },
    });
  };

  // Calculate the full name based on the current state
  const fullName = person.firstName + " " + person.lastName;
  const location =
    "City: " + person.address.city + ", ZipCode: " + person.address.zipCode;

  return (
    <>
      <h1>{fullName}</h1>
      <p>{location}</p>
      <button onClick={updatePerson}>Update Person</button>
    </>
  );
}

export default Person;
