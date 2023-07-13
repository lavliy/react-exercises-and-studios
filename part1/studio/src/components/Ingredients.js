import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    let ingredients = ['Chicken', 'Tomato', 'Onion', 'Greenchilli', 'Wholespices', 'Curryleaves', 'Oil', 'Water', 'Salt', 'Chillipowder', 'Turmericpowder', 'Gingergarlicpaste']
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
           <li>{ingredients[6]}</li>
           <li>{ingredients[7]}</li>
           <li>{ingredients[8]}</li>
           <li>{ingredients[9]}</li>
           <li>{ingredients[10]}</li>
           <li>{ingredients[11]}</li>
        </ul>
     </div>
    )
}