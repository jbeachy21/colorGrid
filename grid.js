recentlyChanged = [];
function changeColor() {
    if(recentlyChanged.length === 2) recentlyChanged.pop();
   
    let ids = ["#c1","#c2","#c3","#c4","#c5","#c6","#c7","#c8","#c9","#c10","#c11","#c12","#c13","#c14","#c15","#c16"]
    let random = Math.ceil((Math.random() * 16))
    let colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#FFFFFF"]
    let whichColor = Math.ceil((Math.random() * 9))
    // let boxToChangeColor = document.getElementById("grid").childNodes[random].nodeValue;
    // let boxToChangeColor = document.querySelectorAll("container").firstChild;
    // let boxId = ids[random];
    // document.getElementById(boxId).style.backgroundColor = colors[whichColor];
    const listItems = document.querySelector('div').children;
    const listArray = Array.from(listItems);
    let boxToChange = listArray[random];
    boxToChange.style.backgroundColor = colors[whichColor];

    console.log(boxToChangeColor);
    console.log(ids[random]);

    
    // backgroundColor = colors[whichColor];
    
    recentlyChanged.push(ids[random]); 
    return recentlyChanged;
}


changeColor();