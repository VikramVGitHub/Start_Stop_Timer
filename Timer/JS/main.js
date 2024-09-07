let paraElement = document.getElementById("stop_timer");
paraElement.textContent="00 : 00 : 00"
let hour = 0;
let min = 0;
let sec = 0;
let second;
let minute;
let hours; 
let a=1;
let stoptimer = ()=>{
    sec+= 1;
    if(sec === 60){
        sec =0;
        min+= 1

    }
    if(min === 60){
        min =0;
        hour+= 1

    }
    if(hour === 24){
        hour = 0;
    }

     second = sec < 10 ? "0"+sec : sec;
     minute = min < 10 ? "0"+min : min;
     hours = hour < 10 ? "0"+hour : hour;

    paraElement.textContent = `${hours} : ${minute} : ${second}`;
}
 let SetIn;
function startFun(){
    SetIn =  setInterval(()=>{
        stoptimer();
    },1000)
}

function stopFun(){
    localStorage.setItem("hour",hour);
    localStorage.setItem("min",min);
    localStorage.setItem("sec",sec);
     
    clearInterval(SetIn)

}

let reSet=()=>{
     clearInterval(SetIn)
     hour = 0;
     min = 0;
     sec = 0;

     second = sec < 10 ? "0"+sec : sec;
     minute = min < 10 ? "0"+min : min;
     hours = hour < 10 ? "0"+hour : hour;
     paraElement.textContent = `${hours} : ${minute} : ${second}`;
    
     localStorage.removeItem("hour");
     localStorage.removeItem("min");
     localStorage.removeItem("sec");
}


