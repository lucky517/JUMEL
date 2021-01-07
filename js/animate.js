window.addEventListener('load',function(){
function animate(obj,target) {
    clearInterval(obj.target);
    obj.timer=setInterval(function(){       
        if(obj.offsetLeft>=terget){
            clearInterval(obj.timer)
        }
        obj.style.left=obj.offsetLeft+1+'px';
    },30);
}
})