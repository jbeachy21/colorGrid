var recentlyChanged = [];


function changeColor() {
    
    let ids = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16"];
    let random = Math.floor(Math.random() * 16);
    let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#660099", "#ff9900"];
    let whichColor = Math.floor(Math.random() * 10);
    let id = ids[random];
    let color = colors[whichColor];
    console.log(`Before everything : ${id} and recentlyChanged: ${recentlyChanged[recentlyChanged.length-1]}`);
    if(id === recentlyChanged[recentlyChanged.length - 1]) {
        console.log(`Inside if block id: ${id} and recentlyChanged: ${recentlyChanged[recentlyChanged.length-1]}`);
        recentlyChanged.pop();
        
    }
    else {
        console.log(`Inside else blockid: ${id} and recentlyChanged: ${recentlyChanged[recentlyChanged.length-1]}`);
    
        
    
        let box = document.getElementById(id);
        // console.log(box["backgroundColor"])
        
    
        box["style"]["backgroundColor"] = color
    
        recentlyChanged.push(id); 
        return recentlyChanged;
    }
    setTimeout(function() {
        console.log(`Outside control statement id: ${id} and recentlyChanged: ${recentlyChanged[recentlyChanged.length-1]}`);
    
        
        
        let box = document.getElementById(id);
        // console.log(box["backgroundColor"])
        
        
        box["style"]["backgroundColor"] = color
        
        recentlyChanged.push(id); 
        return recentlyChanged;
        

    },2000)
    
    
}
setInterval(changeColor, 250);
 
