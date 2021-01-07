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

.box_1{
    position: relative;
    width:500px;
    height:190px;
    background:red;
    margin:0 auto;
   
}
.box_1 ul{
    width:600%;
    position:absolute;
    top:0;
    left:0;

}
.box_1 ul li{
    float:left;
}
.arrow-1,
.arrow-2{
    display: none;
    position: absolute;
    top:50%;
    margin-top:-20px;
    width:40px;
    height:40px;
    background: #cccccc;
    text-align: center;
    line-height: 40px;
    color:#fff;
    font-family: 'icomoon';
    font-size:18px;
    text-decoration: none;
    margin-left:5px;
}
.arrow-2{
    right:0;
    margin-right:5px;
}
.box_1 img{
    width:500px;
    height:190px;
}
.box_1 li{
    list-style: none;
}
.circle{
    position: absolute;
    bottom:0;
    left:50px;
    margin-bottom:50px;
    margin-left:80px;
}
.circle li{
   width:20px;
   height:20px;
   border-radius:50%;
  list-style:none;
  border:1px solid #cccccc;
   float: left;
   margin-left:10px;
}
.current{
    background:#cccccc;
}