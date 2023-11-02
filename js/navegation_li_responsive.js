const NAVEGATION_LIST_RESPONSIVE = document.querySelectorAll('.navegation__list');

NAVEGATION_LIST_RESPONSIVE.forEach(function(currentValue,index,item){
    let list = currentValue;
    list.addEventListener('click',function(){
        let container_svg = list.childNodes[1];
        let container_data = list.childNodes[3];
        console.log(list.childNodes)
        let svg = container_svg.childNodes[1];

        svg.classList.toggle('rotated');
        if((svg.classList.contains('rotated'))){
            console.log("1");
            container_svg.classList.remove('navegation-menu-hover');
            container_data.classList.add('show');
            
        }else{
            container_svg.classList.add('navegation-menu-hover');
            container_data.classList.remove('show');
            console.log("0")
            list.removeEventListener('mouseover', null);
            list.removeEventListener('mouseout', null);
        }

        /* list.addEventListener('mouseover',function(){
            container_svg.classList.remove('navegation-menu-hover');
            container_data.classList.add('show');
            list.removeEventListener('mouseover', null);
        });*/
        
        container_data.addEventListener('mouseover',function(){
            container_svg.classList.add('navegation-menu-hover');
            container_data.classList.add('show');
            svg.classList.add('rotated');
        });
        
        list.addEventListener('mouseout',function(){
            container_svg.classList.remove('navegation-menu-hover');
            container_data.classList.remove('show');
            svg.classList.remove('rotated');
            list.removeEventListener('mouseout', null);
        }) 
        return;
        
    })
});