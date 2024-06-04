// generate a random color
const randomColor =  function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i<6; i++){
         color += hex[parseInt(Math.random()*16)];        

    }
    return color;

};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,100);
}

     function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId)   //setInterval is stopped but its value is still there
    intervalId = null;          //so we have to nullify the intervalId value
};

document.querySelector('#start').addEventListener('click', startChangingColor) // passing refferemce only not execution
document.querySelector('#stop').addEventListener('click', stopChangingColor) 