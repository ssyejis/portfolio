import { lang, setCookie, getCookie, t, i18n } from "./i18n";
import threeCanvas from "./threeCanvas";
import chartCanvas from "./chart";
import sliderProject from "./sliderProject";

document.querySelector('#lang-select').value = getCookie('lang');
document.querySelector('#lang-select').addEventListener('change', () => {
  lang.contry = document.querySelector('#lang-select').value;
  setCookie(lang.contry);
  location.reload();
})

document.addEventListener('DOMContentLoaded', () => {
  threeCanvas();
  chartCanvas();
  // sliderProject();
})

