window.addEventListener('load',function(){
   
    var arrow_1=document.querySelector('.arrow-1');
    var arrow_2=document.querySelector('.arrow-2');
     var box_1=document.querySelector('.box_1')
     box_1.addEventListener('mouseenter',function(){
         arrow_1.style.display='block';
         arrow_2.style.display='block';
     });
     box_1.addEventListener('mouseout',function(){
        arrow_1.style.display='none';
        arrow_2.style.display='none';
    });
    var ul=box_1.querySelector('ul');
    var ol=box_1.querySelector('.circle')
    for(var i=0;i<ul.children.length;i++){
        var li=document.createElement('li')
        li.setAttribute('index',i)
        ol.appendChild(li);
        //排他思想
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
           this.className='current';
           var index=this.getAttribute('index')
           var focuswidth=box_1.offsetwidth;
           console.log(focuswidth);
           console.log(index)
           animate(ul,-index*focuswidth);

        })
    }
    ol.children[0].className='current';
})