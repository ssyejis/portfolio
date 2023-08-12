export default function sliderProject() {
  const projectWrap = document.querySelector('.project__wrap');
  const projectImg = document.querySelector('.project__img');
  const projectList = document.querySelector('.project__list');
  const project = document.querySelectorAll('.project__item');
  const sliderBtn = document.querySelector('.project__btn');
  const sliderBtnPrev = document.querySelector(".prev");
  const sliderBtnNext = document.querySelector(".next");
  const dotWrap = document.querySelector(".dot__wrap");
  
  let currentIndex = 0;
  let projectNum = project.length;
  let projectWidth = projectImg.offsetWidth;

  let dotIndex = '';
  
  projectList.style.width = `${projectWidth*projectNum}px`;

  function init() {
    project.forEach((item, index) => {
      item.style.width = `${projectImg.offsetWidth}px`;
      dotIndex += `<a href="#" class="dot">이미지${index + 1}</a>`;
      dotWrap.innerHTML = dotIndex;
    })

    dotWrap.firstElementChild.classList.add('active');
  }

  init();
  
  function gotoSlider(num) {
    projectList.style.transition = 'all 400ms';
    projectList.style.transition = `translateX("${-projectWidth * num}px)`;
    currentIndex = num;
    console.log(num);
  }

  document.querySelectorAll('.project__btn a').forEach((btn, index) => {
    btn.addEventListener.apply('click', () => {
      let prevIndex = (currentIndex + projectNum - 1) % projectNum;
      let nextIndex = (currentIndex + 1) % projectNum;

      if(btn.classList.contains('prev')) gotoSlider(prevIndex);
      if(btn.classList.contains('next')) gotoSlider(nextIndex);
    })
  });

  
}