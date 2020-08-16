document.addEventListener('DOMContentLoaded', ()=>{
    const playSound = (path) =>{
        let audio = new Audio();
        audio.src = `./assets/sounds/${path}.mp3`;
        audio.play();
    }
    
    const buttons = document.querySelectorAll('.content__block button');
    buttons.forEach(button =>{
        const buttonName = button.innerText.toLowerCase();
        button.addEventListener('click', ()=>{
            playSound(buttonName);
        });
    });
    
    document.addEventListener('keypress', (e)=>{
        if(e.keyCode === 1081 || e.keyCode === 113){
            document.querySelector('#qKey').click();
        }
        if (e.keyCode === 119 || e.keyCode === 1094){ 
            document.querySelector('#wKey').click();
        }
        if (e.keyCode === 101 || e.keyCode === 1091){ 
            document.querySelector('#eKey').click();
        }
        if (e.keyCode === 114 || e.keyCode === 1082){ 
            document.querySelector('#rKey').click();
        }
        if (e.keyCode === 116 || e.keyCode === 1077){ 
            document.querySelector('#tKey').click();
        }
        if (e.keyCode === 121 || e.keyCode === 1085){ 
            document.querySelector('#yKey').click();
        }
        if (e.keyCode === 117 || e.keyCode === 1075){ 
            document.querySelector('#uKey').click();
        }
        if (e.keyCode === 105 || e.keyCode === 1096){ 
            document.querySelector('#iKey').click();
        }
        if (e.keyCode === 111 || e.keyCode === 1097){ 
            document.querySelector('#oKey').click();
        }
        if (e.keyCode === 112 || e.keyCode === 1079){ 
            document.querySelector('#pKey').click();
        }
        if (e.keyCode === 91 || e.keyCode === 1093){
            document.querySelector('#lbrKey').click();
        }
        if (e.keyCode === 93 || e.keyCode === 1098 || e.keyCode === 1111){
            document.querySelector('#rbrKey').click();
        }
    })
})



