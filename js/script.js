import { citations } from "./citation.mjs";

const button = document.querySelector("button");
const p = document.querySelector("p")
button.addEventListener("click",balancerCitation)

/* 
    @return {string} randomCitation
*/
function selectCitation(){
    let random = ~~(Math.random() * citations.length);
    let randomCitation = '<p>' + citations[random] + '</p>' + '<span>by Jean-Claude Van Damme</span>';
    console.log(randomCitation);
    return randomCitation;
    
}
selectCitation()

function balancerCitation(){
    
    p.innerHTML = selectCitation();
}


