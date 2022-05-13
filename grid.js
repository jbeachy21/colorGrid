var recentlyChanged = [];

function eligible() {
    recentlyChanged.pop();
    return recentlyChanged;
}
function changeColor() {
    setTimeout(eligible, 2000);
   
    let ids = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16"];
    let random = Math.floor(Math.random() * 17);
    let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#660099", "#ff9900"];
    let whichColor = Math.floor(Math.random() * 10);
    let id = ids[random];
    let color = colors[whichColor];
    
    let box = document.getElementById(id)["style"];
    console.log(box["backgroundColor"])
    
    box["backgroundColor"] = color
    
    recentlyChanged.push(ids[random]); 
    return recentlyChanged;
}
setInterval(changeColor, 250);
 



