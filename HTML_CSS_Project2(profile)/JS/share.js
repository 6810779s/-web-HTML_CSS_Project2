const heart_empty = document.querySelector("img[alt = 'heart_empty']");
const heart_full = document.querySelector("img[alt='heart_full']");
const share_icon = document.querySelector("img[alt='share_icon']");
const share_box = document.querySelector("img[alt='share_box']");
const facebook = document.querySelector("img[alt='facebook']");
const twitch = document.querySelector("img[alt='twitch']");
const gmail = document.querySelector("img[alt='gmail']");

let share=0;
let win;

heart_empty.addEventListener('click', ()=>{
    heart_empty.style.display = "none";
    heart_full.style.display = "block";
});

heart_full.addEventListener('click', ()=>{
  heart_full.style.display = "none";
  heart_empty.style.display = "block";
});

share_icon.addEventListener('click', () =>{
  if(share===0){
    share_box.style.display = "block";
    facebook.style.display = "block";
    twitch.style.display = "block";
    gmail.style.display = "block";
    share=1;
  }else{
    share_box.style.display = "none";
    facebook.style.display = "none";
    twitch.style.display = "none";
    gmail.style.display = "none";
    share=0;
  }
});

facebook.addEventListener('click', ()=>{
  win=window.open("https://www.facebook.com/profile.php?id=100004779965885");
});

twitch.addEventListener('click', ()=>{
  win=window.open("https://www.twitch.tv/");
});

gmail.addEventListener('click', ()=>{
  win=window.open("https://mail.google.com/mail/u/0/#inbox");
});

