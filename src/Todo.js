import React from "react";
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
      
     export const Garage =() =>  {

      
        const Cars = [
          {id: 1, brand: 'Ford'},
          {id: 2, brand: 'BMW'},
          {id: 3, brand: 'Audi'},
          {id: 3, brand: 'Totyota'},
          {id: 3, brand: 'Nissan'},
        ];

        return (
            <>
              <h1>Who lives in my garage?</h1>
              <ul>
                {Cars.map((car) => <Car key={car.id} brand={car.brand} />)}
              </ul>
            </>
          );
    }
       
      
