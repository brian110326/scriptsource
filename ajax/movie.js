// 어제 날짜 구하기
// 년, 월, 일 변수에 담기
const txtYear = document.querySelector("#txtYear");
const selMonth = document.querySelector("#selMonth");
const selDay = document.querySelector("#selDay");
const init = () => {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  // 화면에 보여주기
  txtYear.value = year;

  selMonth.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

function show(movieCd) {
  console.log(movieCd);
  url = "	http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;

  // 영화한글제목 : movieNm
  // 영어제목 : movieNmEn
  // 상영시간 : showTm
  // 감독 : directors
  // 배우 : actors

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let movieInfo = data.movieInfoResult.movieInfo;
      let directors = data.movieInfoResult.movieInfo.directors;
      let actors = data.movieInfoResult.movieInfo.actors;

      let result = "<ul>";

      result += `<li>영화제목 : ${movieInfo.movieNm}</li>`;
      result += `<li>영어제목 : ${movieInfo.movieNmEn}</li>`;
      result += `<li>상영시간 : ${movieInfo.showTm}분</li>`;

      result += "<li>감독 : ";
      directors.forEach((people) => {
        result += `${people.peopleNm} `;
      });
      result += "</li>";

      result += "<li>출연배우 : ";
      actors.forEach((people) => {
        result += `${people.peopleNm}, `;
      });
      result += "</li>";

      result += "</ul>";

      document.querySelector(".box2").innerHTML = result;
    })
    .catch();
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 영화진흥위원회 사용자가 선택한 날짜의 박스오피스 가져오기
  let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  url += txtYear.value + selMonth.value + selDay.value;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);

      let result = "";
      boxofficeList.forEach((movie) => {
        // 순위 1(^ 1) : 파묘
        result += `<div>`;
        if (movie.rankInten > 0) {
          result += `${movie.rank + "위(▲"}${movie.rankInten + ") : "}`;
        } else if (movie.rankInten == 0) {
          result += `${movie.rank + "위("}${movie.rankInten + ") : "}`;
        } else {
          result += `${movie.rank + "위(▼"}${movie.rankInten + ") : "}`;
        }

        result += `<a href="#" onclick='javascript:show(${movie.movieCd})'>${movie.movieNm}</a>`;
        result += `</div>`;
      });

      document.querySelector("#msg").innerHTML = result;
    })
    .catch();
});
