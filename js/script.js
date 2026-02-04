/* index.html - 애니메이션이 나타나는 특정 위치 지정 */

const titles = document.querySelectorAll('.title');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    if(scrollY >= 500) {
        titles[1]. classList.add('active');
    }
});

/* radio 태그 선택 강제로 해제하기 */
const labels = document.querySelectorAll('.accordion label');
labels.forEach(label => {
    label.addEventListener("click", function (e) {
        const id = label.getAttribute("for");
        const input = document.getElementById(id);
        /* 이미 열려있는 상태라면 */
        if(input.checked) {
            e.preventDefault(); /* radio 기본동작 막기 */
            input.checked = false; /* 강제로 닫기 */
        }
        /* 열려 있지 않다면 그냥 radio 기본 동작으로 열림 */
    });
});


/* kakaobank.html - js */
/* 실시간 날짜를 보여줌 */
const dateEl = document.getElementById("dateLine");
const dayEl = document.getElementById("dayLine");

function pad(n){
    return String(n).padStart(2, "0");
    /* 한자리 숫자를 두자리로 만들어주기 1 -> 01 */
    /* 날짜, 월 같은거 출력할 때 유용하게 쓰이는 함수 */
    /* string(n) : 숫자를 문자열로 변환 */
    /* padStart(2, "0") : 길이가 2가 될때까지 앞에 0을 채움 */
}

function updateDate(){
    const d = new Date(); /* new Date(): 현재 시간 기준 Date 객체 -> 호출 할때마다 현재 기준으로 새로 생성됨 */

    /* 연, 월, 일 가져오기 */
    const y = d.getFullYear(); /* getFullYear() : 2026 */
    const m = pad(d.getMonth() + 1); /* getMonth() : 0부터 시작하므로 +1을 해줌 */
    const dayNum = pad(d.getDate()); /* gatDate(): 날짜 (1~31) */
    /* 월, 일은 pad()로 감싸서 한자리 숫자는 앞에 0을 붙이도록 함 */

    /* 요일 배열 */
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    /* 화면에 출력 */
    /* textContent는 html 태그를 해석하지 않고 순수 텍스트만 넣음  */
    dateEl.textContent = `${y}.${m}.${dayNum}`;
    dayEl.textContent = days[d.getDay()];
    /* getDay()는 0~6 까지의 숫자를 반환해서 배열과 인덱스 매칭하는 방식 사용 */
}

updateDate(); /* 페이지 열자마자 바로 날짜 표시 -> 이게 없으면 1분 기다려야됨 */
setInterval(updateDate, 60 * 1000); // 1분마다 갱신 (날짜/요일은 이 정도면 충분)

const ilsang = document.querySelectorAll('.ilsang');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    if(scrollY >= 600) {
        ilsang[0]. classList.add('active_bank');
    }
});

/* kakaobank - news section */
const news_sec = document.querySelectorAll('.news-sec');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    if(scrollY >= 1000) {
        news_sec[0]. classList.add('news_active');
    }
});

/* kakaobank - gyungyung section */
const gyungyung_sec = document.querySelector('.gyungyung-sec');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY >= 2000) {
        gyungyung_sec. classList.add('gy_active');
    }
});

