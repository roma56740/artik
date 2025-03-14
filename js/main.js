// let btnCarat = document.getElementsByClassName('btnCarat')

// for(let i = 0; i < btnCarat.length; i++){
//     btnCarat[i].addEventListener('click',function(){
//         for(let j = 0; j < btnCarat.length; j++){
//             btnCarat[j].style.color = 'grey'
//             btnCarat[j].style.fontSize = '14px'
//         }
//         this.style.color = 'white'
//         this.style.fontSize = '18px'
//     })
// }

let burger = document.getElementsByClassName('burger')[0];
let open_header = 1
let open_close_Block = document.getElementsByClassName('open_close_Block')[0];
let navBurger = document.getElementsByClassName('navBurger')[0];
burger.addEventListener('click', function(){
        if(open_header){
            navBurger.style.display = 'flex'
            open_close_Block.style.transform = 'rotate(-180deg)'
            this.style.width = '70vw'
            this.style.borderRadius = '0px'
            this.style.height = '320px'
            this.style.transform = 'translate(0,0)'
            open_header=open_header-1
        }else{
            navBurger.style.display = 'none'
            open_close_Block.style.transform = 'rotate(0deg)'
            this.style.width = '40px'
            this.style.borderRadius = '50%'
            this.style.height = '40px'
            this.style.transform = 'translate(-50%,-50%)'

            open_header=open_header+1
        }


})