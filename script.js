let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let cover = document.querySelector('.cover')
let answerBox  = document.querySelector('.answer-box')
let error = document.querySelector('.error')
let img = document.querySelector('main img')
let msg = document.querySelector('.msg')

let timer;

btn1.addEventListener('click', () => {
    clearInterval(timer)
    cover.classList.add('active')
    // answerBox.classList.remove('active')

    let target = new Date(document.querySelector('#user-date').value)
    let today = new Date()
    console.log('target ->',target);
    console.log('today ->',today);
    

    if (isNaN(target)){
        error.classList.add('active')
        img.classList.remove('active')
        msg.innerHTML ="please enter a valid date"
        return ;
    }
    
    if(target.getTime() > today.getTime())
    {
        const futuredate = target 
        timer=setInterval(() => {
            let now = new Date();
            let diff = futuredate.getTime() - now.getTime()
            console.log('difference -> ',diff);

            if (diff < 0){
                clearInterval(timer)
                error.classList.add('active')
                answerBox.classList.remove('active')
                img.classList.remove('active')
                msg.innerHTML ="Event Launched Successfully"
                return ;
            }
            else{
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                answerBox.classList.add('active')
                img.classList.add('active')

                let box1 = document.querySelector('.box1');
                let box2 = document.querySelector('.box2');
                let box3 = document.querySelector('.box3');
                let box4 = document.querySelector('.box4');


                box1.textContent = days;
                box2.textContent = hours;
                box3.textContent = minutes;
                box4.textContent = seconds;
            }
            
        },1000);
    }
    else{
        error.classList.add('active')
        answerBox.classList.remove('active')
        img.classList.remove('active')
        msg.innerHTML ="can't take previous dates"
        return ;
    }
})

btn2.addEventListener('click', () => {
    cover.classList.remove('active')
    answerBox.classList.add('active')

})

btn3.addEventListener('click', () => {
    cover.classList.remove('active')
    error.classList.remove('active')
})