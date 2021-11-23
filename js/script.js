import { citations } from "./citation.mjs";
import { imagesJCVD } from "./imagesJCVD.mjs";

const button = document.querySelector("button");
const p = document.querySelector("p")
const img = document.querySelector("img")
button.addEventListener("click",leGrandClick)

/* 
    @return {string} randomCitation
*/
function leGrandClick(){
    function selectCitation(){
        let random = ~~(Math.random() * citations.length);
        let randomCitation = '<p>"' + citations[random] + '"</p>' + '<span>by Jean-Claude Van Damme</span>';
        return randomCitation;
        
    }

    function balancerCitation(){
        
        p.innerHTML = selectCitation();
    }


    /* 
        @return {string} randomImage
    */
    function selectImage(){
        let random = ~~(Math.random() * imagesJCVD.length);
        let randomImage = imagesJCVD[random];
        return randomImage;
        
    }
    function balancerImage(){
        
        img.src = selectImage();
    }
    balancerCitation()
    balancerImage()

    
}

