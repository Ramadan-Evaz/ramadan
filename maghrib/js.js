const nowruz = moment('1402/12/21', 'jYYYY/jMM/jDD'); 
nowruz.hour(18); nowruz.minute(02); nowruz.second(30);

const MIN  = 60;
const HOUR = MIN  * 60;
const DAY  = HOUR * 24; 

 
const interval = setInterval(() => {
    let remainder = nowruz.unix() - moment().unix(); 
    if(remainder <= 0){
        document.querySelector('.remainder').style.display = 'none';
        document.querySelector('.happy').style.display = 'block';
        clearInterval(interval);
    }
    const day = Math.floor(remainder / DAY);
    remainder = remainder % DAY;
    const hour = Math.floor(remainder / HOUR);
    remainder = remainder % HOUR;
    const min = Math.floor(remainder / MIN);
    remainder = remainder % MIN;
    const sec = remainder;
    
    updateUi([day, hour, min, sec]);
}, 1000)

const timeUi = document.querySelectorAll('.time > div > div'); 

const updateUi = (values) => {
    timeUi.forEach((item, index) => {
        if(item.children[0].textContent===values[index].toString()) 
            return;
        item.children[0].className = 'up'; 
        const span = document.createElement('span');
        span.textContent = values[index];
        span.className = 'down';
        item.appendChild(span);
        setTimeout(() => {
            item.children[1].className = '';
            item.children[0].remove();
        }, 200)
    })
}
