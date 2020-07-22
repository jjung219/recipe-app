import React from 'react'

const RecipeCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit</div>
                    <div className="ui basic red button">Remove</div>
                </div>
            </div>
        </div>
    );

}

export default RecipeCard