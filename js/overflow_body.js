const headerMenu_label_HTML =  document.getElementById('headerMenu__label');
const headerMenu__navegationResponsive__HTML =  document.getElementById('headerMenu__navegation-responsive');

headerMenu_label_HTML.addEventListener('click',function(){
    headerMenu__navegationResponsive__HTML.classList.toggle('open');
    console.log('holaa')
});

