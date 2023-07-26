const RecipeAuthor = () => {
   let authorLink = "https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/";
   let authorPhoto = "https://www.thechunkychef.com/wp-content/uploads/2021/02/sidebar-440x259.jpg";
   let authorName = "Amanda";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Butter", "Flour", "Pasta", "Cheese", "Milk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Description</h1>
            <p>Boil the pasta, drain.
Make the cheese sauce by combining a fat (butter), and starch (flour), then whisking in the milk products.
Cook the sauce until it’s nice and thick.
Add in shredded cheeses, stir well.
Combine cheese sauce with cooked pasta.
Transfer half of the mac and cheese to a baking dish, sprinkle with more shredded cheese.
Top with the rest of the mac and cheese, top with more shredded cheese.
Bake and prepare to thoroughly enjoy!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-serving-680x1020.jpg" alt="Mac and cheese" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}