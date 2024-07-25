// getElementByid로 보기,문제,버튼 태그 가져오기
// quertSelectorAll로 라디오 버튼 가져오기
// 화면에 첫번째 문제의 보기와 제목을 보여주기
// 문제를 보여주는 코드를 함수로 묶어서 만들기
// 버튼을 클릭했을때 다음문제로 넘어가기
// 선택된 라디오버튼의 id값을 가져오는 함수생성
// 문제를 다풀고나면 맞춘문제/전체문제 알려주기
// 재시작버튼을 누르면 처음으로 돌아가기

const quizData = [
  {
    //문제
    question: "뉴진스 멤버가 아닌것은?",
    //보기
    a: "하니",
    b: "민지",
    c: "원영",
    d: "혜인",
    //정답
    correct: "c",
  },
  {
    question: "지금 가고싶은 장소는?",
    a: "집",
    b: "집",
    c: "집",
    d: "집",
    correct: "c",
  },
  {
    question: "자바스크립트수업을 할때의 심경은?",
    a: "기쁘다",
    b: "즐겁다",
    c: "창문열고 뛰어내리고싶다",
    d: "행복하다",
    correct: "c",
  },
  {
    question: "식당의 음식이 맛있었던 때는?",
    a: "어제",
    b: "오늘",
    c: "없다",
    d: "내일",
    correct: "c",
  },
];

//=======================================================

//라디오버튼
const answerEls = document.querySelectorAll(".answer");
//질문
const questionEl = document.getElementById("question");

// 보기
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

//제출버튼
const submitBtn = document.getElementById("submit");

// 모든 요소를 자식으로 갖고있는 부모 div
const div = document.getElementById("quiz");

//=========================================================

// let index = 0;

// function quiz() {
//   const quiz = quizData[index];
//   questionEl.textContent = quiz.question;
//   a_text.textContent = quiz.a;
//   b_text.textContent = quiz.b;
//   c_text.textContent = quiz.c;
//   d_text.textContent = quiz.d;
// }

// quiz();

// submitBtn.addEventListener("click", () => {
//   index++;
//   quiz();
// });

let currentQuiz = 0; //첫번째 문제 인덱스
let score = 0; //점수를 저장

loadQuiz(); //첫번재 문제 출력
function loadQuiz() {
  //체크초기화
  selectAnswers();

  const currentQuizDate = quizData[currentQuiz];

  // 태그에 질문값 넣기
  questionEl.textContent = currentQuizDate.question;
  // 보기 값 넣기
  a_text.textContent = currentQuizDate.a;
  b_text.textContent = currentQuizDate.b;
  c_text.textContent = currentQuizDate.c;
  d_text.textContent = currentQuizDate.d;
}

//체크초기화
function selectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// 선택된 라디오태그의 id값 가져오기
function getSelected() {
  let answer;

  answerEls.forEach((el) => {
    // el -> <input>
    // input 태그에 checked속성이 true라면
    // 태그의 idrkqtdmf answer에 넣기
    if (el.checked) {
      answer = el.id;
    }
  });
  // answer 변수 반환
  return answer;
}

submitBtn.addEventListener("click", () => {
  // 선택된 보기 값
  const answer = getSelected();
  console.log(answer);

  // 선택된 id값이 존재한다면 실행
  if (answer) {
    // 선택한 값이 정답과 일치한다면
    if (answer === quizData[currentQuiz].correct) {
      // 점수 1점 추가
      score++;
    }
    // 문제 인덱스 1 추가
    currentQuiz++;

    //문제 개수가 index값보다 크다면
    if (currentQuiz < quizData.length) {
      // 퀴즈 불러오기 함수 호출
      loadQuiz();
    }
    //문제를 다풀었을때
    else {
      div.innerHTML = `<h2>총 ${score}/${quizData.length}개 맞추셨습니다</h2> <button onclick="location.reload()">다시하기</button>`;
    }
  }
});
