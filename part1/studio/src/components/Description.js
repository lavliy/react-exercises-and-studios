import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorPhoto = "https://static.toiimg.com/photo/msid-87774158/87774158.jpg";
    let authorLink = "https://www.youtube.com/@ChefDamusMulticuisine";
    let authorName = "Chef Damu"
    return(
        <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Chef Damu" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Chef Damu youtube channel</a> 
      </div>
   </div>
    )
}

const RecipeDescription = () =>{
   return(
      <div> 
      <div>
         <h1>Chicken thokku</h1>
         <p>In a pan dry roast all the ingredients from table. You need to dry roast over low flame… because some may turn brown soon especially poppy seeds. If you have the patience you can roast them separate… i did everything together till they turn light brown. Once done, let them cool completely.
  Make a fine powder using a mixer jar. Grind as much as you can to make it a fine powder. Keep this ready.
  In another wide pan… heat oil, season with cumin seeds and few curry leaves. Now add in chopped onion, green chili, crushed ginger and garlic. Saute well over low medium flame. The onions has to cook thoroughly over medium flame until light golden and crisp.
  Now add in turmeric powder, chicken and little sprinkle of salt. Saute well to mix everything.
  Now cover with lid and cook for 5 minutes over low medium flame. The chicken will release water and it will cook in that steam, do not add any water.
  When done, add in the ground spice powder along with tomatoes and the remaining salt.
  Saute well until masala blends with the chicken. If you have more bony parts or red meat then cover again and cook further until the chicken gets cooked thoroughly.</p>
      </div>
      <RecipeAuthor />
   </div>
      )
}
 export default RecipeDescription;