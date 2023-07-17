import './styles.css';

function Button() {

   function onLearnMore(){
      alert("Splash the water!")
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;