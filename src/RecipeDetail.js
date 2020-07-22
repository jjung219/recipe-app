import React from 'react'

const RecipeDetail = (props) => {
    return (
        <div className="recipe">
            <span>{props.recipeName}</span>
        </div>
    )
};

export default RecipeDetail