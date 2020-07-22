import React from 'react'
import ReactDOM from 'react-dom'
import SearchFilter from './SearchFilter'
import RecipeDetail from './RecipeDetail'
import AddRecipeButton from './AddRecipeButton'
import RecipeCard from './RecipeCard'

const App = () => {
    return (
        <div>
            <div>
                <h1>Recipe App</h1>
            </div>
            <SearchFilter />
            <RecipeCard>
                <RecipeDetail
                    recipeName="Jambalaya"
                />
            </RecipeCard>
            <RecipeCard>
                <RecipeDetail
                    recipeName="Bulgogi"
                />
            </RecipeCard>
            <RecipeCard>
                <RecipeDetail
                    recipeName="Tteokbokki"
                />
            </RecipeCard>
            <AddRecipeButton />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))