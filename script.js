let random=()=>{
    let num=Math.floor(Math.random()*4)+1;
    return num;
}

let arrayEqual=(arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }

    return true
}


let start=document.querySelector(".btn");


let red=document.querySelector('.red');
let green=document.querySelector('.green');
let blue=document.querySelector('.blue');
let yellow=document.querySelector('.yellow');

let game_arr=[];
let inp_arr=[];

let fun=()=>{
    let num=random();
    game_arr.push(num);

    if(num==1){
        red.style.backgroundColor="white";

        setTimeout(()=>{
            red.style.backgroundColor="red";
        },500)
    }

    else if(num==2){
        green.style.backgroundColor="white";

        setTimeout(()=>{
            green.style.backgroundColor="green";
        },500)
    }

    else if(num==3){
        blue.style.backgroundColor="white";

        setTimeout(()=>{
            blue.style.backgroundColor="blue";
        },500)
    }

    else if(num==4){
        yellow.style.backgroundColor="white";

        setTimeout(()=>{
            yellow.style.backgroundColor="yellow";
        },500)
    }

    console.log(game_arr);
    
    
}

let checkinp=()=>{
    if(game_arr.length==inp_arr.length){
        if(arrayEqual(game_arr,inp_arr)==true){
            console.log('great nxt level');
            let h1=document.querySelector('h1');
            h1.innerText=`Level ${(game_arr.length)+1}`
            inp_arr=[];
            setTimeout(fun,1000);
            
            
        }
        else{
            console.log('game over');
            let h1=document.querySelector('h1');
            h1.innerHTML="GAME OVER";
            start.innerHTML="Try Again"
            let h2=document.querySelector('h2');
            h2.innerHTML=`Your score was: ${(game_arr.length)-1}`
            game_arr=[];
            inp_arr=[];
            
        }
    }
}


let inp=()=>{
    red.addEventListener('click',()=>{
        inp_arr.push(1);
        checkinp()
    })
    green.addEventListener('click',()=>{
        inp_arr.push(2);
        checkinp()
    })
    blue.addEventListener('click',()=>{
        inp_arr.push(3);
        checkinp()
    })
    yellow.addEventListener('click',()=>{
        inp_arr.push(4);
        checkinp();
    })
}


start.addEventListener('click',()=>{
    start.innerHTML="START"
    let h1=document.querySelector("h1");
    h1.innerText="Level 1"
    game_arr=[];
    inp_arr=[];
    fun();
})

inp();



