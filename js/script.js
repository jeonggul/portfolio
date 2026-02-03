const titles = document.querySelectorAll('.title');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    if(scrollY >= 700) {
        titles[1]. classList.add('active');
    }
});

/* kakaobank.html - js */
/* 실시간 날짜를 보여줌 */
const dateEl = document.getElementById("dateLine");
const dayEl = document.getElementById("dayLine");

function pad(n){
    return String(n).padStart(2, "0");
}

function updateDate(){
    const d = new Date();

    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const dayNum = pad(d.getDate());

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    dateEl.textContent = `${y}.${m}.${dayNum}`;
    dayEl.textContent = days[d.getDay()];
}

updateDate();
setInterval(updateDate, 60 * 1000); // 1분마다 갱신 (날짜/요일은 이 정도면 충분)
