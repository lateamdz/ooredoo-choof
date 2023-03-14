class CustomCarousel{
    index=0;
    count=0;
    slideBy=100;
    constructor(id) {
        const carousel= document.getElementById(id);
        const content=carousel.querySelector('.custrom-carousel-content');
        const next=carousel.querySelector('.carousel-next');
        const prev=carousel.querySelector('.carousel-prev');

        this.count=content.childElementCount;
        this.index=Number(content.getAttribute("data-index")||0);

        this.update(content,carousel,next,prev);
        this.UIchanges(next,prev,this.index);
        // console.log(this.count,this.index,this.slideBy)
        window.addEventListener('resize', (event)=> {
            this.update(content,carousel,next,prev)
            // this.UIchanges(next,prev, this.index);
        }, true);
    }
    UIchanges(next,prev,index){
        console.log(this.count,index)
        if( this.count-1===index ){
            next.setAttribute("disabled",true)
        }else{
            next.removeAttribute('disabled')
        }
        if( index===0 ){
            prev.setAttribute("disabled",true)
        }else{
            prev.removeAttribute('disabled')
        }
    }
    update(content,carousel,next,prev){
        const margin=0;
        const childElement=carousel.querySelector('.carousel-item');
        // this.slideBy=childElement.clientWidth+margin;
        this.slideBy=childElement.getBoundingClientRect().width+margin;
        content.style.transform = `translateX(-${this.index*this.slideBy}px)`;

        next.onclick = ()=>{
            this.index=this.index<this.count-1?this.index+1:this.index;
            content.style.transform = `translateX(-${this.index*this.slideBy}px)`;
           this.UIchanges(next,prev, this.index)
        };
        prev.onclick = ()=>{
            this.index=this.count>0?this.index-1:0;
            content.style.transform = `translateX(-${this.index*this.slideBy}px)`;
            this.UIchanges(next,prev, this.index)
        };
    }
}
function customCarousel(id){
    new CustomCarousel(id);
}
customCarousel("card-carousel");
