import './styling.css';

function ClickedButton() {
  function handleRemoveClick(){
    alert("You are removing this pin from Board!");
  }
  return(
    <button id = "clickedButton" onClick={handleRemoveClick}>
      Saved
    </button>
  );
}


export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
