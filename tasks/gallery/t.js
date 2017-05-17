function CreateGallery(option){
    this.widthPlagin=option.width||'100%';
    this.heightPlagin=option.height||'250px';
    this.countImage=option.countImage||8;
    this.srcImages=option.srcImages||[];

}
CreateGallery.prototype.createElements=function (element) {
    return document.createElement(element);
}
CreateGallery.prototype.createNavigation=function () {
    this.next= this.createElements('div');
    this.pointer = this.createElements('div');
    this.pointer.setAttribute('data-opacity','chengeOpacityMove')
    this.pointer.id='next';
    this.next.id='next';
    this.next.setAttribute('data-opacity','chengeOpacityMove')
    this.next.style.cssText=`border-radius: 8px;
		top: 70px;
		left: 0px;
		transition: opacity 0.7s;
		padding: 0px;
		position: absolute;
		background-color: rgba(33, 22, 19, 0.35);
		box-sizing: border-box;
		opacity: 0.4;
		height: 50px;
		width: 18px;`
    this.pointer.style.cssText=`position: absolute;
		right: 5px;
		top: 6px;
		border: 20px solid transparent;
		border-right: 12px solid rgba(19, 27, 58, 0.9);`
    this.next.appendChild(this.pointer);
    this.previuse=this.next.cloneNode(false);
    this.previuse.id='previuse';
    this.previuse.style.right='0px';
    this.previuse.style.left='';
    this.prevPoint=this.pointer.cloneNode(false);
    this.prevPoint.id='previuse';
    this.prevPoint.style.right='-18px';
    this.prevPoint.style.borderLeft='12px solid rgba(19, 27, 58, 0.9)';
    this.prevPoint.style.borderRight='20px solid transparent';
    this.previuse.appendChild(this.prevPoint);
}
CreateGallery.prototype.createPlagin=function () {
    this.div = this.createElements('div');
    this.div.style.cssText=`width:${this.widthPlagin};height:${this.heightPlagin};background:#e0e0e0;border-radius:8px;border:1px solid #e0e0e0;box-sizing:border-box;`;
    this.createDivContent()

};

CreateGallery.prototype.createDivContent=function(set){
    this.createElementImages();
    this.createNavigation();
    this.divContent=this.div.cloneNode(false);
    this.divContent.appendChild(this.ul);
    this.divContent.appendChild(this.next)
    this.divContent.appendChild(this.previuse)
    this.divContent.style.cssText=`margin:${((30)/2)}px auto;position: relative;width:${parseInt(this.widthPlagin)-2}%;height:${parseInt(this.heightPlagin)-30}px;background:#a2a2a2;border-radius:8px;border:0px solid yelow;overflow:hidden; box-sizing:border-box;`;
    this.div.appendChild(this.divContent);

}
CreateGallery.prototype.createElementImages=function(){
    this.ul=this.createElements('ul');
    this.ul.style.cssText=`margin:10px 0px 5px 0px;
		transform: translate3d(0px, 0px, 0px);
		padding-left:0px;
		width:240%;`;
    var th=this;
    this.srcImages.forEach(function (item,i) {
        var li=document.createElement('li');
        li.style.cssText= `margin-left: 15px;
		display: block;
		float:left;`;
        var a=document.createElement('a')
        var img=document.createElement('img');
        img.id=`img${i}`;
        img.setAttribute('data-opacity','chengeOpacity')
        img.src=`./img/${item}`
        img.style.cssText=`background-color:#000;
    transition: opacity 1s;
    opacity: 0.8;
    box-sizing: border-box;
    border:4px solid #c8cbd0;
	height:200px;`;
        a.appendChild(img);
        li.appendChild(a);
        th.ul.appendChild(li);
    })
}

CreateGallery.prototype.insertBeforePlagin=function(parent){
    if(document.getElementById(parent)){
        var parent=document.getElementById(parent)
        parent.insertBefore(this.div, parent.firstElementChild);
    }else{
        document.body.insertBefore(this.div,document.body.firstElementChild);
    }
}
CreateGallery.prototype.event=function () {
    var self= this;
    this.div.addEventListener('mouseover',function(e){

        if(e.target.getAttribute('data-opacity')=='chengeOpacity'){
            self.chengeOpacity(e);
        }else if( e.target.getAttribute('data-opacity')=='chengeOpacityMove'){
            self.chengeOpacityMove(e);
        }

    });
    this.div.addEventListener('mouseout',function(e){
        if(e.target.getAttribute('data-opacity')=='chengeOpacity'){
            self.chengeOpacity(e);
        }else if( e.target.getAttribute('data-opacity')=='chengeOpacityMove'){
            self.chengeOpacityMove(e);
        }
    })
}
CreateGallery.prototype.chengeOpacityMove=function(e){
    var element = document.getElementById(e.target.id)
    var operator;
    if(e.target.id=='next'){
        operator=1;
    }
    this.tamerId;
    var index;
    var reg=/translate3d[(](-?\d*)px/ig;
    var test=(this.ul.style.transform).replace(reg,function (str,p1) {
        index=p1;
    });

    var self=this;

    if(element.style.opacity==0.4){
        element.style.opacity=1;
        setTimeout(function moveNext(){
            if(index<=0){
                (operator==1?index--:index++)
            }else if(index>0&&operator==1){
                index--
            }
            self.ul.style.transform= `translate3d(${index}px, 0px, 0px)`;
            self.tamerId=setTimeout(function(){moveNext()},4);
        },4)
    }else{
        setTimeout(function () {
            clearTimeout(self.tamerId)
        },4)
        element.style.opacity=0.4;
    }
}
CreateGallery.prototype.chengeOpacity=function(e){
    var element = document.getElementById(e.target.id)

    if(element.style.opacity==0.8){
        element.style.borderColor='#fdfafe';
        element.style.opacity=1;
    }else{
        element.style.borderColor='#c8cbd0'
        element.style.opacity=0.8;
    }
}
var options={
    width:'100%',
    height: '250px',
    srcImages:['1.jpg','2.jpg','1.jpg','2.jpg','1.jpg','2.jpg','1.jpg','2.jpg','1.jpg','2.jpg','1.jpg','2.jpg','1.jpg','2.jpg','1.jpg','2.jpg',]
    //srcImages:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg']
}
var cg= new CreateGallery(options);
cg.createPlagin();
cg.event();
cg.insertBeforePlagin();