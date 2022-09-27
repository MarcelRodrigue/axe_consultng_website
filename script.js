const scriptURL = 'https://script.google.com/macros/s/AKfycbzaw_XQAFD8FMcLNSYeeQ0qGi8JM-2Djb09-zh0nSU-vkA6qTUKC3KIQ7LKtEXDDzlP/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector(".btn");
 const msg2 = document.querySelector(".msg");
form.addEventListener('submit', e => {
e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
msg.innerHTML='<i class="fa-solid fa-square-check fa-2x"></i>'
 msg2.classList.add("succes");
msg2.innerHTML='<h1>email recieved successfully</h1>'
setTimeout(function(){
msg.innerHTML='<i class="fa-solid fa-paper-plane fa-2x"></i>'
msg2.innerHTML='Get notified when we lunch'
msg2.classList.remove("succes");
form.reset();
},3000)
})
.catch(error => console.error('Error!', error.message))
})
