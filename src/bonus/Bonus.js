import { useState } from 'react';




 function Bonus (){
const letters =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const [nextLetter, upOneLetter] = useState(0);
return(
    <div>
        <h1>{letters[nextLetter]}</h1>
        <button onClick={() => upOneLetter(nextLetter + 1)} >Next Letter</button>
    </div>
);
 }
 
 
 
 
 
 
 
 export default Bonus