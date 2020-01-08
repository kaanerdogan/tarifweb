import React from 'react';

const Recipe = ({title, calories, image}) => {
    return(
        <div>
            <h1>{title} Tarifi</h1>
            <p>Kalori: {calories}</p>
            <img src={image} alt={title}/>
        </div>
    );
}

export default Recipe;
