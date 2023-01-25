import React from 'react'

export function shuffleArray(arr){
		
    const copy = [...arr];
   
    const output =[] ;
    
    while (copy.length > 0) {
       
        output.push(copy.splice(Math.floor(Math.random() * copy.length), 1));
    }
    
    return output;
};
