function n(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)}function m(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)}class g{constructor(t,e,s,i,h,a,o,r,c=!0,l=2){this.mouseMove=t,this.target=s,this.maxTiltH=18,this.maxTiltV=10,this.maxScale=r,this.doRotate=c,this.rotateFactor=l,this.screenEdgeH=a,this.screenEdgeV=o,this.scale=this.maxScale,this.w=i*this.maxScale+this.screenEdgeH,this.h=h*this.maxScale+this.screenEdgeV,this.sreenRatio=this.w/this.h,this.resize(),e.register(this.resize.bind(this)),this.loop(),setInterval(this.loop.bind(this),40)}resize(){const t=m(),e=n();let s=(t-this.screenEdgeH*2)/this.w,i=(e-this.screenEdgeV*2)/this.h;this.scale=Math.min(this.maxScale,s,i)}loop(){if(this.doRotate){let t=-this.maxTiltH+this.mouseMove.slowPctX*this.maxTiltH*this.rotateFactor,e=-this.maxTiltV+this.mouseMove.slowPctY*this.maxTiltV*this.rotateFactor;this.target.style.transform=`scale(${this.scale}, ${this.scale}) rotateY(${-t}deg) rotateX(${e}deg) `}else this.target.style.transform=`scale(${this.scale}, ${this.scale})`}}export{g as O};
