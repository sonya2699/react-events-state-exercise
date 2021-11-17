
import { useState } from 'react';

function Exercise (){
    const [num, setNum] = useState(1);
    // 2d
    const addNum = () => setNum(num +1);
return (
    <div>
    <button onClick={() => alert(`{Congrats! You have clicked the button!}`)}>CLICK HERE</button>
        {/* 2b + 2e */}
        <button onClick={addNum}>STATE</button>
        {/* 2f */}
        <h1>{num}</h1>
    </div>
);

}










export default Exercise