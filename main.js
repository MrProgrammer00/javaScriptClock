var hour = "00";
var minute = "00";
var second = "00";
var secondFirstStick = document.querySelector('.secondFirstStick');
var secondSecondStick = document.querySelector('.secondSecondStick');
var minuteFirstStick = document.querySelector('.minuteFirstStick');
var minuteSecondStick = document.querySelector('.minuteSecondStick');
var hourFirstStick = document.querySelector('.hourFirstStick');
var hourSecondStick = document.querySelector('.hourSecondStick');

    setInterval(function(){
        hour = String(new Date().getHours()) < 10 ? String("0" + new Date().getHours()) : String(new Date().getHours());
        minute = String(new Date().getMinutes()) < 10 ? String("0" + new Date().getMinutes()) : String(new Date().getMinutes()) ;
		second = String(new Date().getSeconds()) < 10 ? String("0" + new Date().getSeconds()) : String(new Date().getSeconds()) ;
        secondFirstStick.style.marginTop = -second[1]*35+"px";
        secondFirstStick.children[0].style.marginTop = (second[1]*35)-35+"px";
        secondFirstStick.children[0].innerHTML = second[1];

        secondSecondStick.style.marginTop = -second[0]*35+"px";
        secondSecondStick.children[0].style.marginTop = (second[0]*35)-35+"px";
        secondSecondStick.children[0].innerHTML = second[0]

        minuteFirstStick.style.marginTop = -minute[1]*35+"px";
        minuteFirstStick.children[0].style.marginTop = (minute[1]*35)-35+"px";
        minuteFirstStick.children[0].innerHTML = minute[1];

        minuteSecondStick.style.marginTop = -minute[0]*35+"px";
        minuteSecondStick.children[0].style.marginTop = (minute[0]*35)-35+"px";
        minuteSecondStick.children[0].innerHTML = minute[0];

        hourFirstStick.style.marginTop = -hour[1]*35+"px";
        hourFirstStick.children[0].style.marginTop = (hour[1]*35)-35+"px";
        hourFirstStick.children[0].innerHTML = hour[1];

        hourSecondStick.style.marginTop = -hour[0]*35+"px";
        hourSecondStick.children[0].style.marginTop = (hour[0]*35)-35+"px";
        hourSecondStick.children[0].innerHTML = hour[0];
        
    }, 1000);