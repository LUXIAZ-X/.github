class u{constructor(s,i,e,h=.5){this.views=s,Array.shuffleArray(this.views),this.showInterval=i,this.pauseInterval=e,this.pauseCounter=0,this.showCounter=0,this.viewNumber=0,this.isPaused=!1,this.opactiy=h;const r=Math.ceil(this.views.length*.5);for(let t=0;t<r;t++){const a=this.views[t];a.style.opacity=this.opactiy}}destroy(){this.views=null}render(){if(this.isPaused)this.pauseCounter++,this.pauseCounter>=this.pauseInterval&&(Array.shuffleArray(this.views),this.isPaused=!1,this.viewNumber=this.showCounter=this.pauseCounter=0);else if(this.showCounter++,this.showCounter>=this.showInterval){this.showCounter=0;let s=this.views[this.viewNumber];s.style.opacity==this.opactiy?s.style.opacity=1:s.style.opacity=this.opactiy,this.viewNumber++,this.viewNumber>=this.views.length&&(this.isPaused=!0)}}}export{u as G};