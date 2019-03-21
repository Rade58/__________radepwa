const contentDivs = document.querySelectorAll('div.sadrzina div');
const button = document.querySelector('div.ispocetka button');
let times = 0;
let isAgain = false;

// ///// REGISTROVACU GA OVDE

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
// //////////////

const onMdHandler = function(ev){

    contentDivs.forEach(function(divEl){

        if(divEl.classList.contains('animate')){
            divEl.classList.remove('animate');
        }

        window.setTimeout((div) => {
            div.classList.add('animate');
        }, times, divEl);
        times += 1280;
    });
}

button.addEventListener('mousedown', onMdHandler, false);

contentDivs[contentDivs.length - 1].addEventListener('animationend', function(ev){
    if(!isAgain){
        button.innerHTML = button.innerHTML + " opet";
        isAgain = true;
    }
    times = 0;
}, false);