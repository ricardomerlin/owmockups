(function(){var br=function(a){return a.state.slidesInfo.value.find(b=>b.active)},cr=function(a){const b=a.state.currentSlideIndex,c=a.state.isRTL.value?1:-1;let d=0;for(const e of a.Hb)b.value<=d?(e.style.transitionDuration="0s",e.style.transform=`translate(${100*c}%, 0)`,e.classList.remove("no-anim")):(e.classList.add("no-anim"),e.style.transform="translate(0, 0)"),d++},dr=function(a){const b=a.Oq.keys(),c={};for(const d of b)c[d]=a.Oq.get(d);return c},er=function(a){const b=a.state.transitionDuration,c=a.state.remainingTime;
c.value&&0<c.value?a.timeout=setTimeout(()=>{a.next();er(a)},c.value):(0===c.value&&a.next(),a.interval=setInterval(()=>{a.next()},1E3*b.value))},fr=function(a){clearInterval(a.interval);clearTimeout(a.timeout)},gr=function(a){const b=a.state.isPlaying;b.value||a.play(b)},hr=function(a){const b=a.state.isPlaying;b.value&&a.pause(b)},ir=function(a){const b=[];a.state.slidesInfo.value.forEach(c=>{var d=c.pj.querySelector(".ob-rec-rtb-image");d&&(c=new Image,d=(d=d.style.backgroundImage.match(/url\(["'](.*)["']\)/))&&
2<=d.length?d[1]:"")&&(c.src=d,b.push(c))})},jr=function(a){const b=document.createElement("div");b.className="ob-reel-cta";b.innerHTML="<span>Read More</span>";b.addEventListener("click",c=>{c.preventDefault();a.click()});return b},mr=function(a){a.oe=new Set;if(kr(a)){lr(a);const b={onReady:c=>{a.oe.add(c);a.state.videoPending.value=!0},onPlay:c=>{a.state.videoPlaying.value=c},onClose:()=>{const c=a.state.videoPending;a.state.videoPlaying.value=null;c.value=!1}};OBR.controller.Ah(a.j,c=>{OBR._jsc.Wj(c.currentWidget,
c.beforeLoadTime,b)})}},kr=function(a){const b=OBR.i.Ui;return b&&b[a.j.F()]?"1"===b[a.j.F()]:1===a.j.o("vid",0)||a.j.Vv()},lr=function(a){try{if("2"==a.j.o("feedVersion",null)){const b=a.j.R();b&&b.Cq()}}catch(b){}},nr=function(a){a.K.style.height=null;a.K.style.height=`${a.K.scrollHeight}px`},or=function(a){if(window.ResizeObserver)try{(new window.ResizeObserver(()=>{nr(a)})).observe(a.K.querySelector(".ob-rec-image"))}catch(b){OBR.logger.log("Could not create resize observer")}},pr=function(a){a.lh=
new IntersectionObserver((b=>{const {isInView:c}=dr(a.ic);b.some(d=>d.isIntersecting)?c.value=!0:c.value=!1}).bind(a),{root:null,threshold:[.1],rootMargin:"0px",delay:100});a.lh.observe(a.K)},qr=function(a,b){const c=a.j.od("source",{});return Array.from(b.children).map((d,e)=>({zi:d,Oj:d.querySelector(".ob-dynamic-rec-link"),Ty:d.querySelector(".ob-rec-text"),pj:d.querySelector(".ob-rec-image-container"),source:c[+d.dataset.pos],active:0===e}))},rr=class{constructor(a){this.dc(a)}dc(a){const {currentSlideIndex:b,
slidesInfo:c,slidesCount:d,firstRun:e}=dr(a);this.state={currentSlideIndex:b,slidesInfo:c,slidesCount:d,firstRun:e};a.Ce.add(this.RC.bind(this))}RC(a){if("currentSlideIndex"===a){var b=this.state.currentSlideIndex;a=this.state.firstRun;var c=br(this);b=this.state.slidesInfo.value[b.value];c.active=!1;b.active=!0;a.value?a.value=!1:(c.zi.classList.add("ob-out-anim"),setTimeout(()=>{c.zi.classList.remove("ob-out-anim");c.zi.classList.remove("ob-active")},501));b.zi.classList.add("ob-active")}}};var sr=class{constructor(a){this.dc(a);this.element=this.createElement()}dc(a){const {currentSlideIndex:b,transitionDuration:c,remainingTime:d,slidesCount:e,isPlaying:f,isRTL:g}=dr(a);this.state={currentSlideIndex:b,transitionDuration:c,remainingTime:d,slidesCount:e,isPlaying:f,isRTL:g};a.Ce.add(this.update.bind(this))}animate(){const a=this.state.currentSlideIndex,b=this.state.transitionDuration,c=this.state.remainingTime,d=this.state.isPlaying;c.value||cr(this);d.value&&setTimeout(()=>{this.Hb[a.value].style.transitionDuration=
`${c.value?c.value/1E3:b.value}s`;this.Hb[a.value].style.transform="translate(0px, 0px)"},10)}pause(){const a=this.Hb[this.state.currentSlideIndex.value];a.setAttribute("style",`${OBR._jsc.V}:${getComputedStyle(a)[OBR._jsc.V]};`)}update(a){if(["isPlaying","currentSlideIndex"].includes(a)){var b=this.state.isPlaying;switch(a){case "currentSlideIndex":this.animate();break;case "isPlaying":b.value&&this.animate(),!b.value&&this.pause()}}}createElement(){const a=this.state.slidesCount,b=document.createElement("div");
b.className="ob-reel-progress";const c=[];for(let d=0;d<a.value;d++)c.push("<span><span class='ob-reel-load'></span></span>");b.innerHTML=c.join("");this.Hb=Array.from(b.querySelectorAll(".ob-reel-load"));return b}};var tr=class{constructor(){const a=document.createElement("div");a.className="ob-reel-footer";this.element=a}};var vr=class{constructor(a){this.Ce=new Set;this.Oq=new Map;for(const b in a)this.Oq.set(b,new ur(b,a[b],this.ph.bind(this,b)))}ph(a){const b=Array.from(this.Ce.values());b&&b.length&&b.forEach(c=>c(a))}},ur=class{constructor(a,b,c){this.ks=a;this.rs=b;this.ph=c}get key(){return this.ks}set key(a){this.ks=a}get value(){return this.rs}set value(a){this.rs=a;this.ph&&"function"===typeof this.ph&&this.ph()}};var wr=class{constructor(a,b){this.dc(a);this.qa=b;this.timeout=this.interval=this.startTime=null;this.element=this.createElement();this.update()}dc(a){const {remainingTime:b,transitionDuration:c,currentSlideIndex:d,slidesCount:e,isPlaying:f,isInView:g,videoPlaying:k,isNextSlideVideo:l}=dr(a);this.state={remainingTime:b,transitionDuration:c,currentSlideIndex:d,slidesCount:e,isPlaying:f,isInView:g,videoPlaying:k,isNextSlideVideo:l};a.Ce.add(this.update.bind(this))}createElement(){const a=document.createElement("div");
a.className="ob-reel-controls";a.addEventListener("click",()=>{const b=this.state.isPlaying;this.toggle();b.value?this.qa.mp():this.qa.op()});return a}play(a){this.startTime=new Date;er(this);a.value=!0;this.So=!1}pause(a){this.So=!0;fr(this);var b=new Date;const c=this.state.remainingTime,d=this.state.transitionDuration;b=c.value?c.value-Math.abs(this.startTime-b):1E3*d.value-Math.abs(this.startTime-b);c.value=0<b?b:0;a.value=!1;this.So=!0}next(a=!1){const b=this.state.currentSlideIndex,c=this.state.slidesCount,
d=this.state.isPlaying;a&&fr(this);this.state.remainingTime.value=null;this.startTime=new Date;a&&d.value&&er(this);b.value+1<c.value?b.value++:b.value=0}Uc(a=!1){const b=this.state.currentSlideIndex,c=this.state.slidesCount;this.So&&this.toggle();a&&fr(this);this.state.remainingTime.value=null;this.startTime=new Date;a&&er(this);0<=b.value-1?b.value--:b.value=c.value-1}toggle(){const a=this.state.isPlaying;a.value?this.pause(a):this.play(a)}update(a){const b=this.state.isPlaying,c=this.state.isInView,
d=this.state.videoPlaying;switch(a){case "isInView":c.value&&!b.value&&null===d.value?gr(this):!c.value&&b.value&&hr(this);break;case "videoPlaying":null!==d.value?hr(this):(this.state.remainingTime.value=null,gr(this),this.startTime=new Date);break;case "isPlaying":this.element.innerHTML=`<span>${b.value?'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6.75C7 6.33579 7.33579 6 7.75 6C8.16421 6 8.5 6.33579 8.5 6.75V13.25C8.5 13.6642 8.16421 14 7.75 14C7.33579 14 7 13.6642 7 13.25V6.75Z" fill="white"/><path d="M12.25 6C11.8358 6 11.5 6.33579 11.5 6.75V13.25C11.5 13.6642 11.8358 14 12.25 14C12.6642 14 13 13.6642 13 13.25V6.75C13 6.33579 12.6642 6 12.25 6Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM1.3 10C1.3 5.19512 5.19512 1.3 10 1.3C14.8049 1.3 18.7 5.19512 18.7 10C18.7 14.8049 14.8049 18.7 10 18.7C5.19512 18.7 1.3 14.8049 1.3 10Z" fill="white"/></svg>':
'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6415 13.8686L13.7511 10.4623C14.0809 10.2423 14.0809 9.75765 13.7511 9.53775L8.6415 6.13137C8.2723 5.88524 7.77778 6.1499 7.77778 6.59362V13.4064C7.77778 13.8501 8.2723 14.1148 8.6415 13.8686Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.44444C5.2749 1.44444 1.44444 5.2749 1.44444 10C1.44444 14.7251 5.2749 18.5556 10 18.5556C14.7251 18.5556 18.5556 14.7251 18.5556 10C18.5556 5.2749 14.7251 1.44444 10 1.44444Z" fill="white"/></svg>'}</span>`}}};var xr=class{constructor(a){this.dc(a);this.Ja=null;this.Cj=!1}dc(a){const {isPlaying:b,currentSlideIndex:c,slidesInfo:d}=dr(a);this.state={isPlaying:b,currentSlideIndex:c,slidesInfo:d};ir(this);a.Ce.add(this.update.bind(this))}update(a){if(["isPlaying","currentSlideIndex"].includes(a))switch(a){case "currentSlideIndex":this.play();break;case "isPlaying":this.toggle()}}toggle(){this.state.isPlaying.value?this.play():this.pause()}play(){if(this.state.isPlaying.value){var a=this.state.slidesInfo.value[this.state.currentSlideIndex.value].pj,
b=a.querySelector(".ob-rec-rtb-image");a=a.querySelector(".ob-rec-image");b?(a=b,this.Cj=!0,a.style.animationPlayState="running",a.style.backgroundSize="155%"):this.Cj=!1;this.Ja&&this.Ja.classList.remove("ob-reel-in");!this.Cj&&a.removeAttribute("style");a.classList.add("ob-reel-in");this.Ja=a}}pause(){const a=getComputedStyle(this.Ja);this.Cj?this.Ja.style.animationPlayState="paused":(this.Ja.classList.remove("ob-reel-in"),this.Ja.setAttribute("style",`${OBR._jsc.V}:${a[OBR._jsc.V]};`))}clear(){this.Ja.removeAttribute("style")}};var yr=class{constructor(a,b){this.j=b;this.dc(a);mr(this)}dc(a){const {videoPlaying:b,isNextSlideVideo:c,isInView:d,videoPending:e,isPlaying:f}=dr(a);this.state={videoPlaying:b,isNextSlideVideo:c,isInView:d,videoPending:e,isPlaying:f};a.Ce.add(this.aK.bind(this))}aK(a){const b=this.state.vP;var c=this.state.videoPlaying;const d=this.state.videoPending,e=this.state.isPlaying;if(window.OB_VIDEO&&window.OB_VIDEO.play&&this.oe.has(this.j.G())&&d.value&&!c.value){c=!1;switch(a){case "currentSlideIndex":c=
!0;break;case "videoPending":c=!e.value&&!b;break;case "isPlaying":c=!e.value}c&&(this.oe.delete(this.j.G()),window.OB_VIDEO.play(this.j.G(),{}))}}};var zr=class{constructor(a){this.j=a;this.dataBI=new OBR.dataBI(a,b=>b.cA)}mp(){this.dataBI.C.yl.fire()}op(){this.dataBI.C.Il.fire()}lp(){this.dataBI.C.il.fire()}np(){this.dataBI.C.Zk.fire()}};var Ar=(a,b)=>{const c=b.Sy;return a.reduce((d,e)=>{e=`id_${e.rec_en_did}`;return`${d}
    #${e}.ob-client-rec.ob-dynamic-rec-container {
      opacity: 1;
      position: relative;
      width: 100%;
      z-index: 1;
      overflow: hidden;
    }
    #${e} .ob-rec-text.ob-client,
    #${e} .ob-rec-source.ob-client {
      width: 100%;
      order: unset;
      opacity: 1;
      transition: unset;
    }`},`
    ${".ob-desktop-reel-v2"} {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
      grid-column-gap: 15px;
      position: static;
    }
    
    ${".ob-desktop-reel-v2"} ${".ob-grid-layout.ob-reel-layout-v2"} .ob-widget-header {
      display: none;
    }
    
    ${".ob-desktop-reel-v2"} ${".ob-grid-layout.ob-reel-layout-v2"} .ob-reel-source {
    color: ${b.Ft};
    }
    
    ${".ob-desktop-reel-v2"} ${".ob-grid-layout.ob-reel-layout-v2"} .ob-sub-units {
      height: 100%;
    }
    
    ${".ob-grid-layout.ob-reel-layout-v2"} span.ob-rec-text {
      margin: 8px 0px 0px 0px;
      ${c?`line-height: ${c};`:""}
    }
    
    ${".ob-grid-layout.ob-reel-layout-v2"} span.ob-rec-text,
    ${".ob-grid-layout.ob-reel-layout-v2"} div.ob-reel-source {
      width: calc(100% - 95px);
    }
    
    ${".ob-grid-layout.ob-reel-layout-v2"} .ob-active div.ob-reel-cta {
      top: 8px;
    }
    
    ${".ob-desktop-reel-v2"} ${".ob-grid-layout.ob-reel-layout-v2"} .ob-reel-label {
      position: absolute;
      bottom: 0px;
      background: ${b.jx};
      color: ${b.kx};
      padding: 2px 2px;
      font-size: 12px;
    }
  `)},Br=class{constructor(a){this.Pa=[];this.Dt=[];this.j=a;const b=this.j.jF(),c=this.j.A();this.shadowRoot=OBR.g.H(c);if(null!=b&&b.doc&&this.shadowRoot){var d;null==(d=b.doc.filter(g=>9!==(null==g?void 0:g.ttid)))||d.forEach(g=>{var k=this.Pa,l=k.push,p;var h=null==(p=g.url)?void 0:p.includes("paid.outbrain");p=a.l("dynamicPaidSourceFormat",(null==g?void 0:g.source_display_name)||"").replace("$SOURCE",(null==g?void 0:g.source_display_name)||"");const m=a.l("dynamic:PaidLabel",null);let q;h=`<div id="id_${g.rec_en_did}" class="ob-dynamic-rec-container ob-desktop-reel-track ob-client-rec ob-recIdx-${g.pos} ${h?
"ob-p":"ob-o"}" data-pos="${g.pos}">
    <a class="ob-dynamic-rec-link" onclick="" href="${g.url}" target="_blank" data-rec-en-did="${g.rec_en_did}" data-adv-id="${g.advId}" rel="nofollow noopener">
            <span class="ob-unit ob-rec-image-container" data-type="Image">
              <div class="ob-image-ratio"></div>
                <img class="ob-rec-image ob-show ob-client" src="${null==g?void 0:null==(q=g.thumbnail)?void 0:q.url}" onload="this.className+=' ob-show'" alt="${null==g?void 0:g.content}" title="${null==g?void 0:g.content}" onerror="OBR.extern.imageError(this)">
                ${m?`<span class="ob-rec-label">${m}</span>`:""}
            </span>
        <section class="ob-sub-units ob-client">
          <span class="ob-unit ob-rec-text ob-client" data-type="Title" title="${null==g?void 0:g.content}">${null==g?void 0:g.content}</span>
          <span class="ob-unit ob-rec-source ob-reel-source ob-client" data-type="Source">${p}</span>
        </section>
    </a>
</div>`;l.call(k,h);this.Dt.push(g)});if(this.Pa.length){var e;if(this.ha=null==(e=this.shadowRoot)?void 0:e.querySelector(".ob-widget")){var f;null==(f=this.ha.querySelector(".ob-reel-track"))||f.classList.add("ob-desktop-reel-track");this.ha.classList.forEach(g=>{this.ha.parentNode.classList.add(g)});this.ha.classList.remove("ob-paid-background");this.ha.classList.remove("ob-organic-background");this.ha.parentNode.classList.add("ob-desktop-reel-v2")}}}}render(){if(!this.Pa.length)return this;var a=
Ar(this.Dt,this.ih);const b=document.createElement("style");b.textContent=a;b.classList.add("ob-client-render-styles");this.shadowRoot.prepend(b);a=`<div class="ob-widget ob-grid-layout ob-reel-layout-v2 ${this.j.F()} ob-client-render">
  <div class="ob-items-container">${Object.assign(this.Pa)}</div>
</div>`;a=OBR._jsc.Ib(a);this.ha.parentNode.append(a);return this}Ia(){if(!this.Pa.length)return this;OBR.Ia.yc(this.j,Array.from(this.shadowRoot.querySelectorAll(".ob-client-rec")));return this}};var Cr=class{B(a){this.ro(a);this.aa=this.j.A();this.aa=(a=this.aa.shadowRoot)?a.querySelector("div"):this.aa;this.K=this.aa.querySelector(".ob-widget");this.K=a?this.K.parentElement:this.K;nr(this);or(this);if(a=this.aa.querySelector(".ob-widget-items-container")){this.J=OBR.i.J;this.dc(a);({slidesInfo:a}=dr(this.ic));for(var b of a.value){a=b.source;var c=b.Ty;if(a){var d=document.createElement("div");d.classList.add("ob-reel-source");d.innerHTML=`<span>${a}</span>`;c.parentElement.append(d)}}this.lo();
new rr(this.ic);new xr(this.ic);this.rn=new tr;this.kK=new sr(this.ic);this.Im=new wr(this.ic,this.$k);new yr(this.ic,this.j);this.AG=new Br(this.j);const {slidesInfo:k,slidesCount:l}=dr(this.ic);c=1;for(var e of k.value){d=e.Ty.parentElement;var f=jr(e.Oj);if(this.j.l("isReelLabel",!1)){b=c;a=l.value;var g=document.createElement("div");g.className="ob-reel-label";g.innerHTML=`<span><span>${b}</span>/<span>${a}</span> Most Popular</span>`;d.prepend(g)}d.append(f);c++}this.K.querySelector(".ob-reel-track").append(this.rn.element);
this.rn.element.append(this.kK.element);this.rn.element.append(this.Im.element);e=this.j.l("PaidLabelColor","#000");b=this.j.l("PaidLabelBackgroundColor","#fff");a=this.j.l("dynamic:SourceColor","#000");c=this.j.od("titleLineHeight",null);e={kx:e,jx:b,Ft:a,Sy:c};b=e.kx;a=e.jx;c=e.Ft;d=e.Sy;f=document.createElement("style");g=this.j.A();g=OBR.g.H(g);f.innerHTML=`
    ${d?".ob-grid-layout.ob-reel-layout-v2 .ob-sub-units {height: 100%;}":""}
    ${d?`${".ob-grid-layout.ob-reel-layout-v2"} span.ob-rec-text {line-height: ${d};}`:""}
    ${".ob-grid-layout.ob-reel-layout-v2"} div.ob-reel-source {color: ${c};}
    ${".ob-grid-layout.ob-reel-layout-v2"} .ob-rec-label {
      position: absolute;
      bottom: 0px;
      background: ${a};
      color: ${b};
      padding: 2px 2px;
      font-size: 12px;
    }
    `;g.prepend(f);b=this.AG;b.ih=e;b.render().Ia();({currentSlideIndex:e}=dr(this.ic));e.value=0;pr(this);e={capture:!1,passive:!0};this.Jf={x:null,y:null};this.aa.addEventListener("touchstart",this.JG.bind(this),e);this.aa.addEventListener("touchmove",this.IG.bind(this),e)}}ro(a){this.j=a}dc(a){this.ic=new vr({currentSlideIndex:0,remainingTime:null,slidesInfo:null,slidesCount:0,videoPlaying:null,isNextSlideVideo:!1,isRTL:this.j.Qc(),transitionDuration:this.j.l("reelsTransitionDuration",6),isPlaying:!1,
firstRun:!0,videoPending:!1,isInView:!1});const {slidesCount:b,slidesInfo:c}=dr(this.ic);b.value=a.children.length;c.value=qr(this,a)}JG(a){a=a.touches;this.Jf.x=a[0].clientX;this.Jf.y=a[0].clientY}IG(a){const {isRTL:b}=dr(this.ic);if(this.Jf.x){var c=this.Jf.x-a.touches[0].clientX;a=this.Jf.y-a.touches[0].clientY;b.value&&(c=-c);5<Math.abs(a)||(0<c?(this.Im.next(!0),this.$k.lp()):(this.Im.Uc(!0),this.$k.np()));this.Jf.x=null}}lo(){this.$k=new zr(this.j)}};OBR.Ix=OBR.Ix||{B:a=>{a&&a.Pc()&&a.kw()?(new Cr).B(a):setTimeout(()=>{(new Cr).B(a)},0)}};OBR.s.S(OBR.s.v.Gl);}).call(window);
