(()=>{"use strict";const t=class{paint(){}},e=document.getElementById("canvas").getContext("2d");(new class extends t{constructor(){super(),this.x=10,this.y=10}paint(t){const e=document.createElement("img");e.src="./images/turtle.png",e.onload=()=>t.drawImage(e,this.x,this.y,e.width/4,e.height/4)}}).paint(e)})();
//# sourceMappingURL=bundle.js.map