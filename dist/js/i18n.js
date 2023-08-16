export const i18n={en:{title:"Hi, I am walking developer.",profil:"profil",skill:"skill",project:"project",contact:"contact",name:"name : yeji seo",birthDate:"birth date : 95.09.13",career:"career : 1year 6months",experience:"experience",singha:"Singha Co., Ltd",yangjeong:"Yangjeong Human Resources Development Center (Responsive Web Publishing Course)",hana:"Hana Appraisal Corporation Co., Ltd",university:"Korea Maritime and Ocean University",motiv:"I started developing a website because I was very attracted to the fact that a website can influence the first impression of a company and show a strong message to customers. My goal is to develop a website that considers user experience and convenience in order to properly convey the company's goals and values.",inputName:"name",inputEmail:"email",inputMessage:"message",nameVali:"Please enter your name.",emailVali:"Please enter your email address.",emailRegVali:"Please enter a valid email address.",messageVali:"Please enter your message.",send:"send"},ko:{title:"안녕하세요, 전진하는 개발자 서예지입니다.",profil:"프로필",skill:"스킬",project:"프로젝트",contact:"연락",name:"이름 : 서예지",birthDate:"생년월일 : 95.09.13",career:"경력 : 1년 6개월",experience:"경험",singha:"(주)싱하",yangjeong:"양정인력개발센터 (반응형 웹 퍼블리싱 과정)",hana:"하나감정평가법인",university:"한국해양대학교",motiv:"웹사이트를 통해 기업의 첫인상을 좌우하고 고객들에게 전달하는 메시지를 강력하게\n              나타낼 수 있다는 사실에 큰 매력을 느껴 웹사이트 개발을 시작했습니다.\n              기업의 목표와 가치를 올바르게 전달하기 위해 사용자 경험과 편리성을 고려한\n              웹사이트를 개발하는 것이 제가 추구하는 목표입니다.",inputName:"이름",inputEmail:"이메일",inputMessage:"메세지",nameVali:"이름을 작성해주세요.",emailVali:"이메일을 작성해주세요.",emailRegVali:"이메일 형식에 맞게 작성해주세요.",messageVali:"메세지를 작성해주세요.",send:"보내기"}};export const lang={_contry:getCookie("lang"),get contry(){return this._contry},set contry(e){this._contry=e}};export function t(e,a){return i18n[e][a]}export function setCookie(e){document.cookie=`lang=${e}`}export function getCookie(e){let a=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return a?a[2]:"ko"}