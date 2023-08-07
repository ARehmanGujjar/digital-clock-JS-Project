
let display_hours = document.getElementsByClassName('hours')[0];
let display_mins = document.getElementsByClassName('minutes')[0];
let display_secs = document.getElementsByClassName('seconds')[0];
let display_date = document.getElementsByClassName('date')[0];
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let time;
let get_hours;
let get_mins;
let get_secs;
let get_date;
update_time = () => {

     time = new Date();
     get_hours = time.getHours();
     get_mins = time.getMinutes();
     get_secs = time.getSeconds();
     get_date = time.toLocaleDateString(undefined, options);


     display_hours.innerHTML = get_hours;
     display_mins.innerHTML = get_mins;
     display_secs.innerHTML = get_secs;
     display_date.innerHTML = get_date;
}
setInterval(update_time, 1000)
//dark mode
let heading = document.getElementsByClassName('heading')[0];
let btn = document.getElementsByClassName('btn')[0];
let dark = document.body.getElementsByClassName('dark-mode');
let dots = document.getElementsByClassName('dots')[0];
btn.onclick = function () {
     document.body.classList.toggle("dark-mode");
     if (document.body.classList.contains('dark-mode')) {
          document.body.style.backgroundColor="black";
          btn.style.color="black";
          btn.style.backgroundColor="white";
          btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
     }
     else {
          document.body.style.backgroundColor="white";

          btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
     }

}
// dark_mode = () => {
//      btn.classList.toggle("dark-mode")
//      document.body.style.backgroundColor = "black";
//      // for (let i = 0; i < dark.length; i++) {
//      //      dark[i].style.backgroundColor = "white";
//      //      heading.style.color="white";
//      //      heading.style.backgroundColor="black";
//      //      dots.style.backgroundColor="black";
//      //      dots.style.color="white";
//      //      dark[i].style.color = "black";
//      // }



// }
// btn.addEventListener('click', dark_mode);