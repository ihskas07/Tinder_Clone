import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function TinderCards() {
    const [people, setPeople] = useState([]);    //declaring an array in react
    
    //NOT a good practice of pushing in an array in react
    // same as const people=[]
    //people.push('sakshi', 'singh')

    //GOOD practice of pushing in an array in react
    //setPeople([...people, 'sakshi','singh'])

    useEffect(() => {    //piece of code that runs based on a condition, its a list
        const unsubscribe = database.collection('people').onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
          );
    
        return () => {
          //cleanup....
          unsubscribe();
        };
      }, []);

  return (
    <div>
       <div className="tinderCards__cardContainer" >

        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}             // always give keys in react
            preventSwipe={["up", "down"]}>     
            <div style={{ backgroundImage: `url(${person.url})` }}
              className="card">
              <h3> {person.name}</h3>
            </div>
          </TinderCard>
        ))}
    </div>
    </div>
  );
}

export default TinderCards