const darkmode = document.querySelector('.dark-mode-btn');





if(localStorage.getItem('darkMode') === 'dark'){
    darkmode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark');
}
else if(localStorage.getItem('darkMode') === 'light'){
    darkmode.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark');
}



if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    darkmode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark');
}


window
.matchMedia('(prefers-color-scheme: dark)')
.addEventListener('change', (event)=>{
    const newColorSheme = event.matches ? 'dark' : 'light';

    if(newColorSheme === 'dark'){
        darkmode.classList.add('dark-mode-btn__active')
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }else{
    darkmode.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark');
    }

})

darkmode.onclick = function(){
    darkmode.classList.toggle('dark-mode-btn__active')
   
    const isDark = document.body.classList.toggle('dark')
    if(isDark){
        localStorage.setItem('darkMode', 'dark')
    }
    else{
        localStorage.setItem('darkMode', 'light')
    }
}
