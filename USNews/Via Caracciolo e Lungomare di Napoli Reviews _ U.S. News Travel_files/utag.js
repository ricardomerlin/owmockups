//tealium universal tag - utag.loader ut4.0.202501211511, Copyright 2025 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};var match=(""+document.cookie).match("(^|;\\s)utag_env_usnews_main=(\/\/tags\.tiqcdn\.com\/utag\/usnews\/[a-z0-9\\.-]{1,30}\\/[^\\s;]*)");if(match){if(match[2].indexOf("/prod/")===-1){var s=match[2];while(s.indexOf("%")!=-1){s=decodeURIComponent(s);}s=s.replace(/\.\./g,"");ul(s);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/usnews/main/prod/';}}})();}catch(e){};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"usnews.main",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],lq:[],bq:{},bk:{},rf:0,ri:0,rp:0,rq:[],ready_q:[],sendq:{"pending":0},run_ready_q:function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};}},lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d,g){utag.DB('WQ:'+utag.loader.wq.length);try{if(utag.udoname&&utag.udoname.indexOf(".")<0){utag.ut.merge(utag.data,window[utag.udoname],0);}
if(utag.cfg.load_rules_at_wait){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};d=0;g=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load==4){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.load>0){g.push(b);d++;}else{this.f[b.id]=1;}}
for(a=0;a<g.length;a++){utag.loader.AS(g[a]);}
if(d==0){utag.loader.END();}},AS:function(a,b,c,d){utag.send[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'ut'+'ag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+(a.v?utag.cfg.template+a.v:utag.cfg.v);utag.rpt['l_'+a.id]=a.src;b=document;this.f[a.id]=0;if(a.load==2){utag.DB("Attach sync: "+a.src);a.uid=a.id;b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')
if(typeof a.cb!='undefined')a.cb();}else if(a.load==1||a.load==3){if(b.createElement){c='utag_usnews.main_'+a.id;if(!b.getElementById(c)){d={src:a.src,id:c,uid:a.id,loc:a.loc}
if(a.load==3){d.type="iframe"};if(typeof a.cb!='undefined')d.cb=a.cb;utag.ut.loader(d);}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},OU:function(a,b,c,d,f){try{if(typeof utag.data['cp.OPTOUTMULTI']!='undefined'){c=utag.loader.cfg;a=utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');for(d=0;d<a.length;d++){b=a[d].split(':');if(b[1]*1!==0){if(b[0].indexOf('c')==0){for(f in utag.loader.GV(c)){if(c[f].tcat==b[0].substring(1))c[f].load=0}}else if(b[0]*1==0){utag.cfg.nocookie=true}else{for(f in utag.loader.GV(c)){if(c[f].tid==b[0])c[f].load=0}}}}}}catch(e){utag.DB(e)}},RDdom:function(o){var d=document||{},l=location||{};o["dom.referrer"]=eval("document."+"referrer");o["dom.title"]=""+d.title;o["dom.domain"]=""+l.hostname;o["dom.query_string"]=(""+l.search).substring(1);o["dom.hash"]=(""+l.hash).substring(1);o["dom.url"]=""+d.URL;o["dom.pathname"]=""+l.pathname;o["dom.viewport_height"]=window.innerHeight||(d.documentElement?d.documentElement.clientHeight:960);o["dom.viewport_width"]=window.innerWidth||(d.documentElement?d.documentElement.clientWidth:960);},RDcp:function(o,b,c,d){b=b||utag.loader.RC();for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
o["_t_visitor_id"]=o["cp.utag_main_v_id"];o["_t_session_id"]=o["cp.utag_main_ses_id"];},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(utag.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=utag.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";utag.DB(e)};if(utag.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=utag.ut.flatten({va:JSON.parse(a)});utag.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){utag.DB(e)}},RDut:function(o,a){o["ut.domain"]=utag.cfg.domain;o["ut.version"]=utag.cfg.v;o["ut.event"]=a||"view";try{o["ut.account"]=utag.cfg.utid.split("/")[0];o["ut.profile"]=utag.cfg.utid.split("/")[1];o["ut.env"]=utag.cfg.path.split("/")[6];}catch(e){utag.DB(e)}},RD:function(o,a,b,c,d){utag.DB("utag.loader.RD");utag.DB(o);if(!utag.loader.rd_flag){a=(new Date()).getTime();b=utag.loader.RC();c=a+parseInt(utag.cfg.session_timeout);d=a;if(!b.utag_main){b.utag_main={};}else if(b.utag_main.ses_id&&typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a){delete b.utag_main.ses_id;}
if(!b.utag_main.v_id){b.utag_main.v_id=utag.ut.vi(a);}
if(!b.utag_main.ses_id){b.utag_main.ses_id=d+'';b.utag_main._ss=b.utag_main._pn=1;b.utag_main._sn=1+parseInt(b.utag_main._sn||0);}else{d=b.utag_main.ses_id;b.utag_main._ss=0;b.utag_main._pn=1+parseInt(b.utag_main._pn);b.utag_main._sn=parseInt(b.utag_main._sn);}
if(isNaN(b.utag_main._sn)||b.utag_main._sn<1){b.utag_main._sn=b.utag_main._pn=1}
b.utag_main._st=c+'';utag.loader.SC("utag_main",{"v_id":b.utag_main.v_id,"_sn":b.utag_main._sn,"_ss":b.utag_main._ss,"_pn":b.utag_main._pn+";exp-session","_st":c,"ses_id":d+";exp-session"});}
utag.loader.rd_flag=1;this.RDqp(o);this.RDmeta(o);this.RDcp(o,b);this.RDdom(o);this.RDut(o);this.RDva(o);},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)$/;t=(new Date()).getTime();for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){utag.DB(er)};}
o[ck]={};for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){if(!utag.loader.cfg){return}
if(this.ol==0){if(utag.loader.cfg[a].block&&utag.loader.cfg[a].cbf){this.f[a]=1;delete utag.loader.bq[a];}
for(b in utag.loader.GV(utag.loader.bq)){if(utag.loader.cfg[a].load==4&&utag.loader.cfg[a].wait==0){utag.loader.bk[a]=1;utag.DB("blocked: "+a);}
utag.DB("blocking: "+b);return;}
utag.loader.INIT();return;}
utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(utag.cfg.noview!=true){if(utag.loader.cfg[a].send){utag.DB("SENDING: "+a);try{if(utag.loader.sendq.pending>0&&utag.loader.sendq[a]){utag.DB("utag.loader.LOAD:sendq: "+a);while(d=utag.loader.sendq[a].shift()){utag.DB(d);utag.sender[a].send(d.event,utag.handler.C(d.data));utag.loader.sendq.pending--;}}else{utag.sender[a].send('view',utag.handler.C(utag.data));}
utag.rpt['s_'+a]=0;}catch(e){utag.DB(e);utag.rpt['s_'+a]=1;}}}
if(utag.loader.rf==0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
utag.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!utag.data){try{utag.cl={'_all_':1};utag.loader.initdata();utag.loader.RD(utag.data);}catch(e){utag.DB(e)};}
if((document.attachEvent||utag.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;utag.DB("loader.END");b=utag.data;if(utag.handler.base&&utag.handler.base!='*'){e=utag.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")utag.handler.df[e[d]]=b[e[d]]}}else if(utag.handler.base=='*'){utag.ut.merge(utag.handler.df,b,1);}
utag.rpt['r_0']="t";for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}
utag.rpt.ts['s']=new Date();v=".tiqcdn.com";w=utag.cfg.path.indexOf(v);if(w>0&&b["cp.utag_main__ss"]==1&&!utag.cfg.no_session_count)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");utag.handler.INIT();}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){utag.db_log=[];b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){var t;if(utag.ut.typeOf(a)=="object"){t=utag.handler.C(a)}else{t=a}
utag.db_log.push(t);try{console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a,cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a,cfg:{cb:c,uids:d}})},track:function(a,b,c,d){if(typeof a=="string")a={event:a,data:b,cfg:{cb:c}};for(d in utag.loader.GV(utag.o)){try{utag.o[d].handler.trigger(a.event||"view",a.data||a,a.cfg)}catch(e){utag.DB(e)};}
if(a.cfg&&a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};return true},handler:{base:"hospitals_displayed,page_type,content_type,page_url,article_byline,page_name,primary_tag,site_vertical,site_portal,site_product,site_product_section,site_product_subsection,site_zone,site_zone_colon,tab,bucket_tags,hospital_state,hospital_city,hospital_specialty",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){utag.DB('utag.handler.INIT');if(utag.initcatch){utag.initcatch=0;return}
this.iflag=1;a=utag.loader.q.length;if(a>0){utag.DB("Loader queue");for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){utag.DB("Load Rules");for(var d in utag.loader.GV(utag.cond)){utag.cond[d]=false;}
utag.DB(utag.data);utag.loader.loadrules();utag.DB(utag.cond);utag.loader.initcfg();utag.loader.OU();for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
utag.DB("RE: "+c);if(c=="alr")utag.DB("All Tags EXTENSIONS");utag.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);utag.rpt['ex_'+d]=0}}catch(er){utag.DB(er);utag.rpt['ex_'+d]=1;utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});}}
utag.DB(b);return g;}},trigger:function(a,b,c,d,e,f){utag.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};utag.DB(b);if(!this.iflag){utag.DB("trigger:called before tags loaded");for(d in utag.loader.f){if(!(utag.loader.f[d]===1))utag.DB('Tag '+d+' did not LOAD')}
utag.loader.q.push({a:a,b:utag.handler.C(b),c:c});return;}
utag.cfg.noview=false;utag.ut.merge(b,this.df,0);utag.loader.RDqp(b);utag.loader.RDcp(b);utag.loader.RDdom(b);utag.loader.RDmeta(b);utag.loader.RDut(b,a);utag.loader.RDva(b);function sendTag(a,b,d){try{if(typeof utag.sender[d]!="undefined"){utag.DB("SENDING: "+d);utag.sender[d].send(a,utag.handler.C(b));utag.rpt['s_'+d]=0;}else if(utag.loader.cfg[d].load!=2&&utag.loader.cfg[d].s2s!=1){utag.loader.sendq[d]=utag.loader.sendq[d]||[];utag.loader.sendq[d].push({"event":a,"data":utag.handler.C(b)});utag.loader.sendq.pending++;utag.loader.AS({id:d,load:1});}}catch(e){utag.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];sendTag(a,b,d);}}else if(utag.cfg.load_rules_ajax){this.RE(a,b,"blr");utag.ut.merge(utag.data,b,1);this.LR(b);this.RE(a,b,"alr");for(f=0;f<utag.loader.cfgsort.length;f++){d=utag.loader.cfgsort[f];if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in utag.loader.GV(utag.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");utag.loader.SC("utag_main",{"_st":((new Date()).getTime()+parseInt(utag.cfg.session_timeout))});},C:function(a,b,c){b={};for(c in utag.loader.GV(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!utag.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;}
return utag.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=utag.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return utag.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||c instanceof Array){a[p]=c;}else{if(utag.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d]}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=unescape(a)};return b},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}},loader:function(o,a,b,c,l){a=document;if(o.type=="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l]}
b.src=o.src;}
if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}};utag.o['usnews.main']=utag;utag.cfg={template:"ut4.39.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,session_timeout:1800000,readywait:0,noload:0,domain:utag.loader.lh(),path:"//tags.tiqcdn.com/utag/usnews/main/prod/",utid:"usnews/main/202501211511"};utag.cfg.v=utag.cfg.template+"202501211511";try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g,null,[141]);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g,null,[107]);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={101:0,102:0,106:0,108:0,109:0,111:0,112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,122:0,12:0,132:0,133:0,134:0,136:0,143:0,145:0,147:0,148:0,149:0,14:0,150:0,151:0,152:0,153:0,15:0,27:0,28:0,32:0,35:0,36:0,37:0,38:0,39:0,3:0,40:0,43:0,49:0,51:0,52:0,53:0,54:0,55:0,66:0,73:0,74:0,80:0,83:0,88:0,89:0,91:0,92:0,93:0,94:0,99:0};utag.pagevars=function(ud){ud=ud||utag.data;try{ud['js_page.counter']=counter}catch(e){utag.DB(e)};try{ud['js_page.New_Pagename']=New_Pagename}catch(e){utag.DB(e)};try{ud['js_page.COMSCORE']=COMSCORE}catch(e){utag.DB(e)};};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(_pd,_pc){var d=_pd||utag.data;var c=_pc||utag.cond;for(var l in utag.loader.GV(c)){switch(l){case'101':try{c[101]|=(/usnews\.com$/.test(d['dom.domain']))}catch(e){utag.DB(e)};break;case'102':try{c[102]|=(typeof d['site_product']=='undefined')||(d['site_product'].toString().toLowerCase().indexOf('hospital_data_insights'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'106':try{c[106]|=(d['site_vertical'].toString().indexOf('gotosea')>-1)}catch(e){utag.DB(e)};break;case'108':try{c[108]|=(d['dom.domain'].toString().toLowerCase().indexOf('gotosea'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'109':try{c[109]|=(d['dom.url'].toString().indexOf('www.brandconnex.com')>-1)}catch(e){utag.DB(e)};break;case'111':try{c[111]|=(/^\/education\/best-global-universities/.test(d['dom.pathname']))}catch(e){utag.DB(e)};break;case'112':try{c[112]|=(d['dom.url'].toString().toLowerCase().indexOf('book.gotosea.com'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'113':try{c[113]|=(d['site_product'].toString().toLowerCase().indexOf('washers'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'114':try{c[114]|=(d['site_product'].toString().toLowerCase().indexOf('dryers'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'115':try{c[115]|=(d['site_product'].toString().toLowerCase().indexOf('refrigerators'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'116':try{c[116]|=(d['site_product'].toString().toLowerCase().indexOf('laptops'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'117':try{c[117]|=(d['site_product'].toString().toLowerCase().indexOf('tablets'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'118':try{c[118]|=(d['dom.url'].toString().toLowerCase()=='https://deals.usnews.com/best-places-to-buy/laptops'.toLowerCase())}catch(e){utag.DB(e)};break;case'119':try{c[119]|=(d['dom.url'].toString().toLowerCase()=='https://deals.usnews.com/best-places-to-buy/refrigerator'.toLowerCase())}catch(e){utag.DB(e)};break;case'12':try{c[12]|=(d['site_portal'].toString().indexOf('investing')>-1)}catch(e){utag.DB(e)};break;case'120':try{c[120]|=(d['site_product'].toString().toLowerCase().indexOf('streaming services'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'122':try{c[122]|=(d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('insurance'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('autos'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'132':try{c[132]|=(d['site_vertical'].toString().toLowerCase()=='360'.toLowerCase()&&d['site_product'].toString().toLowerCase()=='air purifier'.toLowerCase())||(d['site_vertical'].toString().toLowerCase()=='360'.toLowerCase()&&d['site_product'].toString().toLowerCase()=='juicers'.toLowerCase())||(d['site_vertical'].toString().toLowerCase()=='360'.toLowerCase()&&d['site_product'].toString().toLowerCase()=='vacuumcleaners'.toLowerCase())}catch(e){utag.DB(e)};break;case'133':try{c[133]|=(d['site_product'].toString().toLowerCase().indexOf('tvs'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'134':try{c[134]|=(d['site_product'].toString().toLowerCase().indexOf('airfryers'.toLowerCase())>-1&&d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'136':try{c[136]|=(d['dom.url'].toString().toLowerCase().indexOf('www.usnews.com/360-reviews/insurance/pet/top'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'14':try{c[14]|=(d['site_vertical'].toString().toLowerCase().indexOf('homepage'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('news'.toLowerCase())>-1&&d['content_type'].toString().indexOf('editorial')>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('article'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('slideshow'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('health'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('article'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('health'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('slideshow'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('article'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('slideshow'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('real estate'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('article'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('real estate'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('slideshow'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('generic'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('article'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('generic'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('slideshow'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('realestate'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('slideshow'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('realestate'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('article'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('gallery'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('health'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('gallery'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('gallery'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('real estate'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('gallery'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('realestate'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('gallery'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('generic'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('gallery'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'143':try{c[143]|=(typeof d['site_product']=='undefined')||(d['site_product'].toString().toLowerCase().indexOf('academicinsights'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'145':try{c[145]|=(d['site_vertical'].toString().toLowerCase()=='realestate'.toLowerCase()&&d['site_product'].toString().toLowerCase()=='agents'.toLowerCase()&&d['site_product_section'].toString().toLowerCase()=='profile'.toLowerCase())}catch(e){utag.DB(e)};break;case'147':try{c[147]|=(d['dom.url']=='https://ai-uat2.usnews.com/')||(d['dom.url']=='https://ai-stag.usnews.com/')||(d['dom.url']=='https://ai.usnews.com/')}catch(e){utag.DB(e)};break;case'148':try{c[148]|=(d['dom.domain'].toString().indexOf('gotosea.com')>-1)}catch(e){utag.DB(e)};break;case'149':try{c[149]|=(d['dom.domain'].toString().indexOf('usnews.com')>-1)}catch(e){utag.DB(e)};break;case'15':try{c[15]|=(typeof d['crazyeggScriptTag']=='undefined')}catch(e){utag.DB(e)};break;case'150':try{c[150]|=(d['dom.domain'].toString().indexOf('brandconnex.com')>-1)}catch(e){utag.DB(e)};break;case'151':try{c[151]|=(d['dom.domain'].toString().indexOf('usnewsbrandfuse.com')>-1)||(d['dom.domain'].toString().indexOf('cataract-conversations.webflow.io')>-1)}catch(e){utag.DB(e)};break;case'152':try{c[152]|=(d['dom.domain'].toString().indexOf('theculturetrip.com')>-1)}catch(e){utag.DB(e)};break;case'153':try{c[153]|=(d['dom.domain'].toString().toLowerCase().indexOf('theculturetrip.com'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'27':try{c[27]|=(d['dom.pathname'].toString().toLowerCase().indexOf('best-colleges'.toLowerCase())>-1&&d['dom.pathname'].toString().toLowerCase().indexOf('/compare'.toLowerCase())<0&&d['dom.domain'].toString().indexOf('asdsuat')<0)||(d['dom.pathname'].toString().toLowerCase().indexOf('college-admissions-playbook'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('student-loan-ranger'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('scholarship-search-insider'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('high-school-notes'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'28':try{c[28]|=(d['user_country_code']!='US')}catch(e){utag.DB(e)};break;case'3':try{c[3]|=(d['dom.domain'].toString().toLowerCase().indexOf('cars'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'32':try{c[32]|=(d['dom.domain'].toString().indexOf('money')>-1)}catch(e){utag.DB(e)};break;case'35':try{c[35]|=(d['dom.domain'].toString().indexOf('usnewsbrandfuse.com')>-1&&d['page_type']=='sectionfront')}catch(e){utag.DB(e)};break;case'36':try{c[36]|=(parseFloat(d['dom.viewport_width'])>parseFloat(1280))}catch(e){utag.DB(e)};break;case'37':try{c[37]|=(parseFloat(d['dom.viewport_width'])>parseFloat(853)&&parseFloat(d['dom.viewport_width'])<=parseFloat(1280))}catch(e){utag.DB(e)};break;case'38':try{c[38]|=(parseFloat(d['dom.viewport_width'])<=parseFloat(853))}catch(e){utag.DB(e)};break;case'39':try{c[39]|=(d['dom.domain'].toString().indexOf('usnewsbrandfuse.com')>-1&&d['page_type']!='sectionfront'&&d['site_product_subsection'].toString().indexOf('wellsfargo')>-1)}catch(e){utag.DB(e)};break;case'40':try{c[40]|=(d['dom.domain'].toString().indexOf('usnewsbrandfuse.com')>-1)}catch(e){utag.DB(e)};break;case'43':try{c[43]|=(d['site_product_subsection']=='OppenheimerFunds'&&d['dom.domain'].toString().indexOf('usnewsbrandfuse.com')>-1)}catch(e){utag.DB(e)};break;case'49':try{c[49]|=(d['dom.url'].toString().toLowerCase().indexOf('2016-07-19/in-research-world-long-term-injury-care-hard-to-come-by'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'51':try{c[51]|=(d['dom.pathname'].toString().indexOf('/VanguardRetail/2/HowMuchMoneyDoYouNeedToRetire.html')>-1)}catch(e){utag.DB(e)};break;case'52':try{c[52]|=(d['dom.pathname'].toString().indexOf('/VanguardRetail/OnTheRoadToReady/index.html')>-1)}catch(e){utag.DB(e)};break;case'53':try{c[53]|=(d['dom.pathname'].toString().indexOf('/VanguardRetail/SpendMoreOfYourRetirementIncomeThanYouThoughtYouCould/')>-1)}catch(e){utag.DB(e)};break;case'54':try{c[54]|=(d['site_product']=='destinations')}catch(e){utag.DB(e)};break;case'55':try{c[55]|=(d['page_type']=='rankinglist')}catch(e){utag.DB(e)};break;case'66':try{c[66]|=(d['user_country_code'].toString().toLowerCase()=='AT'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='LV'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='BE'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='LI'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='BG'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='LT'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='HR'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='LU'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='CY'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='MT'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='CZ'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='NL'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='DK'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='NO'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='EE'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='PL'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='FI'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='PT'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='FR'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='RO'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='DE'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='SK'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='GR'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='SI'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='HU'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='ES'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='IS'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='SE'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='IE'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='CH'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='IT'.toLowerCase())||(d['user_country_code'].toString().toLowerCase()=='GB'.toLowerCase())}catch(e){utag.DB(e)};break;case'73':try{c[73]|=(d['site_vertical'].toString().toLowerCase()=='autos'.toLowerCase())}catch(e){utag.DB(e)};break;case'74':try{c[74]|=(!/^bestlawfirms/.test(d['dom.domain'])&&!/^lawyers/.test(d['dom.domain'])&&d['dom.domain'].toString().indexOf('usnewsstemsolutions')<0&&d['dom.domain'].toString().indexOf('usnewshot')<0&&d['dom.domain'].toString().indexOf('usnewsbrandfuse')<0)}catch(e){utag.DB(e)};break;case'80':try{c[80]|=(typeof d['js_page.COMSCORE']=='undefined')}catch(e){utag.DB(e)};break;case'83':try{c[83]|=(typeof d['site_portal']=='undefined')||(d['site_portal'].toString().toLowerCase()!='agents'.toLowerCase())}catch(e){utag.DB(e)};break;case'88':try{c[88]|=(typeof d['event_targets']!='undefined'&&d['event_targets'].toString().toLowerCase().indexOf('google_analytics'.toLowerCase())>-1)||(typeof d['event_targets']!='undefined'&&typeof d['event_targets']!='undefined'&&d['event_targets']=='')||(typeof d['event_targets']=='undefined')}catch(e){utag.DB(e)};break;case'89':try{c[89]|=(typeof d['event_targets']!='undefined'&&d['event_targets'].toString().toLowerCase().indexOf('comscore'.toLowerCase())>-1)||(typeof d['event_targets']!='undefined'&&typeof d['event_targets']!='undefined'&&d['event_targets']!='')||(typeof d['event_targets']=='undefined')}catch(e){utag.DB(e)};break;case'91':try{c[91]|=(d['site_product'].toString().indexOf('bestcolleges')>-1)}catch(e){utag.DB(e)};break;case'92':try{c[92]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.usnews.com/chlf'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('news'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('sectionfront'.toLowerCase())<0&&d['page_type'].toString().toLowerCase().indexOf('portal'.toLowerCase())<0&&typeof d['page_type']!='undefined')||(d['site_product'].toString().toLowerCase().indexOf('bestcolleges'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('sectionfront'.toLowerCase())<0&&d['page_type'].toString().toLowerCase().indexOf('portal'.toLowerCase())<0&&typeof d['page_type']!='undefined')||(d['site_vertical'].toString().toLowerCase().indexOf('travel'.toLowerCase())>-1&&d['page_type'].toString().toLowerCase().indexOf('sectionfront'.toLowerCase())<0&&d['page_type'].toString().toLowerCase().indexOf('portal'.toLowerCase())<0&&typeof d['page_type']!='undefined')||(d['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&d['site_portal'].toString().toLowerCase().indexOf('investing'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('best graduate schools'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('compass'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('bestcolleges'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('online programs'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('best global universities'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('community colleges'.toLowerCase())>-1)||(d['site_vertical'].toString().toLowerCase().indexOf('education'.toLowerCase())>-1&&d['site_product'].toString().toLowerCase().indexOf('best high schools'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase()=='https://www.usnews.com/education'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://creditcards.usnews.com/'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://creditcards.usnews.com/cash-back'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://creditcards.usnews.com/student'.toLowerCase())}catch(e){utag.DB(e)};break;case'93':try{c[93]|=(d['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'94':try{c[94]|=(d['dom.domain'].toString().toLowerCase().indexOf('/news/healthiest-communities'.toLowerCase())>-1)||(d['site_product']=='Healthiest Communities')||(d['dom.pathname'].toString().indexOf('chlf')>-1)}catch(e){utag.DB(e)};break;case'99':try{c[99]|=(d['site_vertical'].toString().indexOf('gotosea')>-1)||(d['dom.domain'].toString().indexOf('gotosea')>-1)}catch(e){utag.DB(e)};break;}}};utag.pre=function(){utag.loader.initdata();utag.pagevars();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b,c,d){c=['aws_cognito_email'];for(d=0;d<c.length;d++){try{b[c[d]]=b[c[d]]instanceof Array?(function(b){for(var j=0;j<b.length;j++){b[j]=(b[j].toLowerCase?b[j].toLowerCase():b[j]);}return b;}(b[c[d]])):b[c[d]]instanceof Object?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){utag.DB(e);}}},function(a,b){try{if(1){b['aws_cognito_email_hashed']=b['aws_cognito_email'];b['aws_cognito_email_hashed_sha256']=b['aws_cognito_email']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){var fourLevelHierarchy=[b['site_vertical'],b['site_portal'],b['site_product'],b['site_product_section']],fiveLevelHierarchy=[b['site_vertical'],b['site_portal'],b['site_product'],b['site_product_section'],b['site_product_subsection']],concatHierarchy=function(hierarchy){return hierarchy
.filter(function(value){return value!='null'?value:null;})
.join('/').replace(/ +/g,'').replace(/\//g,' ').toLowerCase();};b['five_level_hierarchy']=concatHierarchy(fiveLevelHierarchy);b['four_level_hierarchy']=concatHierarchy(fourLevelHierarchy);}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['dom.domain'].toString().toLowerCase().indexOf('cars'.toLowerCase())<0&&b['dom.domain'].toString().toLowerCase().indexOf('travel'.toLowerCase())<0&&b['dom.domain'].toString().toLowerCase().indexOf('money'.toLowerCase())<0&&b['dom.domain'].toString().toLowerCase().indexOf('realestate'.toLowerCase())<0&&b['dom.domain'].toString().toLowerCase().indexOf('health'.toLowerCase())<0)){c=[b['meta.site'],b['meta.zone']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if((b['dom.domain'].toString().toLowerCase().indexOf('cars'.toLowerCase())>-1&&b['site_vertical'].toString().toLowerCase()=='autos'.toLowerCase())){c=[b['site_vertical'],b['site_portal'],b['site_product'],b['tab']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if((b['dom.domain'].toString().toLowerCase().indexOf('realestate'.toLowerCase())>-1&&b['site_vertical'].toString().toLowerCase()=='realestate'.toLowerCase())){c=[b['site_vertical'],b['site_portal'],b['site_product']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if((b['site_vertical'].toString().toLowerCase()=='travel'.toLowerCase()&&b['dom.domain'].toString().toLowerCase().indexOf('travel'.toLowerCase())>-1)){c=[b['site_vertical'],b['site_product'],b['site_product_section'],b['site_product_subsection'],b['tab']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(b['site_vertical'].toString().toLowerCase()=='money'.toLowerCase()){c=[b['site_vertical'],b['site_portal'],b['site_product'],b['site_product_section']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(b['site_vertical'].toString().toLowerCase()=='360'.toLowerCase()){c=[b['site_vertical'],b['site_portal'],b['site_product']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if((b['dom.domain'].toString().toLowerCase().indexOf('health'.toLowerCase())>-1&&b['site_vertical'].toString().toLowerCase().indexOf('health'.toLowerCase())>-1)){c=[b['site_vertical'],b['site_portal'],b['site_product']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if((b['site_vertical'].toString().toLowerCase().indexOf('exit'.toLowerCase())>-1&&b['page_type'].toString().toLowerCase().indexOf('exit'.toLowerCase())>-1&&b['dom.url'].toString().indexOf('redirect')>-1)){c=[b['site_vertical'],b['page_type']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(typeof b['qp.usn_disable']!=='undefined'&&b['qp.usn_disable']==='tealium_extensions'){b.disable_extensions=true;}}}catch(e){utag.DB(e)}},function(a,b){if(typeof window.CE2==='object'){b.crazyeggScriptTag=true;}},function(a,b){b.nativoScriptTag=true;},function(a,b){try{if(1){try{b['is_mobile']=/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent)?"1":"0"}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['gdpr_countries']=["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MT","NL","NO","PL","PT","RO","SE","SI","SK"]}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['usn_geo']=(function(){var xmlhttp=new XMLHttpRequest();xmlhttp.open('GET','https://www.usnews.com/static/esi/usn-geo.json',!1);if(xmlhttp.overrideMimeType){xmlhttp.overrideMimeType('application/json')}xmlhttp.send();if(xmlhttp.status==200){var response=JSON.parse(xmlhttp.responseText);if(response&&response.geo&&response.geo.country_code){window.dispatchEvent(new Event('tealium:locationSet'));return response.geo}}return null}())}catch(e){};try{b['user_country_code']=utag_data.usn_geo&&utag_data.usn_geo.country_code}catch(e){};try{b['user_zip_codes']=utag_data.usn_geo&&utag_data.usn_geo.zips}catch(e){};try{b['user_under_gdpr']=utag_data.user_country_code&&utag_data.gdpr_countries&&(utag_data.gdpr_countries.indexOf(utag_data.user_country_code)>-1)}catch(e){};try{b['user_region_code']=utag_data.usn_geo&&utag_data.usn_geo.region_code}catch(e){}}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if((b['dom.domain'].toString().toLowerCase().indexOf('lawyers'.toLowerCase())>-1&&b['site_product'].toString().toLowerCase()=='lawyerdirectory'.toLowerCase())){c=[b['site_vertical'],b['site_product']];b['site_zone']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(1){c=[b['usn_visitor_id'],b['usn_session_id'],b['usn_pageview_id'],b['usn_hit_id']];b['usn_analytics_id']=c.join('-')}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['clean_url']=b['dom.url'].replace(/([^&=\/]+(%40|@)[^\.]+)\./g,'=xxx@xxx.');}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['clean_querystring']=b['dom.query_string'].replace(/=([^&]+@[^\.]+)\./g,'=xxx@xxx.');}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){utag.ut.md5=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);(function(t){var n=utag.ut.md5,r=n.lib,e=r.WordArray,i=r.Hasher,o=n.algo,s=[];!function(){for(var n=0;n<64;n++)s[n]=4294967296*t.abs(t.sin(n+1))|0}();var a=o.MD5=i.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,n){for(var r=0;r<16;r++){var e=n+r,i=t[e];t[e]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,a=t[n+0],d=t[n+1],l=t[n+2],p=t[n+3],y=t[n+4],g=t[n+5],w=t[n+6],v=t[n+7],_=t[n+8],m=t[n+9],B=t[n+10],x=t[n+11],b=t[n+12],S=t[n+13],H=t[n+14],z=t[n+15],C=o[0],M=o[1],A=o[2],D=o[3];C=c(C,M,A,D,a,7,s[0]),D=c(D,C,M,A,d,12,s[1]),A=c(A,D,C,M,l,17,s[2]),M=c(M,A,D,C,p,22,s[3]),C=c(C,M,A,D,y,7,s[4]),D=c(D,C,M,A,g,12,s[5]),A=c(A,D,C,M,w,17,s[6]),M=c(M,A,D,C,v,22,s[7]),C=c(C,M,A,D,_,7,s[8]),D=c(D,C,M,A,m,12,s[9]),A=c(A,D,C,M,B,17,s[10]),M=c(M,A,D,C,x,22,s[11]),C=c(C,M,A,D,b,7,s[12]),D=c(D,C,M,A,S,12,s[13]),A=c(A,D,C,M,H,17,s[14]),C=u(C,M=c(M,A,D,C,z,22,s[15]),A,D,d,5,s[16]),D=u(D,C,M,A,w,9,s[17]),A=u(A,D,C,M,x,14,s[18]),M=u(M,A,D,C,a,20,s[19]),C=u(C,M,A,D,g,5,s[20]),D=u(D,C,M,A,B,9,s[21]),A=u(A,D,C,M,z,14,s[22]),M=u(M,A,D,C,y,20,s[23]),C=u(C,M,A,D,m,5,s[24]),D=u(D,C,M,A,H,9,s[25]),A=u(A,D,C,M,p,14,s[26]),M=u(M,A,D,C,_,20,s[27]),C=u(C,M,A,D,S,5,s[28]),D=u(D,C,M,A,l,9,s[29]),A=u(A,D,C,M,v,14,s[30]),C=f(C,M=u(M,A,D,C,b,20,s[31]),A,D,g,4,s[32]),D=f(D,C,M,A,_,11,s[33]),A=f(A,D,C,M,x,16,s[34]),M=f(M,A,D,C,H,23,s[35]),C=f(C,M,A,D,d,4,s[36]),D=f(D,C,M,A,y,11,s[37]),A=f(A,D,C,M,v,16,s[38]),M=f(M,A,D,C,B,23,s[39]),C=f(C,M,A,D,S,4,s[40]),D=f(D,C,M,A,a,11,s[41]),A=f(A,D,C,M,p,16,s[42]),M=f(M,A,D,C,w,23,s[43]),C=f(C,M,A,D,m,4,s[44]),D=f(D,C,M,A,b,11,s[45]),A=f(A,D,C,M,z,16,s[46]),C=h(C,M=f(M,A,D,C,l,23,s[47]),A,D,a,6,s[48]),D=h(D,C,M,A,v,10,s[49]),A=h(A,D,C,M,H,15,s[50]),M=h(M,A,D,C,g,21,s[51]),C=h(C,M,A,D,b,6,s[52]),D=h(D,C,M,A,p,10,s[53]),A=h(A,D,C,M,B,15,s[54]),M=h(M,A,D,C,d,21,s[55]),C=h(C,M,A,D,_,6,s[56]),D=h(D,C,M,A,z,10,s[57]),A=h(A,D,C,M,w,15,s[58]),M=h(M,A,D,C,S,21,s[59]),C=h(C,M,A,D,y,6,s[60]),D=h(D,C,M,A,x,10,s[61]),A=h(A,D,C,M,l,15,s[62]),M=h(M,A,D,C,m,21,s[63]),o[0]=o[0]+C|0,o[1]=o[1]+M|0,o[2]=o[2]+A|0,o[3]=o[3]+D|0},_doFinalize:function(){var n=this._data,r=n.words,e=8*this._nDataBytes,i=8*n.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(e/4294967296),s=e;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return a},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function c(t,n,r,e,i,o,s){var a=t+(n&r|~n&e)+i+s;return(a<<o|a>>>32-o)+n}function u(t,n,r,e,i,o,s){var a=t+(n&e|r&~e)+i+s;return(a<<o|a>>>32-o)+n}function f(t,n,r,e,i,o,s){var a=t+(n^r^e)+i+s;return(a<<o|a>>>32-o)+n}function h(t,n,r,e,i,o,s){var a=t+(r^(n|~e))+i+s;return(a<<o|a>>>32-o)+n}n.MD5=i._createHelper(a),n.HmacMD5=i._createHmacHelper(a)}(Math));try{if(typeof b['aws_cognito_email_hashed']!='undefined'&&b['aws_cognito_email_hashed']!=''){b['aws_cognito_email_hashed']=utag.ut.md5.MD5(b['aws_cognito_email_hashed']).toString();}}catch(e){}},function(a,b){utag.ut.sha256=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);!function(r){var t=utag.ut.sha256,e=t.lib,a=e.WordArray,n=e.Hasher,s=t.algo,o=[],i=[];!function(){function t(t){for(var e=r.sqrt(t),a=2;a<=e;a++)if(!(t%a))return!1;return!0}function e(r){return 4294967296*(r-(0|r))|0}for(var a=2,n=0;n<64;)t(a)&&(n<8&&(o[n]=e(r.pow(a,.5))),i[n]=e(r.pow(a,1/3)),n++),a++}();var h=[],c=s.SHA256=n.extend({_doReset:function(){this._hash=new a.init(o.slice(0))},_doProcessBlock:function(r,t){for(var e=this._hash.words,a=e[0],n=e[1],s=e[2],o=e[3],c=e[4],l=e[5],u=e[6],f=e[7],_=0;_<64;_++){if(_<16)h[_]=0|r[t+_];else{var v=h[_-15],d=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,H=h[_-2],g=(H<<15|H>>>17)^(H<<13|H>>>19)^H>>>10;h[_]=d+h[_-7]+g+h[_-16]}var p=a&n^a&s^n&s,w=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),y=f+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&l^~c&u)+i[_]+h[_];f=u,u=l,l=c,c=o+y|0,o=s,s=n,n=a,a=y+(w+p)|0}e[0]=e[0]+a|0,e[1]=e[1]+n|0,e[2]=e[2]+s|0,e[3]=e[3]+o|0,e[4]=e[4]+c|0,e[5]=e[5]+l|0,e[6]=e[6]+u|0,e[7]=e[7]+f|0},_doFinalize:function(){var t=this._data,e=t.words,a=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=r.floor(a/4294967296),e[15+(n+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var r=n.clone.call(this);return r._hash=this._hash.clone(),r}});t.SHA256=n._createHelper(c),t.HmacSHA256=n._createHmacHelper(c)}(Math);try{if(typeof b['aws_cognito_email_hashed_sha256']!='undefined'&&b['aws_cognito_email_hashed_sha256']!=''){b['aws_cognito_email_hashed_sha256']=utag.ut.sha256.SHA256(b['aws_cognito_email_hashed_sha256']).toString();}}catch(e){}},function(a,b){try{if(1){try{b['clean_pathname']=b['dom.pathname'].replace(/([^&=\/]+(%40|@)[^\.]+)\./g,'=xxx@xxx.');}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((b['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&b['site_product'].toString().toLowerCase().indexOf('best stocks'.toLowerCase())>-1&&b['page_type'].toString().toLowerCase().indexOf('profile'.toLowerCase())>-1)){const src="https://ad.wsod.com/site/3eee0c3b640be5316a5f97b313b1f06a/0.0.async/";const scriptExists=document.querySelector("script[src='"+src+"']");if(!scriptExists){const script=document.createElement('script');script.src=src;script.async=true;document.head.appendChild(script);}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.usn_click_id']!='undefined'&&b['qp.usn_click_id']!=''){b['usn_click_id']=b['qp.usn_click_id']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['nativeIsMigrated']=true}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((b['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1&&b['dom.domain'].toString().indexOf('usnews.com')>-1)){function setCountryCookie(cookieValue){const cookieName='usn_geo_country';let minutes=10;var uspOptOut=document.cookie.indexOf('usprivacy=1YYY')>-1;if(uspOptOut||!!b.user_under_gdpr){minutes=0;cookieValue='';}else if(cookieValue==='US'){minutes=1*60;}
try{const date=new Date();const setTime=minutes?date.getTime()+minutes*60*1000:0;date.setTime(setTime);document.cookie=cookieName+'='+cookieValue+
';expires='+date.toGMTString()+
';domain=usnews.com'+
';SameSite=Strict'+
';path=/';}catch(error){console.error('Unable to set usn geo cookie',error);}}
if(b.user_country_code){setCountryCookie(b.user_country_code);}else{const checkAgain=function(){setCountryCookie(b.user_country_code);window.removeEventListener('tealium:locationSet',checkAgain);};window.addEventListener('tealium:locationSet',checkAgain);}}}catch(e){utag.DB(e)}},function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[747]=='undefined'){utag.runonce.ext[747]=1;if(1){document.addEventListener('mousedown',function(event){const clickId=crypto.randomUUID().replaceAll('-','');fireUtagLink(event,clickId);fireBlueshift(event,clickId);});function fireBlueshift(event,clickId){const target=event.target;const element=target.closest('[data-blueshift-event-type], [data-blueshift-event-payload]');const isElementTrackedByBlueshift=element&&element.tagName!=='FORM';const blueshiftMacrosReplacement=(str)=>{if(typeof str!=='string')return str;let newStr=str;const macros={'{{USN_CLICK_ID}}':clickId,'{{USN_VISITOR_ID}}':utag_data.usn_visitor_id||'',};for([key,value]of Object.entries(macros)){newStr=newStr.replaceAll(key,value);}
return newStr;}
if(isElementTrackedByBlueshift){const event_type=element.getAttribute('data-blueshift-event-type');let event_attributes=JSON.parse(element.getAttribute('data-blueshift-event-payload'));Object.keys(event_attributes).forEach(function(key){event_attributes[key]=blueshiftMacrosReplacement(event_attributes[key]);});window.blueshift?.track(event_type,event_attributes);}}
function fireUtagLink(event,clickId){const target=event.target,element=target.closest('[data-tracking-id], [data-tracking-identifier]'),anchorElement=target.closest('a[href]'),hasTrackingId=!!element;let trackingId='',trackingCampaign='',trackingPlacement='',trackingDMP='';if(hasTrackingId&&element.tagName!=='FORM'){let utagData=b||{};trackingId=element.getAttribute('data-tracking-id')||element.getAttribute('data-tracking-identifier');trackingCampaign=element.getAttribute('data-tracking-campaign');trackingPlacement=element.getAttribute('data-tracking-placement');trackingDMP=element.getAttribute('data-tracking-dmp');let trackingSponsored=element.getAttribute('data-tracking-sponsored');if(trackingSponsored=='true'){trackingId+='-sponsored';}
let trackingNPI=element.getAttribute('data-tracking-npi'),trackingAHA=element.getAttribute('data-tracking-aha');let trackingSubtracking=element.getAttribute('data-tracking-sub');let trackingPartner=element.getAttribute('data-tracking-partner');let trackingDestinationURL=element.getAttribute('data-tracking-destination-url');let eventData={'event_category':trackingId,'event_action':trackingCampaign?trackingCampaign:'','event_label':trackingPlacement?trackingPlacement:'','doctor_npi':trackingNPI?trackingNPI:undefined,'aha_code':trackingAHA?trackingAHA:undefined,'subtracking':trackingSubtracking?trackingSubtracking:undefined,'event_partner':trackingPartner?trackingPartner:undefined,'event_dmp':trackingDMP?trackingDMP:undefined,'event_destination_url':trackingDestinationURL?trackingDestinationURL:undefined,'usn_click_id':clickId};delete utagData.event_name;delete utagData.campaign_id;delete utagData.placement;let sendData=Object.assign(utagData,eventData);utag.link(sendData,null,[204,206,256,222,202,208]);delete utag_data.event_name;delete utag_data.campaign_id;delete utag_data.placement;delete utag_data.usn_click_id;delete utag_data.event_partner;delete utag_data.event_destination_url;delete utag_data.event_dmp;}
if(!!anchorElement){const urlParams=new URLSearchParams(window.location.search),source=urlParams.get('utm_source')||'',medium=urlParams.get('utm_medium')||'',campaign=urlParams.get('utm_campaign')||'',keyword=urlParams.get('utm_keyword')||'',gclid=urlParams.get('gclid')||'',fbclid=urlParams.get('fbclid')||'',userAgent=window.navigator.userAgent,isTouch=window.navigator.maxTouchPoints,device=userAgent.match(/\b(Android|Mobile|iPhone)\b/)?'mobile_phone':isTouch>0?'tablet':'desktop',width=window.innerWidth,browser=width<640?'small':width>640&&width<1024?'medium':'large',utagDataUsnVisitorId=utag_data.usn_visitor_id||'',page_type=utag_data.site_product_subsection||'',sref=window.location.href.split('?')[0].split('#')[0],_href=anchorElement.getAttribute('href'),macros={'{{UTM_SOURCE}}':source,'{{UTM_MEDIUM}}':medium,'{{UTM_CAMPAIGN}}':campaign,'{{UTM_KEYWORD}}':keyword,'{{GCLID}}':gclid,'{{FBCLID}}':fbclid,'{{DEVICE}}':device,'{{BROWSER}}':browser,'{{DATA_TRACKING_PLACEMENT}}':trackingPlacement,'{{USN_VISITOR_ID}}':utagDataUsnVisitorId,'{{USN_CLICK_ID}}':clickId,'{{SREF}}':sref,'{{PAGE_TYPE}}':page_type,},replacements={};for(let macro in macros){replacements[macro]=macros[macro];replacements[encodeURIComponent(macro)]=macros[macro];}
let newHref=Object.keys(replacements).reduce((tempHref,macro)=>tempHref.replace(macro,replacements[macro]),_href);if(_href.indexOf('/outro?')!==-1&&_href.indexOf('&usn_click_id=')===-1){newHref+='&usn_click_id='+clickId;}
if(_href!==newHref){anchorElement.setAttribute('href',newHref);}}}
if(!crypto.randomUUID){crypto.randomUUID=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16));};}}}}catch(e){utag.DB(e)}},function(a,b){try{if(utag.data['qp.utagdb']){if(utag.data['qp.utagdb'].match(/1|true/i)){document.cookie='utagdb=true';utag.data['cp.utagdb']='true';utag.cfg.utagdb=true;}else{document.cookie='utagdb=false';utag.data['cp.utagdb']='false';utag.cfg.utagdb=false;}}
}catch(e){utag.DB('Tealium Debugging Tools Failed: '+e);}},function(a,b){try{if(1){b['page_url']=b['dom.pathname']}}catch(e){utag.DB(e);}},function(a,b){try{if((b['page_type'].toString().indexOf('search')>-1&&typeof b['qp.stq']!='undefined')){b['search_keywords']=b['qp.stq']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['pathname_and_hash']=document.location.pathname+document.location.hash}catch(e){}}}catch(e){utag.DB(e);}},function(a,b,c,d){b._ccity=(typeof b['']!='undefined')?b['']:'';b._ccountry=(typeof b['']!='undefined')?b['']:'';b._ccurrency=(typeof b['']!='undefined')?b['']:'';b._ccustid=(typeof b['customer_id']!='undefined')?b['customer_id']:'';b._corder=(typeof b['order_id']!='undefined')?b['order_id']:'';b._cpromo=(typeof b['promo_code']!='undefined')?b['promo_code']:'';b._cship=(typeof b['order_shipping']!='undefined')?b['order_shipping']:'';b._cstate=(typeof b['']!='undefined')?b['']:'';b._cstore=(typeof b['']!='undefined')?b['']:'web';b._csubtotal=(typeof b['order_subtotal']!='undefined')?b['order_subtotal']:'';b._ctax=(typeof b['order_tax']!='undefined')?b['order_tax']:'';b._ctotal=(typeof b['order_total']!='undefined')?b['order_total']:'';b._ctype=(typeof b['']!='undefined')?b['']:'';b._czip=(typeof b['customer_zip']!='undefined')?b['customer_zip']:'';b._cprod=(typeof b['product_name']!='undefined'&&b['product_name'].length>0)?b['product_name']:[];b._cprodname=(typeof b['product_name']!='undefined'&&b['product_name'].length>0)?b['product_name']:[];b._cbrand=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];b._ccat=(typeof b['product_category']!='undefined'&&b['product_category'].length>0)?b['product_category']:[];b._ccat2=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];b._cquan=(typeof b['product_quantity']!='undefined'&&b['product_quantity'].length>0)?b['product_quantity']:[];b._cprice=(typeof b['product_price']!='undefined'&&b['product_price'].length>0)?b['product_price']:[];b._csku=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];b._cpdisc=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];if(b._cprod.length==0){b._cprod=b._csku.slice()};if(b._cprodname.length==0){b._cprodname=b._csku.slice()};function tf(a){if(a==''||isNaN(parseFloat(a))){return a}else{return(parseFloat(a)).toFixed(2)}};b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};},function(a,b){(function($){if(b['meta.search-term-name']){searchKeywords=b['qp.'+b['meta.search-term-name']];b.search_keywords=decodeURIComponent(searchKeywords);b.search_results=$('#results_count').text();}}(jQuery));},function(a,b){try{if(1){try{b['slideshow_slidenumber']=jQuery("p.t-taut.t-dim.item.item-right").text()}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['meta.keywords']=b['meta.keywords'].toLowerCase().replace(/\s/g,'');}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((b['site_vertical'].toString().toLowerCase().indexOf('autos'.toLowerCase())>-1&&b['site_version'].toString().toLowerCase().indexOf('atlas'.toLowerCase())>-1)){b['meta.keywords']=''}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.url'].toString().toLowerCase().indexOf('/search'.toLowerCase())>-1||b['dom.url'].toString().toLowerCase().indexOf('/best-colleges/rankings/'.toLowerCase())>-1||(b['dom.url'].toString().toLowerCase().indexOf('/best-colleges/'.toLowerCase())>-1&&b['page_type'].toString().toLowerCase().indexOf('directory'.toLowerCase())>-1&&b['meta.zone'].toString().toLowerCase().indexOf('directory'.toLowerCase())>-1)){b['js_page.counter']='+1'}}catch(e){utag.DB(e);}},function(a,b){var ponies=true;},function(a,b){try{if(1){try{b['firm_affiliations_semicolon']=utag_data.firm_affiliations.join(';')}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['search_results_count']=(function(){var $searchResultsCount,searchResultsCount;if(a==='view'&&jQuery){$searchResultsCount=jQuery('*[data-tracking-id=search-results-count]');if($searchResultsCount.length){searchResultsCount=$searchResultsCount.first().text().replace(/\s/g,'');}}return searchResultsCount;}());}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((b['dom.url'].toString().indexOf('/topics/')>-1&&typeof b['page_type']=='undefined')||(b['dom.url'].toString().indexOf('/topic/')>-1&&typeof b['page_type']!='undefined'&&b['page_type']=='')){b['page_type']='topic'}}catch(e){utag.DB(e);}},function(a,b){try{if(b['page_type']=='Methodology'){b['page_type']='methodology'}}catch(e){utag.DB(e);}},function(a,b){try{if(b['page_type']=='Video'){b['page_type']='video'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['email_hashed']=b.aws_cognito_email_hashed||b.sailthru_email_hashed}catch(e){};try{b['email_hashed_sha256']=b.aws_cognito_email_hashed_sha256||b.sailthru_email_hashed_sha256}catch(e){}}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(1){c=[b['dom.domain'],b['page_url']];b['previous_domain_and_url']=c.join('')}}catch(e){utag.DB(e);}},function(a,b){b['previous_page_name']=b['cp.utag_main__prevpage'];utag.loader.SC('utag_main',{'_prevpage':b['previous_domain_and_url']+';exp-1h'})},function(a,b){try{if(b['dom.domain'].toString().indexOf('theculturetrip.com')>-1){(function(){const cookieName='ctua-toastDismissed';const cookieExpirationDays=365;const htmlContent=`By using the Culture Trip website,you agree to our updated&nbsp;<a href="https://theculturetrip.com/terms-of-use"target="_blank"style="color: #0000EE; text-decoration: underline;"class="ctua-toast-link">User Agreement</a>
      and
      &nbsp;<a href="https://www.usnews.com/features/info/privacy" target="_blank" style="color:#0000EE;text-decoration:underline;" class="ctua-toast-link">Privacy Policy</a>,
      including an arbitration clause and class action waiver that covers any disputes relating to our policies and your use of our products and services.
    `;

    // Check if toast has already been dismissed
    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }

    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    // Create toast dynamically
    function createToast(htmlContent) {
      const toast = document.createElement('div');
      toast.id = 'ctua-toast';
      toast.style.position = 'fixed'; // Anchored to the screen
      toast.style.bottom = '20px';
      toast.style.left = '20px';
      toast.style.maxWidth = '500px'; // Limit the maximum width
      toast.style.background = '#fff'; // White background
      toast.style.color = '#333'; // Medium gray text
      toast.style.padding = '10px 20px';
      toast.style.border = '1px solid #ccc'; // Medium gray border
      toast.style.borderRadius = '5px';
      toast.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Subtle shadow
      toast.style.zIndex = '1000';
      toast.style.fontSize = '14px'; // Set font size for the entire toast
      toast.style.display = 'none';

      // Adjust margin for mobile screens
      toast.style.right = '20px'; // Default margin
      if (window.innerWidth <= 480) {
        toast.style.right = '10px'; // Smaller margin for smaller screens
      }

      const content = document.createElement('div');
      content.className = 'ctua-toast-content';
      content.innerHTML = htmlContent;

      const closeBtn = document.createElement('span');
      closeBtn.textContent = 'X';
      closeBtn.id = 'ctua-toast-close-btn';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '5px';
      closeBtn.style.right = '10px'; // Increased padding on the right
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.color = '#555'; // Black or dark gray close button
      closeBtn.style.fontWeight = 'bold';

      closeBtn.addEventListener('click', function () {
        toast.style.display = 'none';
        setCookie(cookieName, 'true', cookieExpirationDays); // Prevent showing for 7 days
      });

      // Add event listener for links to dismiss toast
      content.querySelectorAll('.ctua-toast-link').forEach(link => {
        link.addEventListener('click', function () {
          setCookie(cookieName, 'true', cookieExpirationDays); // Prevent showing for 7 days
          toast.style.display = 'none';
        });
      });

      toast.appendChild(content);
      toast.appendChild(closeBtn);
      document.body.appendChild(toast);

      // Show the toast
      toast.style.display = 'block';
    }

    // Initialize the toast if it hasn't been dismissed
    if (!getCookie(cookieName)) {
      createToast(htmlContent);
    }
  })();
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[1014]=='undefined'){utag.runonce.ext[1014]=1;if(1){
function checkConditionWithTimeout(conditionFunc, onSuccess, onFailure, timeout, maxRetries) {
    var retries = 0;

    var intervalId = setInterval(function() {
        if (conditionFunc()) {
            clearInterval(intervalId);
            onSuccess();
        } else {
            retries++;
            if (retries >= maxRetries) {
                clearInterval(intervalId);
                onFailure();
            }
        }
    }, timeout);
}

function condition() {
    var tiqIsLoaded = window.utag && window.utag.handler && window.utag.handler.iflag === 1;
    return tiqIsLoaded;
}

function onSuccess() {
    var queuedEvent;
	window.tealiumCmpIntegration.earlyEventQueue = window.tealiumCmpIntegration.earlyEventQueue || [];
	while (window.tealiumCmpIntegration.earlyEventQueue.length > 0) {
    	queuedEvent = window.tealiumCmpIntegration.earlyEventQueue.shift();
    	window.tealiumCmpIntegration.logger("Processing queued early event for currently consented tags:" + JSON.stringify(queuedEvent, null, 2));
    	window.utag.track(queuedEvent);
	}
}

function onFailure() {
    window.tealiumCmpIntegration.logger("Max retries reached,aborting early event queue processing.");
}

var timeout = 250; // 0.25 seconds
var maxRetries = 20; // Reattempt for 5 seconds

checkConditionWithTimeout(condition, onSuccess, onFailure, timeout, maxRetries);
}}} catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"id":"886","bwq":0,"alr":0,"end":0,"blr":1},{"end":0,"alr":0,"id":"762","bwq":0,"blr":1},{"end":0,"alr":0,"id":"529","bwq":0,"blr":1},{"id":"1","bwq":0,"alr":0,"end":0,"blr":1},{"end":0,"alr":0,"id":"369","bwq":0,"blr":1},{"end":0,"alr":0,"id":"422","bwq":0,"blr":1},{"id":"374","bwq":0,"alr":0,"end":0,"blr":1},{"id":"410","bwq":0,"alr":0,"end":0,"blr":1},{"end":0,"alr":0,"id":"535","bwq":0,"blr":1},{"id":"662","bwq":0,"alr":0,"end":0,"blr":1},{"end":0,"alr":0,"bwq":0,"id":"601","blr":1},{"blr":1,"end":0,"alr":0,"bwq":0,"id":"533"},{"blr":1,"id":"96","bwq":0,"alr":0,"end":0},{"end":0,"alr":0,"bwq":0,"id":"97","blr":1},{"blr":1,"id":"140","bwq":0,"alr":0,"end":0},{"id":"957","bwq":0,"alr":0,"end":0,"blr":1},{"blr":1,"end":0,"alr":0,"id":"433","bwq":0},{"blr":1,"id":"452","bwq":0,"alr":0,"end":0},{"blr":1,"end":0,"alr":0,"bwq":0,"id":"468"},{"id":"790","bwq":0,"alr":0,"end":0,"blr":1},{"blr":1,"id":"792","bwq":0,"alr":0,"end":0},{"blr":1,"id":"761","bwq":0,"alr":0,"end":0},{"blr":1,"id":"872","bwq":0,"alr":0,"end":0},{"blr":1,"end":0,"alr":0,"id":"864","bwq":0},{"blr":1,"id":"866","bwq":0,"alr":0,"end":0},{"blr":1,"end":0,"alr":0,"id":"905","bwq":0},{"blr":1,"bwq":0,"id":"938","alr":0,"end":0},{"id":"950","bwq":0,"alr":0,"end":0,"blr":1},{"blr":0,"end":0,"alr":1,"id":"747","bwq":0},{"blr":0,"id":"14","bwq":0,"alr":1,"end":0},{"blr":0,"end":0,"alr":1,"bwq":0,"id":"10"},{"end":0,"alr":1,"id":"11","bwq":0,"blr":0},{"blr":0,"id":"4","bwq":0,"alr":1,"end":0},{"blr":0,"end":0,"alr":1,"id":"9","bwq":0},{"blr":0,"id":"26","bwq":0,"alr":1,"end":0},{"blr":0,"id":"82","bwq":0,"alr":1,"end":0},{"blr":0,"id":"141","bwq":0,"alr":1,"end":0},{"blr":0,"end":0,"alr":1,"bwq":0,"id":"658"},{"id":"246","bwq":0,"alr":1,"end":0,"blr":0},{"blr":0,"end":0,"alr":1,"id":"172","bwq":0},{"blr":0,"end":0,"alr":1,"bwq":0,"id":"225"},{"end":0,"alr":1,"bwq":0,"id":"238","blr":0},{"bwq":0,"id":"249","alr":1,"end":0,"blr":0},{"end":0,"alr":1,"id":"253","bwq":0,"blr":0},{"blr":0,"end":0,"alr":1,"bwq":0,"id":"254"},{"bwq":0,"id":"784","alr":1,"end":0,"blr":0},{"bwq":0,"id":"455","alr":1,"end":0,"blr":0},{"id":"456","bwq":0,"alr":1,"end":0,"blr":0},{"blr":0,"end":0,"alr":1,"id":"1030","bwq":0},{"blr":0,"id":"1014","bwq":0,"alr":0,"end":1}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"204":{load:(((utag.cond[49])  &&  (utag.cond[88])  &&  (utag.cond[153]))),send:1,v:202403261422,wait:1,tid:7133},"14":{load:utag.cond[14],send:1,v:201603041401,wait:1,tid:16013},"27":{load:(((utag.cond[74])  &&  (utag.cond[15])  &&  (utag.cond[3])  &&  (utag.cond[102])  &&  (utag.cond[153]))),send:1,v:202411191824,wait:1,tid:3015},"52":{load:utag.cond[27],send:1,v:201709081749,wait:1,tid:20010},"61":{load:utag.cond[40],send:1,v:201706192004,wait:1,tid:6026},"64":{load:(utag.cond[35] && utag.cond[36]),send:1,v:201706071457,wait:1,tid:20067},"65":{load:(utag.cond[36] && utag.cond[35]),send:1,v:201706071457,wait:1,tid:20067},"66":{load:(utag.cond[37] && utag.cond[35]),send:1,v:201706071457,wait:1,tid:20067},"67":{load:(utag.cond[37] && utag.cond[35]),send:1,v:201706071457,wait:1,tid:20067},"68":{load:(utag.cond[38] && utag.cond[35]),send:1,v:201706071457,wait:1,tid:20067},"69":{load:(utag.cond[38] && utag.cond[35]),send:1,v:201706071457,wait:1,tid:20067},"70":{load:(utag.cond[39] && utag.cond[36]),send:1,v:201706071457,wait:1,tid:20067},"71":{load:(utag.cond[39] && utag.cond[36]),send:1,v:201706071457,wait:1,tid:20067},"72":{load:(utag.cond[39] && utag.cond[37]),send:1,v:201706071457,wait:1,tid:20067},"73":{load:(utag.cond[39] && utag.cond[37]),send:1,v:201706071457,wait:1,tid:20067},"74":{load:(utag.cond[39] && utag.cond[38]),send:1,v:201706071457,wait:1,tid:20067},"75":{load:(utag.cond[39] && utag.cond[38]),send:1,v:201706071457,wait:1,tid:20067},"82":{load:utag.cond[43],send:1,v:201706192014,wait:1,tid:20067},"83":{load:utag.cond[43],send:1,v:202205121451,wait:1,tid:20067},"86":{load:utag.cond[12],send:1,v:201711281451,wait:1,tid:6026},"87":{load:(utag.cond[38] && utag.cond[51]),send:1,v:201707302239,wait:1,tid:20067},"88":{load:(utag.cond[37] && utag.cond[51]),send:1,v:201707302239,wait:1,tid:20067},"89":{load:(utag.cond[36] && utag.cond[51]),send:1,v:201707302239,wait:1,tid:20067},"90":{load:(utag.cond[38] && utag.cond[52]),send:1,v:201708011852,wait:1,tid:20067},"91":{load:(utag.cond[37] && utag.cond[52]),send:1,v:201708011855,wait:1,tid:20067},"92":{load:(utag.cond[36] && utag.cond[52]),send:1,v:201708011858,wait:1,tid:20067},"93":{load:(utag.cond[38] && utag.cond[53]),send:1,v:201708041651,wait:1,tid:20067},"94":{load:(utag.cond[37] && utag.cond[53]),send:1,v:201708041654,wait:1,tid:20067},"95":{load:(utag.cond[36] && utag.cond[53]),send:1,v:201708041657,wait:1,tid:20067},"96":{load:((utag.cond[32])),send:1,v:202401161623,wait:1,tid:6026},"97":{load:(((utag.cond[55])  &&  (utag.cond[54]))),send:1,v:202401161623,wait:1,tid:6026},"132":{load:(((utag.cond[74])  &&  (utag.cond[108])  &&  (utag.cond[83])  &&  (utag.cond[153]))),send:1,v:202407181352,wait:1,tid:19115},"154":{load:((utag.cond[73])),send:1,v:202401161623,wait:1,tid:7129},"168":{load:((utag.cond[73])),send:1,v:202401161623,wait:1,tid:7132},"176":{load:utag.cond[91],send:1,v:201909041515,wait:1,tid:7129},"179":{load:((utag.cond[92])),send:1,v:202401161623,wait:1,tid:6026},"193":{load:utag.cond[94],send:1,v:202001212142,wait:1,tid:20010},"202":{load:1,send:1,v:202412032046,wait:1,tid:20010},"209":{load:(utag.cond[99] && utag.cond[66]),send:1,v:202012082021,wait:1,tid:20010},"213":{load:utag.cond[106],send:1,v:202208171929,wait:1,tid:7132},"216":{load:(utag.cond[112] && utag.cond[99]),send:1,v:202111181637,wait:1,tid:19115},"217":{load:(utag.cond[109] && utag.cond[88]),send:1,v:202109071554,wait:1,tid:7142},"220":{load:((utag.cond[122])),send:1,v:202401161623,wait:1,tid:6037},"222":{load:(((utag.cond[49])  &&  (utag.cond[88])  &&  (utag.cond[153]))),send:1,v:202408061910,wait:1,tid:7142},"223":{load:(utag.cond[111] && utag.cond[28]),send:1,v:202111221642,wait:1,tid:20010},"225":{load:(utag.cond[134] || utag.cond[114] || utag.cond[116] || utag.cond[115] || utag.cond[120] || utag.cond[117] || utag.cond[133] || utag.cond[113] || utag.cond[118] || utag.cond[119]),send:1,v:202208181340,wait:1,tid:20010},"226":{load:(((utag.cond[74])  &&  (utag.cond[153])  &&  (utag.cond[3]))),send:1,v:202407171212,wait:1,tid:20010},"232":{load:((utag.cond[93])),send:1,v:202401161623,wait:1,tid:7132},"233":{load:utag.cond[99],send:1,v:202206301342,wait:1,tid:20010},"235":{load:(((utag.cond[74])  &&  (utag.cond[132]))),send:1,v:202401161623,wait:1,tid:20010},"236":{load:((utag.cond[99])),send:1,v:202401161623,wait:1,tid:6037},"239":{load:((utag.cond[136])),send:1,v:202401161623,wait:1,tid:6026},"240":{load:((utag.cond[153])),send:1,v:202411190006,wait:1,tid:2050},"242":{load:(utag.cond[88] && utag.cond[99]),send:1,v:202310051843,wait:1,tid:7142},"245":{load:((utag.cond[99])),send:1,v:202401161623,wait:1,tid:19025},"246":{load:((utag.cond[145])),send:1,v:202401161623,wait:1,tid:20010},"250":{load:((utag.cond[147])),send:1,v:202401182010,wait:1,tid:12047},"254":{load:((utag.cond[149])),send:1,v:202410251351,wait:1,tid:4056},"255":{load:(((utag.cond[74])  &&  (utag.cond[80])  &&  (utag.cond[89])  &&  (utag.cond[102])  &&  (utag.cond[143]))),send:1,v:202407261442,wait:1,tid:20010},"263":{load:((utag.cond[152])),send:1,v:202408011931,wait:1,tid:7142},"270":{load:(((utag.cond[101])  &&  (utag.cond[102])  &&  (utag.cond[143]))),send:1,v:202412190337,wait:1,tid:16050}};
utag.loader.cfgsort=["204","14","27","52","61","64","65","66","67","68","69","70","71","72","73","74","75","82","83","86","87","88","89","90","91","92","93","94","95","96","97","132","154","168","176","179","193","202","209","213","216","217","220","222","223","225","226","232","233","235","236","239","240","242","245","246","250","254","255","263","270"];
  }
utag.loader.initcfg();
}

  try{
    (function (window) {
        function evaluateLoadRule(id) {
            if (!id) return false;
            if (id === "all") return true;

            var config = {};
            config[id] = 0;
            var data = window.utag.loader.GV(window.utag_data);

            window.utag.cl = { "_all_": 1 };
            window.utag.loader.rd_flag = 1;

            window.utag.loader.RD(data);
            window.utag.loader.loadrules(data, config);

            window.utag.cl = undefined;
            window.utag.loader.rd_flag = undefined;

            return Boolean(config[id]);
        }

        function checkLoadRulesConflict(map) {
            if (!map) return true;

            var counter = 0;
            for (var key in map) {
                if (map[key]) counter += 1;
            }

            if (counter > 1) return true;

            return false;
        }

        function canIntegrationLoad(id) {
            return Boolean(!window.tealiumCmpIntegration.loadRules.hasConflict && window.tealiumCmpIntegration.loadRules.loadMap[id]);
        }

        window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};
        window.tealiumCmpIntegration.loadRules = {};

        window.tealiumCmpIntegration.loadRules.canIntegrationLoad = canIntegrationLoad;

        window.tealiumCmpIntegration.loadRules.loadMap = {"3f187fb2-024f-497b-dc7d-b99e96814f54": evaluateLoadRule("148"), "1a05b72b-d1c4-4765-ba0a-db3d9dccd21a": evaluateLoadRule("152"), "3b563bf4-847e-4854-8fa8-6d9c9b1c75d6": evaluateLoadRule("149"), "d5bc5790-4826-4fce-92cd-32e3ef9d0970": evaluateLoadRule("151"), "6eec231f-b309-430b-ba9a-f8f61d3bb587": evaluateLoadRule("150")};
        window.tealiumCmpIntegration.loadRules.exemptionMap = {};
        window.tealiumCmpIntegration.loadRules.hasConflict = checkLoadRulesConflict(window.tealiumCmpIntegration.loadRules.loadMap);
    })(window);
    if (window.tealiumCmpIntegration.loadRules.canIntegrationLoad("3f187fb2-024f-497b-dc7d-b99e96814f54")) {window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};window.tealiumCmpIntegration.map = {"fc38267f-6222-45a6-b50d-68b6ef25d878":{"C0002":["3","27","42","107","127","159","198","226","237","255","207","217","242"],"C0001":["128","209","204","206","222","256","262","263"],"C0004":["3","24","53","55","61","64","65","66","67","68","69","70","71","72","73","74","75","82","83","86","87","88","89","90","91","92","93","94","95","96","97","115","118","131","132","133","134","138","140","141","153","154","168","176","179","186","193","202","208","213","216","220","223","225","227","228","232","233","235","236","239","240","241","250","246","245","267","269","270"],"C0003":["14","52","254"]}};window.tealiumCmpIntegration.refiringAllowed = [];window.tealiumCmpIntegration.tiqGroupName = "C0001";//tv:2.0.1
//base:onetrust
/**
 * @module utcm/integration
 * @description CMP-specific component for OneTrust.
 *
 * 2.0.1
 *  - Add safeguarding conditional to cmpConvertResponseToLookupObject
 *  - Fix bug in cmpCheckForExplicitConsentDecision where an explicit opt-in was incorrectly output as an 'implicit' decision one
 * 
 * 2.0.0
 *  - Start using keys instead of names for the lookup (breaking change, but with deactivation switch)
 *  - Update the way the Vendor ID is pulled from the page to stop using the legacy cctId property
 *  - Parse window.dataLayer for the decision to avoid relying on ConsentIntegrationData, which isn't always populated for all customers
 *  - Introduce a new function to help with setup (cmpConvertResponseToLookupObject) that produces a key-to-name lookup object
 *
 * 1.0.2
 *  - Improve cmpCheckForExplicitConsentDecision again - there are non-decision interactions, so now we check if it's opt-in mode and the box is open
 *
 * 1.0.1
 *  - Improve cmpCheckForExplicitConsentDecision - use the interaction count instead of last interaction label (more reliable)
 *
 * 1.0.0
 *  - Initial version, start versioning
 */

(function oneTrust(window) {
    // allows simple adjustment of the name/id behavior
    var useNamesInsteadOfKeys = false;
    // allow the safety check of the expected Vendor ID to be circumvented to simplify setup at the cost of increased risk
    var disableVendorIdValidation = false;

    // CMP specific functionality and labels
    window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};

    window.tealiumCmpIntegration.cmpName = "OneTrust";
    window.tealiumCmpIntegration.cmpIntegrationVersion = "onetrust-2.0.1";

    window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision = cmpFetchCurrentConsentDecision;
    window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;
    window.tealiumCmpIntegration.cmpCheckIfOptInModel = cmpCheckIfOptInModel;
    window.tealiumCmpIntegration.cmpCheckForWellFormedDecision = cmpCheckForWellFormedDecision;
    window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision = cmpCheckForExplicitConsentDecision;
    window.tealiumCmpIntegration.cmpCheckForTiqConsent = cmpCheckForTiqConsent;
    window.tealiumCmpIntegration.cmpConvertResponseToGroupList = cmpConvertResponseToGroupList;
    window.tealiumCmpIntegration.cmpConvertResponseToLookupObject = cmpConvertResponseToLookupObject;

    function cmpCheckIfOptInModel() {
        var decision = cmpFetchCurrentConsentDecision();
        if (decision && decision.ConsentModel && decision.ConsentModel.Name === "opt-out") {
            return false;
        }
        return true;
    }

    function cmpFetchCurrentConsentDecision() {
        if (!window.OneTrust || typeof window.OneTrust.GetDomainData !== "function") return false;
        var cmpRawOutput = window.OneTrust.GetDomainData();
        cmpRawOutput.dataLayer = window.dataLayer;
        return cmpRawOutput;
    }

    function cmpFetchCurrentLookupKey() {
        // newer versions of OneTrust, starting at the end of 2022 no longer have cctId defined
        // but this HTML attribute is the way OneTrust can tell
        var scrapeOneTrustVendorId = function () {
            var allScripts = document.getElementsByTagName("script");
            var re = /\/otSDKStub\.js(\?.*)*$/;
            for (var i = 0; i < allScripts.length; i++) {
                var isOneTrustScript = re.test(allScripts[i].src); // can be null
                if (isOneTrustScript) {
                    var fullVendorId = allScripts[i].getAttribute("data-domain-script"); // parse it from the script
                    return fullVendorId.split("-test")[0];
                }
            }
            return "error-not-found";
        }
        if (disableVendorIdValidation) {
            // just return whatever Vendor ID is expected be active
            return (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0]) || "(Vendor ID check disabled)"; // just return whatever's mapped to short-circuit the check as a test
        }
        return scrapeOneTrustVendorId();
    }

    function cmpCheckForWellFormedDecision(cmpRawOutput) {
        // treat things we don't understand as an opt-out
        if (typeof cmpRawOutput !== "object") return false;
        if (toString.call(cmpRawOutput.Groups) !== "[object Array]") return false;
        if (toString.call(cmpRawOutput.dataLayer) !== "[object Array]") return false;
        return true;
    }

    function cmpCheckForExplicitConsentDecision(cmpRawOutput) {
        // treat things we don't understand as implicit
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;
        return window.OneTrust && typeof window.OneTrust.IsAlertBoxClosed === "function" && window.OneTrust.IsAlertBoxClosed();
    }

    function cmpConvertResponseToLookupObject(cmpRawOutput) {
        // convert from array of objects to object for easier lookups
        var decisionString = "";
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return {};
        for (var i = cmpRawOutput.dataLayer.length - 1; i >= 0; i--) {
            if (["OneTrustGroupsUpdated", "OneTrustLoaded"].indexOf(cmpRawOutput.dataLayer[i].event) !== -1) {
                decisionString = cmpRawOutput.dataLayer[i].OnetrustActiveGroups;
                break;
            }
        }

        var permittedPurposeIds = decisionString.split(",").filter(function (group) {
            return group !== "";
        })

        var permittedPurposesWithNames = {};
        cmpRawOutput.Groups.forEach(function (groupInfo) {
            if (permittedPurposeIds.indexOf(groupInfo.OptanonGroupId) !== -1) {
                permittedPurposesWithNames[groupInfo.OptanonGroupId] = groupInfo.GroupName || "ERROR-MISSING";
            }
        })

        return permittedPurposesWithNames; // keys are IDs, values are names
    }

    function cmpConvertResponseToGroupList(cmpRawOutput) {
        var permittedPurposesWithNames = cmpConvertResponseToLookupObject(cmpRawOutput);
        var keysOrValues = useNamesInsteadOfKeys ? "values" : "keys";
        return Object[keysOrValues](permittedPurposesWithNames); // keys are IDs, values are names
    }

    function cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) {
        // treat things we don't understand as an opt-out
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;

        tiqGroupName = tiqGroupName || "tiq-group-name-missing";
        var allowedGroups = cmpConvertResponseToGroupList(cmpRawOutput);
        return allowedGroups.indexOf(tiqGroupName) !== -1;
    }
})(window);

/*
// Debugging / development output - repaste the integration on your test pages each time you make a change to your consent state
var outputString = `CMP Found: ${window.tealiumCmpIntegration.cmpName} (${window.tealiumCmpIntegration.cmpCheckIfOptInModel() ? "Opt-in" : 'Opt-out'} Model)
  Checks:
    - id:          ${window.tealiumCmpIntegration.cmpFetchCurrentLookupKey()}
    - well-formed: ${window.tealiumCmpIntegration.cmpCheckForWellFormedDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - explicit:    ${window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - group list:  ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToGroupList(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()))}
    - name lookup: ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToLookupObject(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()), null, 6)}
  `
console.log(outputString)
*/
}if (window.tealiumCmpIntegration.loadRules.canIntegrationLoad("1a05b72b-d1c4-4765-ba0a-db3d9dccd21a")) {window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};window.tealiumCmpIntegration.map = {"0191e732-fc2b-7a2c-beea-a062c49a8bd8":{"C0003":["14","52","254"],"C0004":["3","24","53","55","61","64","65","66","67","68","69","70","71","72","73","74","75","82","83","86","87","88","89","90","91","92","93","94","95","96","97","115","118","131","132","133","134","138","140","141","153","154","168","176","179","186","193","202","208","213","216","220","223","225","227","228","232","233","235","236","239","240","241","250","246","245","267","269","270"],"C0001":["128","209","204","206","222","256","262","263"],"C0002":["3","27","42","107","127","159","198","226","237","255","207","217","242"]}};window.tealiumCmpIntegration.refiringAllowed = [];window.tealiumCmpIntegration.tiqGroupName = "C0001";//tv:2.0.1
//base:onetrust
/**
 * @module utcm/integration
 * @description CMP-specific component for OneTrust.
 *
 * 2.0.1
 *  - Add safeguarding conditional to cmpConvertResponseToLookupObject
 *  - Fix bug in cmpCheckForExplicitConsentDecision where an explicit opt-in was incorrectly output as an 'implicit' decision one
 * 
 * 2.0.0
 *  - Start using keys instead of names for the lookup (breaking change, but with deactivation switch)
 *  - Update the way the Vendor ID is pulled from the page to stop using the legacy cctId property
 *  - Parse window.dataLayer for the decision to avoid relying on ConsentIntegrationData, which isn't always populated for all customers
 *  - Introduce a new function to help with setup (cmpConvertResponseToLookupObject) that produces a key-to-name lookup object
 *
 * 1.0.2
 *  - Improve cmpCheckForExplicitConsentDecision again - there are non-decision interactions, so now we check if it's opt-in mode and the box is open
 *
 * 1.0.1
 *  - Improve cmpCheckForExplicitConsentDecision - use the interaction count instead of last interaction label (more reliable)
 *
 * 1.0.0
 *  - Initial version, start versioning
 */

(function oneTrust(window) {
    // allows simple adjustment of the name/id behavior
    var useNamesInsteadOfKeys = false;
    // allow the safety check of the expected Vendor ID to be circumvented to simplify setup at the cost of increased risk
    var disableVendorIdValidation = false;

    // CMP specific functionality and labels
    window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};

    window.tealiumCmpIntegration.cmpName = "OneTrust";
    window.tealiumCmpIntegration.cmpIntegrationVersion = "onetrust-2.0.1";

    window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision = cmpFetchCurrentConsentDecision;
    window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;
    window.tealiumCmpIntegration.cmpCheckIfOptInModel = cmpCheckIfOptInModel;
    window.tealiumCmpIntegration.cmpCheckForWellFormedDecision = cmpCheckForWellFormedDecision;
    window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision = cmpCheckForExplicitConsentDecision;
    window.tealiumCmpIntegration.cmpCheckForTiqConsent = cmpCheckForTiqConsent;
    window.tealiumCmpIntegration.cmpConvertResponseToGroupList = cmpConvertResponseToGroupList;
    window.tealiumCmpIntegration.cmpConvertResponseToLookupObject = cmpConvertResponseToLookupObject;

    function cmpCheckIfOptInModel() {
        var decision = cmpFetchCurrentConsentDecision();
        if (decision && decision.ConsentModel && decision.ConsentModel.Name === "opt-out") {
            return false;
        }
        return true;
    }

    function cmpFetchCurrentConsentDecision() {
        if (!window.OneTrust || typeof window.OneTrust.GetDomainData !== "function") return false;
        var cmpRawOutput = window.OneTrust.GetDomainData();
        cmpRawOutput.dataLayer = window.dataLayer;
        return cmpRawOutput;
    }

    function cmpFetchCurrentLookupKey() {
        // newer versions of OneTrust, starting at the end of 2022 no longer have cctId defined
        // but this HTML attribute is the way OneTrust can tell
        var scrapeOneTrustVendorId = function () {
            var allScripts = document.getElementsByTagName("script");
            var re = /\/otSDKStub\.js(\?.*)*$/;
            for (var i = 0; i < allScripts.length; i++) {
                var isOneTrustScript = re.test(allScripts[i].src); // can be null
                if (isOneTrustScript) {
                    var fullVendorId = allScripts[i].getAttribute("data-domain-script"); // parse it from the script
                    return fullVendorId.split("-test")[0];
                }
            }
            return "error-not-found";
        }
        if (disableVendorIdValidation) {
            // just return whatever Vendor ID is expected be active
            return (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0]) || "(Vendor ID check disabled)"; // just return whatever's mapped to short-circuit the check as a test
        }
        return scrapeOneTrustVendorId();
    }

    function cmpCheckForWellFormedDecision(cmpRawOutput) {
        // treat things we don't understand as an opt-out
        if (typeof cmpRawOutput !== "object") return false;
        if (toString.call(cmpRawOutput.Groups) !== "[object Array]") return false;
        if (toString.call(cmpRawOutput.dataLayer) !== "[object Array]") return false;
        return true;
    }

    function cmpCheckForExplicitConsentDecision(cmpRawOutput) {
        // treat things we don't understand as implicit
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;
        return window.OneTrust && typeof window.OneTrust.IsAlertBoxClosed === "function" && window.OneTrust.IsAlertBoxClosed();
    }

    function cmpConvertResponseToLookupObject(cmpRawOutput) {
        // convert from array of objects to object for easier lookups
        var decisionString = "";
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return {};
        for (var i = cmpRawOutput.dataLayer.length - 1; i >= 0; i--) {
            if (["OneTrustGroupsUpdated", "OneTrustLoaded"].indexOf(cmpRawOutput.dataLayer[i].event) !== -1) {
                decisionString = cmpRawOutput.dataLayer[i].OnetrustActiveGroups;
                break;
            }
        }

        var permittedPurposeIds = decisionString.split(",").filter(function (group) {
            return group !== "";
        })

        var permittedPurposesWithNames = {};
        cmpRawOutput.Groups.forEach(function (groupInfo) {
            if (permittedPurposeIds.indexOf(groupInfo.OptanonGroupId) !== -1) {
                permittedPurposesWithNames[groupInfo.OptanonGroupId] = groupInfo.GroupName || "ERROR-MISSING";
            }
        })

        return permittedPurposesWithNames; // keys are IDs, values are names
    }

    function cmpConvertResponseToGroupList(cmpRawOutput) {
        var permittedPurposesWithNames = cmpConvertResponseToLookupObject(cmpRawOutput);
        var keysOrValues = useNamesInsteadOfKeys ? "values" : "keys";
        return Object[keysOrValues](permittedPurposesWithNames); // keys are IDs, values are names
    }

    function cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) {
        // treat things we don't understand as an opt-out
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;

        tiqGroupName = tiqGroupName || "tiq-group-name-missing";
        var allowedGroups = cmpConvertResponseToGroupList(cmpRawOutput);
        return allowedGroups.indexOf(tiqGroupName) !== -1;
    }
})(window);

/*
// Debugging / development output - repaste the integration on your test pages each time you make a change to your consent state
var outputString = `CMP Found: ${window.tealiumCmpIntegration.cmpName} (${window.tealiumCmpIntegration.cmpCheckIfOptInModel() ? "Opt-in" : 'Opt-out'} Model)
  Checks:
    - id:          ${window.tealiumCmpIntegration.cmpFetchCurrentLookupKey()}
    - well-formed: ${window.tealiumCmpIntegration.cmpCheckForWellFormedDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - explicit:    ${window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - group list:  ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToGroupList(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()))}
    - name lookup: ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToLookupObject(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()), null, 6)}
  `
console.log(outputString)
*/
}if (window.tealiumCmpIntegration.loadRules.canIntegrationLoad("3b563bf4-847e-4854-8fa8-6d9c9b1c75d6")) {window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};window.tealiumCmpIntegration.map = {"1bcab49c-52cc-443c-96ce-8dc0dd027f61":{"C0001":["128","209","204","206","222","256","262","263"],"C0002":["3","27","42","107","127","159","198","226","237","255","207","217","242"],"C0003":["14","52","254"],"C0004":["3","24","53","55","61","64","65","66","67","68","69","70","71","72","73","74","75","82","83","86","87","88","89","90","91","92","93","94","95","96","97","115","118","131","132","133","134","138","140","141","153","154","168","176","179","186","193","202","208","213","216","220","223","225","227","228","232","233","235","236","239","240","241","250","246","245","267","269","270"]}};window.tealiumCmpIntegration.refiringAllowed = [];window.tealiumCmpIntegration.tiqGroupName = "C0001";//tv:2.0.1
//base:onetrust
/**
 * @module utcm/integration
 * @description CMP-specific component for OneTrust.
 *
 * 2.0.1
 *  - Add safeguarding conditional to cmpConvertResponseToLookupObject
 *  - Fix bug in cmpCheckForExplicitConsentDecision where an explicit opt-in was incorrectly output as an 'implicit' decision one
 * 
 * 2.0.0
 *  - Start using keys instead of names for the lookup (breaking change, but with deactivation switch)
 *  - Update the way the Vendor ID is pulled from the page to stop using the legacy cctId property
 *  - Parse window.dataLayer for the decision to avoid relying on ConsentIntegrationData, which isn't always populated for all customers
 *  - Introduce a new function to help with setup (cmpConvertResponseToLookupObject) that produces a key-to-name lookup object
 *
 * 1.0.2
 *  - Improve cmpCheckForExplicitConsentDecision again - there are non-decision interactions, so now we check if it's opt-in mode and the box is open
 *
 * 1.0.1
 *  - Improve cmpCheckForExplicitConsentDecision - use the interaction count instead of last interaction label (more reliable)
 *
 * 1.0.0
 *  - Initial version, start versioning
 */

(function oneTrust(window) {
    // allows simple adjustment of the name/id behavior
    var useNamesInsteadOfKeys = false;
    // allow the safety check of the expected Vendor ID to be circumvented to simplify setup at the cost of increased risk
    var disableVendorIdValidation = false;

    // CMP specific functionality and labels
    window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};

    window.tealiumCmpIntegration.cmpName = "OneTrust";
    window.tealiumCmpIntegration.cmpIntegrationVersion = "onetrust-2.0.1";

    window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision = cmpFetchCurrentConsentDecision;
    window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;
    window.tealiumCmpIntegration.cmpCheckIfOptInModel = cmpCheckIfOptInModel;
    window.tealiumCmpIntegration.cmpCheckForWellFormedDecision = cmpCheckForWellFormedDecision;
    window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision = cmpCheckForExplicitConsentDecision;
    window.tealiumCmpIntegration.cmpCheckForTiqConsent = cmpCheckForTiqConsent;
    window.tealiumCmpIntegration.cmpConvertResponseToGroupList = cmpConvertResponseToGroupList;
    window.tealiumCmpIntegration.cmpConvertResponseToLookupObject = cmpConvertResponseToLookupObject;

    function cmpCheckIfOptInModel() {
        var decision = cmpFetchCurrentConsentDecision();
        if (decision && decision.ConsentModel && decision.ConsentModel.Name === "opt-out") {
            return false;
        }
        return true;
    }

    function cmpFetchCurrentConsentDecision() {
        if (!window.OneTrust || typeof window.OneTrust.GetDomainData !== "function") return false;
        var cmpRawOutput = window.OneTrust.GetDomainData();
        cmpRawOutput.dataLayer = window.dataLayer;
        return cmpRawOutput;
    }

    function cmpFetchCurrentLookupKey() {
        // newer versions of OneTrust, starting at the end of 2022 no longer have cctId defined
        // but this HTML attribute is the way OneTrust can tell
        var scrapeOneTrustVendorId = function () {
            var allScripts = document.getElementsByTagName("script");
            var re = /\/otSDKStub\.js(\?.*)*$/;
            for (var i = 0; i < allScripts.length; i++) {
                var isOneTrustScript = re.test(allScripts[i].src); // can be null
                if (isOneTrustScript) {
                    var fullVendorId = allScripts[i].getAttribute("data-domain-script"); // parse it from the script
                    return fullVendorId.split("-test")[0];
                }
            }
            return "error-not-found";
        }
        if (disableVendorIdValidation) {
            // just return whatever Vendor ID is expected be active
            return (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0]) || "(Vendor ID check disabled)"; // just return whatever's mapped to short-circuit the check as a test
        }
        return scrapeOneTrustVendorId();
    }

    function cmpCheckForWellFormedDecision(cmpRawOutput) {
        // treat things we don't understand as an opt-out
        if (typeof cmpRawOutput !== "object") return false;
        if (toString.call(cmpRawOutput.Groups) !== "[object Array]") return false;
        if (toString.call(cmpRawOutput.dataLayer) !== "[object Array]") return false;
        return true;
    }

    function cmpCheckForExplicitConsentDecision(cmpRawOutput) {
        // treat things we don't understand as implicit
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;
        return window.OneTrust && typeof window.OneTrust.IsAlertBoxClosed === "function" && window.OneTrust.IsAlertBoxClosed();
    }

    function cmpConvertResponseToLookupObject(cmpRawOutput) {
        // convert from array of objects to object for easier lookups
        var decisionString = "";
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return {};
        for (var i = cmpRawOutput.dataLayer.length - 1; i >= 0; i--) {
            if (["OneTrustGroupsUpdated", "OneTrustLoaded"].indexOf(cmpRawOutput.dataLayer[i].event) !== -1) {
                decisionString = cmpRawOutput.dataLayer[i].OnetrustActiveGroups;
                break;
            }
        }

        var permittedPurposeIds = decisionString.split(",").filter(function (group) {
            return group !== "";
        })

        var permittedPurposesWithNames = {};
        cmpRawOutput.Groups.forEach(function (groupInfo) {
            if (permittedPurposeIds.indexOf(groupInfo.OptanonGroupId) !== -1) {
                permittedPurposesWithNames[groupInfo.OptanonGroupId] = groupInfo.GroupName || "ERROR-MISSING";
            }
        })

        return permittedPurposesWithNames; // keys are IDs, values are names
    }

    function cmpConvertResponseToGroupList(cmpRawOutput) {
        var permittedPurposesWithNames = cmpConvertResponseToLookupObject(cmpRawOutput);
        var keysOrValues = useNamesInsteadOfKeys ? "values" : "keys";
        return Object[keysOrValues](permittedPurposesWithNames); // keys are IDs, values are names
    }

    function cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) {
        // treat things we don't understand as an opt-out
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;

        tiqGroupName = tiqGroupName || "tiq-group-name-missing";
        var allowedGroups = cmpConvertResponseToGroupList(cmpRawOutput);
        return allowedGroups.indexOf(tiqGroupName) !== -1;
    }
})(window);

/*
// Debugging / development output - repaste the integration on your test pages each time you make a change to your consent state
var outputString = `CMP Found: ${window.tealiumCmpIntegration.cmpName} (${window.tealiumCmpIntegration.cmpCheckIfOptInModel() ? "Opt-in" : 'Opt-out'} Model)
  Checks:
    - id:          ${window.tealiumCmpIntegration.cmpFetchCurrentLookupKey()}
    - well-formed: ${window.tealiumCmpIntegration.cmpCheckForWellFormedDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - explicit:    ${window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - group list:  ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToGroupList(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()))}
    - name lookup: ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToLookupObject(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()), null, 6)}
  `
console.log(outputString)
*/
}if (window.tealiumCmpIntegration.loadRules.canIntegrationLoad("d5bc5790-4826-4fce-92cd-32e3ef9d0970")) {window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};window.tealiumCmpIntegration.map = {"5df7fd35-4529-4c3c-b570-d440229e376d":{"C0001":["128","209","204","206","222","256","262","263"],"C0002":["3","27","42","107","127","159","198","226","237","255","207","217","242"],"C0003":["14","52","254"],"C0004":["3","24","53","55","61","64","65","66","67","68","69","70","71","72","73","74","75","82","83","86","87","88","89","90","91","92","93","94","95","96","97","115","118","131","132","133","134","138","140","141","153","154","168","176","179","186","193","202","208","213","216","220","223","225","227","228","232","233","235","236","239","240","241","250","246","245","267","269","270"]}};window.tealiumCmpIntegration.refiringAllowed = [];window.tealiumCmpIntegration.tiqGroupName = "C0001";//tv:2.0.1
//base:onetrust
/**
 * @module utcm/integration
 * @description CMP-specific component for OneTrust.
 *
 * 2.0.1
 *  - Add safeguarding conditional to cmpConvertResponseToLookupObject
 *  - Fix bug in cmpCheckForExplicitConsentDecision where an explicit opt-in was incorrectly output as an 'implicit' decision one
 * 
 * 2.0.0
 *  - Start using keys instead of names for the lookup (breaking change, but with deactivation switch)
 *  - Update the way the Vendor ID is pulled from the page to stop using the legacy cctId property
 *  - Parse window.dataLayer for the decision to avoid relying on ConsentIntegrationData, which isn't always populated for all customers
 *  - Introduce a new function to help with setup (cmpConvertResponseToLookupObject) that produces a key-to-name lookup object
 *
 * 1.0.2
 *  - Improve cmpCheckForExplicitConsentDecision again - there are non-decision interactions, so now we check if it's opt-in mode and the box is open
 *
 * 1.0.1
 *  - Improve cmpCheckForExplicitConsentDecision - use the interaction count instead of last interaction label (more reliable)
 *
 * 1.0.0
 *  - Initial version, start versioning
 */

(function oneTrust(window) {
    // allows simple adjustment of the name/id behavior
    var useNamesInsteadOfKeys = false;
    // allow the safety check of the expected Vendor ID to be circumvented to simplify setup at the cost of increased risk
    var disableVendorIdValidation = false;

    // CMP specific functionality and labels
    window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};

    window.tealiumCmpIntegration.cmpName = "OneTrust";
    window.tealiumCmpIntegration.cmpIntegrationVersion = "onetrust-2.0.1";

    window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision = cmpFetchCurrentConsentDecision;
    window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;
    window.tealiumCmpIntegration.cmpCheckIfOptInModel = cmpCheckIfOptInModel;
    window.tealiumCmpIntegration.cmpCheckForWellFormedDecision = cmpCheckForWellFormedDecision;
    window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision = cmpCheckForExplicitConsentDecision;
    window.tealiumCmpIntegration.cmpCheckForTiqConsent = cmpCheckForTiqConsent;
    window.tealiumCmpIntegration.cmpConvertResponseToGroupList = cmpConvertResponseToGroupList;
    window.tealiumCmpIntegration.cmpConvertResponseToLookupObject = cmpConvertResponseToLookupObject;

    function cmpCheckIfOptInModel() {
        var decision = cmpFetchCurrentConsentDecision();
        if (decision && decision.ConsentModel && decision.ConsentModel.Name === "opt-out") {
            return false;
        }
        return true;
    }

    function cmpFetchCurrentConsentDecision() {
        if (!window.OneTrust || typeof window.OneTrust.GetDomainData !== "function") return false;
        var cmpRawOutput = window.OneTrust.GetDomainData();
        cmpRawOutput.dataLayer = window.dataLayer;
        return cmpRawOutput;
    }

    function cmpFetchCurrentLookupKey() {
        // newer versions of OneTrust, starting at the end of 2022 no longer have cctId defined
        // but this HTML attribute is the way OneTrust can tell
        var scrapeOneTrustVendorId = function () {
            var allScripts = document.getElementsByTagName("script");
            var re = /\/otSDKStub\.js(\?.*)*$/;
            for (var i = 0; i < allScripts.length; i++) {
                var isOneTrustScript = re.test(allScripts[i].src); // can be null
                if (isOneTrustScript) {
                    var fullVendorId = allScripts[i].getAttribute("data-domain-script"); // parse it from the script
                    return fullVendorId.split("-test")[0];
                }
            }
            return "error-not-found";
        }
        if (disableVendorIdValidation) {
            // just return whatever Vendor ID is expected be active
            return (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0]) || "(Vendor ID check disabled)"; // just return whatever's mapped to short-circuit the check as a test
        }
        return scrapeOneTrustVendorId();
    }

    function cmpCheckForWellFormedDecision(cmpRawOutput) {
        // treat things we don't understand as an opt-out
        if (typeof cmpRawOutput !== "object") return false;
        if (toString.call(cmpRawOutput.Groups) !== "[object Array]") return false;
        if (toString.call(cmpRawOutput.dataLayer) !== "[object Array]") return false;
        return true;
    }

    function cmpCheckForExplicitConsentDecision(cmpRawOutput) {
        // treat things we don't understand as implicit
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;
        return window.OneTrust && typeof window.OneTrust.IsAlertBoxClosed === "function" && window.OneTrust.IsAlertBoxClosed();
    }

    function cmpConvertResponseToLookupObject(cmpRawOutput) {
        // convert from array of objects to object for easier lookups
        var decisionString = "";
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return {};
        for (var i = cmpRawOutput.dataLayer.length - 1; i >= 0; i--) {
            if (["OneTrustGroupsUpdated", "OneTrustLoaded"].indexOf(cmpRawOutput.dataLayer[i].event) !== -1) {
                decisionString = cmpRawOutput.dataLayer[i].OnetrustActiveGroups;
                break;
            }
        }

        var permittedPurposeIds = decisionString.split(",").filter(function (group) {
            return group !== "";
        })

        var permittedPurposesWithNames = {};
        cmpRawOutput.Groups.forEach(function (groupInfo) {
            if (permittedPurposeIds.indexOf(groupInfo.OptanonGroupId) !== -1) {
                permittedPurposesWithNames[groupInfo.OptanonGroupId] = groupInfo.GroupName || "ERROR-MISSING";
            }
        })

        return permittedPurposesWithNames; // keys are IDs, values are names
    }

    function cmpConvertResponseToGroupList(cmpRawOutput) {
        var permittedPurposesWithNames = cmpConvertResponseToLookupObject(cmpRawOutput);
        var keysOrValues = useNamesInsteadOfKeys ? "values" : "keys";
        return Object[keysOrValues](permittedPurposesWithNames); // keys are IDs, values are names
    }

    function cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) {
        // treat things we don't understand as an opt-out
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;

        tiqGroupName = tiqGroupName || "tiq-group-name-missing";
        var allowedGroups = cmpConvertResponseToGroupList(cmpRawOutput);
        return allowedGroups.indexOf(tiqGroupName) !== -1;
    }
})(window);

/*
// Debugging / development output - repaste the integration on your test pages each time you make a change to your consent state
var outputString = `CMP Found: ${window.tealiumCmpIntegration.cmpName} (${window.tealiumCmpIntegration.cmpCheckIfOptInModel() ? "Opt-in" : 'Opt-out'} Model)
  Checks:
    - id:          ${window.tealiumCmpIntegration.cmpFetchCurrentLookupKey()}
    - well-formed: ${window.tealiumCmpIntegration.cmpCheckForWellFormedDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - explicit:    ${window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - group list:  ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToGroupList(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()))}
    - name lookup: ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToLookupObject(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()), null, 6)}
  `
console.log(outputString)
*/
}if (window.tealiumCmpIntegration.loadRules.canIntegrationLoad("6eec231f-b309-430b-ba9a-f8f61d3bb587")) {window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};window.tealiumCmpIntegration.map = {"e6622a01-9fd1-4e9b-b287-13217c72658b":{"C0002":["3","27","42","107","127","159","198","226","237","255","207","217","242"],"C0001":["128","209","204","206","222","256","262","263"],"C0004":["3","24","53","55","61","64","65","66","67","68","69","70","71","72","73","74","75","82","83","86","87","88","89","90","91","92","93","94","95","96","97","115","118","131","132","133","134","138","140","141","153","154","168","176","179","186","193","202","208","213","216","220","223","225","227","228","232","233","235","236","239","240","241","250","246","245","267","269","270"],"C0003":["14","52","254"]}};window.tealiumCmpIntegration.refiringAllowed = [];window.tealiumCmpIntegration.tiqGroupName = "C0001";//tv:2.0.1
//base:onetrust
/**
 * @module utcm/integration
 * @description CMP-specific component for OneTrust.
 *
 * 2.0.1
 *  - Add safeguarding conditional to cmpConvertResponseToLookupObject
 *  - Fix bug in cmpCheckForExplicitConsentDecision where an explicit opt-in was incorrectly output as an 'implicit' decision one
 * 
 * 2.0.0
 *  - Start using keys instead of names for the lookup (breaking change, but with deactivation switch)
 *  - Update the way the Vendor ID is pulled from the page to stop using the legacy cctId property
 *  - Parse window.dataLayer for the decision to avoid relying on ConsentIntegrationData, which isn't always populated for all customers
 *  - Introduce a new function to help with setup (cmpConvertResponseToLookupObject) that produces a key-to-name lookup object
 *
 * 1.0.2
 *  - Improve cmpCheckForExplicitConsentDecision again - there are non-decision interactions, so now we check if it's opt-in mode and the box is open
 *
 * 1.0.1
 *  - Improve cmpCheckForExplicitConsentDecision - use the interaction count instead of last interaction label (more reliable)
 *
 * 1.0.0
 *  - Initial version, start versioning
 */

(function oneTrust(window) {
    // allows simple adjustment of the name/id behavior
    var useNamesInsteadOfKeys = false;
    // allow the safety check of the expected Vendor ID to be circumvented to simplify setup at the cost of increased risk
    var disableVendorIdValidation = false;

    // CMP specific functionality and labels
    window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};

    window.tealiumCmpIntegration.cmpName = "OneTrust";
    window.tealiumCmpIntegration.cmpIntegrationVersion = "onetrust-2.0.1";

    window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision = cmpFetchCurrentConsentDecision;
    window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;
    window.tealiumCmpIntegration.cmpCheckIfOptInModel = cmpCheckIfOptInModel;
    window.tealiumCmpIntegration.cmpCheckForWellFormedDecision = cmpCheckForWellFormedDecision;
    window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision = cmpCheckForExplicitConsentDecision;
    window.tealiumCmpIntegration.cmpCheckForTiqConsent = cmpCheckForTiqConsent;
    window.tealiumCmpIntegration.cmpConvertResponseToGroupList = cmpConvertResponseToGroupList;
    window.tealiumCmpIntegration.cmpConvertResponseToLookupObject = cmpConvertResponseToLookupObject;

    function cmpCheckIfOptInModel() {
        var decision = cmpFetchCurrentConsentDecision();
        if (decision && decision.ConsentModel && decision.ConsentModel.Name === "opt-out") {
            return false;
        }
        return true;
    }

    function cmpFetchCurrentConsentDecision() {
        if (!window.OneTrust || typeof window.OneTrust.GetDomainData !== "function") return false;
        var cmpRawOutput = window.OneTrust.GetDomainData();
        cmpRawOutput.dataLayer = window.dataLayer;
        return cmpRawOutput;
    }

    function cmpFetchCurrentLookupKey() {
        // newer versions of OneTrust, starting at the end of 2022 no longer have cctId defined
        // but this HTML attribute is the way OneTrust can tell
        var scrapeOneTrustVendorId = function () {
            var allScripts = document.getElementsByTagName("script");
            var re = /\/otSDKStub\.js(\?.*)*$/;
            for (var i = 0; i < allScripts.length; i++) {
                var isOneTrustScript = re.test(allScripts[i].src); // can be null
                if (isOneTrustScript) {
                    var fullVendorId = allScripts[i].getAttribute("data-domain-script"); // parse it from the script
                    return fullVendorId.split("-test")[0];
                }
            }
            return "error-not-found";
        }
        if (disableVendorIdValidation) {
            // just return whatever Vendor ID is expected be active
            return (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0]) || "(Vendor ID check disabled)"; // just return whatever's mapped to short-circuit the check as a test
        }
        return scrapeOneTrustVendorId();
    }

    function cmpCheckForWellFormedDecision(cmpRawOutput) {
        // treat things we don't understand as an opt-out
        if (typeof cmpRawOutput !== "object") return false;
        if (toString.call(cmpRawOutput.Groups) !== "[object Array]") return false;
        if (toString.call(cmpRawOutput.dataLayer) !== "[object Array]") return false;
        return true;
    }

    function cmpCheckForExplicitConsentDecision(cmpRawOutput) {
        // treat things we don't understand as implicit
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;
        return window.OneTrust && typeof window.OneTrust.IsAlertBoxClosed === "function" && window.OneTrust.IsAlertBoxClosed();
    }

    function cmpConvertResponseToLookupObject(cmpRawOutput) {
        // convert from array of objects to object for easier lookups
        var decisionString = "";
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return {};
        for (var i = cmpRawOutput.dataLayer.length - 1; i >= 0; i--) {
            if (["OneTrustGroupsUpdated", "OneTrustLoaded"].indexOf(cmpRawOutput.dataLayer[i].event) !== -1) {
                decisionString = cmpRawOutput.dataLayer[i].OnetrustActiveGroups;
                break;
            }
        }

        var permittedPurposeIds = decisionString.split(",").filter(function (group) {
            return group !== "";
        })

        var permittedPurposesWithNames = {};
        cmpRawOutput.Groups.forEach(function (groupInfo) {
            if (permittedPurposeIds.indexOf(groupInfo.OptanonGroupId) !== -1) {
                permittedPurposesWithNames[groupInfo.OptanonGroupId] = groupInfo.GroupName || "ERROR-MISSING";
            }
        })

        return permittedPurposesWithNames; // keys are IDs, values are names
    }

    function cmpConvertResponseToGroupList(cmpRawOutput) {
        var permittedPurposesWithNames = cmpConvertResponseToLookupObject(cmpRawOutput);
        var keysOrValues = useNamesInsteadOfKeys ? "values" : "keys";
        return Object[keysOrValues](permittedPurposesWithNames); // keys are IDs, values are names
    }

    function cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) {
        // treat things we don't understand as an opt-out
        if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false;

        tiqGroupName = tiqGroupName || "tiq-group-name-missing";
        var allowedGroups = cmpConvertResponseToGroupList(cmpRawOutput);
        return allowedGroups.indexOf(tiqGroupName) !== -1;
    }
})(window);

/*
// Debugging / development output - repaste the integration on your test pages each time you make a change to your consent state
var outputString = `CMP Found: ${window.tealiumCmpIntegration.cmpName} (${window.tealiumCmpIntegration.cmpCheckIfOptInModel() ? "Opt-in" : 'Opt-out'} Model)
  Checks:
    - id:          ${window.tealiumCmpIntegration.cmpFetchCurrentLookupKey()}
    - well-formed: ${window.tealiumCmpIntegration.cmpCheckForWellFormedDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - explicit:    ${window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision())}
    - group list:  ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToGroupList(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()))}
    - name lookup: ${JSON.stringify(window.tealiumCmpIntegration.cmpConvertResponseToLookupObject(window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision()), null, 6)}
  `
console.log(outputString)
*/
}
                var hasLoadRuleMatch = Object.values(window.tealiumCmpIntegration.loadRules.loadMap).some(value => !!value);
                var hasExemptionMatch = Object.values(window.tealiumCmpIntegration.loadRules.exemptionMap).some(value => !!value);
                if (hasLoadRuleMatch || !hasExemptionMatch) {//tv:1.0.5
//base:framework
/**
 * @module utcm/framework
 * @description Component of the CMP integration, responsible for stopping Tealium iQ from loading/running as appropriate, and responsible for blocking tags if consent is missing or this CMP integration is misconfigured.
 * Expects the appropriate {@link tealiumCmpIntegration tealiumCmpIntegration} inputs (from {@link utcm/integration utcm/integration}) and an appropriate map (from Publish Engine).
 */

(function (window) {
    var version = "v1.0.5";

    /**
     * A window-scoped (global) object used to expose or define selected functionality.
     * @namespace tealiumCmpIntegration
     * @type {object}
     * @memberof! <global>
     */
    window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};

    /**
     * The name of the CMP, provided by utcm/integration, mostly used for logging and debugging.
     * @name cmpName
     * @type {string}
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.cmpName = window.tealiumCmpIntegration.cmpName || "Unnamed CMP";

    // for the consent information in the b object
    var nameOfFullGroupArray = window.tealiumCmpIntegration.nameOfFullGroupArray || "tci.purposes_with_consent_all";
    var nameOfUnprocessedGroupArray =
        window.tealiumCmpIntegration.nameOfUnprocessedGroupArray || "tci.purposes_with_consent_unprocessed";
    var nameOfProcessedGroupArray =
        window.tealiumCmpIntegration.nameOfProcessedGroupArray || "tci.purposes_with_consent_processed";
    var nameOfConsentTypeString = window.tealiumCmpIntegration.nameOfConsentTypeString || "tci.consent_type";

    /**
     * A list of tags that should refire when the user makes an initial, non opt-out explicit decision on first landing.
     * @name refiringAllowed
     * @type {array}
     * @memberof! tealiumCmpIntegration
     */
    var refiringAllowed = window.tealiumCmpIntegration.refiringAllowed || [];

    // name to use when calling utag.handler.trigger to indicate a consent polling call
    var nameOfConsentPollingEvent = window.tealiumCmpIntegration.nameOfConsentPollingEvent || "tiq_cmp_consent_polling";

    // setTimeout interval in MS - rate to poll for new (explicit) consent decision or correctly formed object
    var consentTimeoutInterval = 250;

    // check for the Tealium Debug cookie, see https://docs.tealium.com/platforms/javascript/debugging/
    var tiqInDebugMode = /utagdb=true/.test(document.cookie);
    // fall back to prod (stops logging) if something goes wrong with the function
    var tealiumEnvironment = getTealiumEnvironment() || "prod";

    /**
     * Profile-specific helper, expected to be provided by utcm/integration (and possibly overridden via Publish Engine). The Group Name for Tealium iQ in the CMP (used to decide if the TMS is allowed to run). Uses a standard name if not provided.
     * @name tiqGroupName
     * @type {string}
     * @memberof! tealiumCmpIntegration
     * @default '_missing_'
     */
    var tiqGroupName = window.tealiumCmpIntegration.tiqGroupName || "_missing_"; // make sure there's no match if it's not set

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Expects a function that gets the current consent decision from the CMP.
     * @function cmpFetchCurrentConsentDecision
     * @memberof! tealiumCmpIntegration
     * @returns {*} The CMP response to use within other CMP-specific functions
     */
    var cmpFetchCurrentConsentDecision =
        (typeof window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision === "function" &&
            window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision) ||
        function () {};

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Indicates if the CMP has loaded and returned a well-formed indication of user consent.
     * @function cmpCheckForWellFormedDecision
     * @memberof! tealiumCmpIntegration
     * @param cmpRawOutput the CMP output returned from cmpFetchCurrentConsentDecision
     * @returns {boolean} 'true' if the consent decision is well-formed, otherwise 'false'
     */
    var cmpCheckForWellFormedDecision =
        (typeof window.tealiumCmpIntegration.cmpCheckForWellFormedDecision === "function" &&
            window.tealiumCmpIntegration.cmpCheckForWellFormedDecision) ||
        function () {};

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Get the current CMP lookup key from the page, to use to find the right map.
     * @returns {string} the ID/key to use for the tag map lookup, defaults to an empty string if none is found
     */
    var cmpFetchCurrentLookupKey =
        (typeof window.tealiumCmpIntegration.cmpFetchCurrentLookupKey === "function" &&
            window.tealiumCmpIntegration.cmpFetchCurrentLookupKey) ||
        function () {};

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Indicates if the user has made an EXPLICIT decision.
     * @function cmpCheckForExplicitConsentDecision
     * @memberof! tealiumCmpIntegration
     * @param cmpRawOutput the CMP output returned from cmpFetchCurrentConsentDecision
     * @returns {boolean} 'true' if the consent decision is EXPLICIT otherwise 'false'
     */
    var cmpCheckForExplicitConsentDecision =
        (typeof window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision === "function" &&
            window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision) ||
        function () {};

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Indicates if Tealium iQ has permission to run (and fire tags).
     * @function cmpCheckForTiqConsent
     * @memberof! tealiumCmpIntegration
     * @param cmpRawOutput the CMP output returned from cmpFetchCurrentConsentDecision
     * @param tiqGroupName the Group Name designation for Tealium iQ in the CMP
     * @returns {boolean} 'true' if TiQ is allowed to run, otherwise 'false'
     */
    var cmpCheckForTiqConsent =
        (typeof window.tealiumCmpIntegration.cmpCheckForTiqConsent === "function" &&
            window.tealiumCmpIntegration.cmpCheckForTiqConsent) ||
        function () {};

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Indicates if Tealium iQ has permission to run (and fire tags).
     * @function cmpConvertResponseToGroupList
     * @memberof! tealiumCmpIntegration
     * @param cmpRawOutput the CMP output returned from cmpFetchCurrentConsentDecision
     * @returns {array} a simple list of the group names with permissions to fire, at the desired granularity
     */
    var cmpConvertResponseToGroupList =
        (typeof window.tealiumCmpIntegration.cmpConvertResponseToGroupList === "function" &&
            window.tealiumCmpIntegration.cmpConvertResponseToGroupList) ||
        function () {};

    /**
     * CMP-specific helper, expected to be provided by utcm/integration. Indicates if the CMP is running in opt-in (GDPR-like) or opt-out (CCPA-like) mode
     * @function cmpCheckIfOptInModel
     * @memberof! tealiumCmpIntegration
     * @returns {boolean} true if the CMP is in opt-in mode (like for GDPR), false if opt-out mode (like for CCPA)
     */
    var cmpCheckIfOptInModel =
        (typeof window.tealiumCmpIntegration.cmpCheckIfOptInModel === "function" &&
            window.tealiumCmpIntegration.cmpCheckIfOptInModel) ||
        function () {};

    /**
     * The current version designation
     * @name version
     * @type {string}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.version = version;

    /**
     * A [helper function]{@link module:utcm/framework~logger}, to help Tealium iQ users understand and troubleshoot this CMP integration without unneeded logging in production.
     * @name logger
     * @type {function}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.logger = logger;

    /**
     * A [helper function]{@link module:utcm/framework~getCurrentConsentDecision} that returns the current [ConsentDecision]{@link ConsentDecision}.
     * @name getCurrentConsentDecision
     * @type {function}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.getCurrentConsentDecision = getCurrentConsentDecision;

    /**
     * A [helper function]{@link module:utcm/framework~cmpFetchCurrentLookupKey} that returns the current CMP lookup key (found on the page)
     * @name cmpFetchCurrentLookupKey
     * @type {function}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;

    /**
     * Records the status of the [noview]{@link https://docs.tealium.com/platforms/javascript/settings/#noview} setting on page load.
     * @name isNoviewSet
     * @type {boolean}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.isNoviewSet = window.utag_cfg_ovrd && window.utag_cfg_ovrd.noview === true;

    /**
     * The name to use for the full [ConsentDecision]{@link ConsentDecision} array when adding it to Tealium's b object on each event.
     * @name nameOfFullGroupArray
     * @type {string}
     * @default tci.purposes_with_consent_all
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.nameOfFullGroupArray = nameOfFullGroupArray;

    /**
     * The name to use for the [ConsentDecision]{@link ConsentDecision}'s 'type' attribute ('implicit' or 'explicit') when adding it to Tealium's b object on each event.
     * @name nameOfConsentTypeString
     * @type {string}
     * @default tci.consent_type
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.nameOfConsentTypeString = nameOfConsentTypeString;

    /**
     * The name to use for the array of not-yet-processed-but-consented groups when adding it to Tealium's b object on each event and in the 'data' property of {@link QueuedEvent QueuedEvent} objects.
     * @name nameOfUnprocessedGroupArray
     * @type {string}
     * @default tci.purposes_with_consent_unprocessed
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.nameOfUnprocessedGroupArray = nameOfUnprocessedGroupArray;

    /**
     * The name to use for the array of already-processed consented groups when adding it to Tealium's b object on each event and in the 'data' property of {@link QueuedEvent QueuedEvent} objects.
     * @name nameOfProcessedGroupArray
     * @type {string}
     * @default tci.purposes_with_consent_processed
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.nameOfProcessedGroupArray = nameOfProcessedGroupArray;

    /**
     * A queue for any events that Tealium iQ processes with IMPLICIT consent (to allow those events to be re-processed for new Services in the event of an EXPLICIT consent choice by the user).
     * Each element in the queue is a [QueuedEvent]{@link QueuedEvent}
     * @name implicitEventQueue
     * @type {array}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.implicitEventQueue = window.tealiumCmpIntegration.implicitEventQueue || [];

    /**
     * A queue for any events that are triggered before Tealium iQ AND the CMP have both loaded.
     * Each element in the queue is a [QueuedEvent]{@link QueuedEvent}
     * @name earlyEventQueue
     * @type {array}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.earlyEventQueue = window.tealiumCmpIntegration.earlyEventQueue || [];

    /**
     * A map of CMP groups to arrays of Tealium iQ tag UIDs, an instance of {@link GroupToTagMap GroupToTagMap}. TiQ profile specific, and expected to be provided by Publish Engine (map).
     * @name map
     * @type {object}
     * @memberof! tealiumCmpIntegration
     */
    var map = window.tealiumCmpIntegration.map || {};

    /**
     * A map of Tealium iQ tag UIDs to CMP group assignment, a {@link TagToGroupMap TagToGroupMap}
     * @name tagBasedMap
     * @type {object}
     * @private
     * @memberof! tealiumCmpIntegration
     */
    window.tealiumCmpIntegration.tagBasedMap = generateTagBasedMap();

    /**
     * Allows us to make sure we don't log certain messages more than once, especially useful while polling to avoid overwhelming the user.
     * @function messageNotLoggedYet
     * @param {*} messageId a string or number to uniquely identify a message for the purposes of deduplication
     * @private
     * @returns {boolean} 'true' if the message hasn't been logged yet (and should be logged), otherwise 'false'
     */
    var alreadyLoggedMessageIds = {};
    function messageNotLoggedYet(messageId) {
        var output = false;
        if (typeof alreadyLoggedMessageIds[messageId] === "undefined") {
            alreadyLoggedMessageIds[messageId] = true;
            output = true;
        }
        return output;
    }

    /**
     * Create an instance of {@link ConsentDecision ConsentDecision} based on the specific CMP response
     * @param {array} cmpRawOutput the CMP output returned from cmpFetchCurrentConsentDecision
     * @private
     * @returns {array} an instance of {@link ConsentDecision ConsentDecision}
     */
    function buildConsentDecisionFromRawCmpOutput(cmpRawOutput) {
        var vendorArray = cmpConvertResponseToGroupList(cmpRawOutput) || [];

        var isWellFormed = cmpCheckForWellFormedDecision(cmpRawOutput);

        if (!isWellFormed) {
            vendorArray.type = "missing-well-formed-response";
            return vendorArray;
        }

        var tagBasedMap = generateTagBasedMap();

        // if there is no mapping for the settings id, we need to change the console output
        var currentSettingsIdHasMapping = typeof tagBasedMap === "object" && Object.keys(tagBasedMap).length > 0;

        if (!currentSettingsIdHasMapping) {
            vendorArray.type = "missing-map";
            return vendorArray;
        }

        vendorArray.type = cmpCheckForExplicitConsentDecision(cmpRawOutput) ? "explicit" : "implicit";

        var tiqGroupName = window.tealiumCmpIntegration.tiqGroupName || "_missing_";

        if (cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) === false) {
            // change the consent type, but leave the array for debugging purposes
            vendorArray.type = "missing-tiq-consent";
        }

        return vendorArray;
    }

    /**
     * The core CMP integration logic, which decides if Tealium iQ should be allowed to run, or if it needs to be stopped until an understandable response that includes permission for Tealium iQ to run is found.
     * @function reactToCmpResponse
     * @param {object} cmpResponse The response from the checkConsents function
     * @access private
     */
    function reactToCmpResponse(cmpResponse) {
        var cmpFound = typeof cmpResponse === "object";
        var foundWellFormedConsentDecision = cmpCheckForWellFormedDecision(cmpResponse);
        var tagBasedMap = generateTagBasedMap();
        var foundMapEntryForActiveSetting = Object.keys(tagBasedMap).length > 0;
        var foundExplicitConsent = cmpCheckForExplicitConsentDecision(cmpResponse);
        var tiqIsAllowedToFire = cmpCheckForTiqConsent(cmpResponse, tiqGroupName);
        var tiqIsLoaded = window.utag && window.utag.handler && window.utag.handler.iflag === 1;
        var conflictingIntegrations = window.tealiumCmpIntegration.loadRules.hasConflict;

        // poll
        function checkLater() {
            return window.setTimeout(recheckForCmpAndConsent, consentTimeoutInterval);
        }

        // poll, but only if we're waiting for an explicit decision in an opt-in model
        function checkLaterIfNeeded() {
            if (cmpCheckIfOptInModel() === true) {
                return window.setTimeout(recheckForCmpAndConsent, consentTimeoutInterval);
            }
        }

        if(conflictingIntegrations) {
            /**
             * Conflicting integrations found
             *
             * STOP and fire nothing at all. Do not retry.
             */
            if (messageNotLoggedYet(0)) {
                var message = "Conflicting consent integrations found:\n";
                var loadMap = window.tealiumCmpIntegration.loadRules.loadMap;
                Object.keys(loadMap).forEach(function (key) {
                    if(loadMap[key])
                        message += "\n-" + key
                });
                message += "\n\nStopping TiQ(no cookies set/removed,no tags fired).\n\nNo further polling."
                logger(message);
            }
            stopTiq();
        } else if (!cmpFound) {
            /**
             * CASE A1: no CMP found
             *
             * STOP and fire nothing at all
             * RETRY after a delay
             */
            if (messageNotLoggedYet(1))
                logger(
                    "No CMP found on page.\n\nStopping TiQ(no cookies set/removed,no tags fired).\n\nPolling for changes."
                );
            checkLater();
            stopTiq();
        } else if (!foundMapEntryForActiveSetting) {
            /**
             * CASE A7: No map found for the current CMP lookup key
             *
             * STOP and fire nothing at all. Do not retry.
             */
            if (messageNotLoggedYet(2))
                logger(
                    "No map found for current CMP Lookup Key.\n\nStopping TiQ(no cookies set/removed,no tags fired).\n\nNo retries."
                );
            stopTiq();
        } else if (!foundWellFormedConsentDecision) {
            /**
             * CASE A2: CMP found but consent response wasn't well-formed/complete/understandable
             *
             * STOP and fire nothing at all
             * RETRY after a delay
             */
            if (messageNotLoggedYet(3))
                logger(
                    "Found CMP and got response,but didn't understand the response.\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nPolling for changes."
                );
            checkLater();
            stopTiq();
        } else if (!tiqIsAllowedToFire) {
            /**
             * CASE A3: CMP found and consent response was well-formed, BUT TiQ didn't have an opt-in**STOP and fire nothing at all*RETRY after a delay*/
            if (messageNotLoggedYet(4))
                logger(
                    "Found CMP and got well-formed response, but TiQ (window.tealiumCmpIntegration.tiqGroupName, defined as " +
                        window.tealiumCmpIntegration.tiqGroupName +
                        ") isn't allowed to run based on the response.\n\nStopping TiQ (no cookies set/removed,no tags fired).\n\nPolling for changes."
                );
            checkLaterIfNeeded();
            stopTiq();
        } else if (!foundExplicitConsent) {
            /**
             * CASE A4: CMP found AND response was understandable (AND includes an implicit TiQ consent), BUT the user hasn't made an explicit decision yet
             *
             * ALLOW TO LOAD for any 'default opt-in' tags (filter logic in Extension B)
             * RETRY after a delay (in case there's an explicit decision, since implicit decisions usually mean the prompt is displayed)
             */
            if (cmpCheckIfOptInModel() === true) {
                checkLaterIfNeeded();
                if (messageNotLoggedYet(5))
                    logger(
                        "Found CMP and got well-formed IMPLICIT response which includes TiQ.\n\nAllowing certain tags to fire based on IMPLICIT consent.\n\nPolling for changes(opt-in mode)."
                    );
            } else {
                if (messageNotLoggedYet(5))
                    logger(
                        "Found CMP and got well-formed IMPLICIT response which includes TiQ.\n\nAllowing certain tags to fire based on IMPLICIT consent.\n\nNo further polling(opt-out mode)"
                    );
            }
            if (tiqIsLoaded) {
                processEarlyQueue();
            } else {
                checkLaterIfNeeded();
            }
            triggerOrQueue();
        } else if (foundExplicitConsent) {
            /**
             * CASE A5: CMP found AND response was understandable, AND the user has made an explicit consent decision AND TiQ is allowed
             *
             * ALLOW TO LOAD for any opted-in tags (filter logic in Extension B), do not retry.
             */
            if (messageNotLoggedYet(6))
                logger(
                    "Found CMP and got well-formed EXPLICIT response which includes TiQ.\n\nAllowing certain tags to fire based on EXPLICIT consent.\n\nNo further polling."
                );
            // only call if we've been polling (on initial load, it will load automatically)
            if (tiqIsLoaded) {
                processEarlyQueue();
                processImplicitQueue();
            } else {
                checkLater();
            }
            triggerOrQueue();
        } else {
            /**
             * CASE A6: Something went wrong with this extension.
             *
             * STOP and fire nothing at all. Do not retry.
             */
            if (messageNotLoggedYet(7))
                logger(
                    "Something unexpected went wrong.\n\nStopping TiQ(no cookies set/removed,no tags fired).\n\nNo retries."
                );
            stopTiq();
        }
    }

    /**
     * Override utag.loader.initdata, utag.handler.trigger, utag.handler.RE to allow Tealium iQ Tags to be blocked if the user hasn't consented.
     * @function overrideUtagFunctions
     * @returns {boolean} 'true' if the function was overridden successfully by this request, 'false' if not (because it was already overridden)
     * @access private
     */
    function overrideUtagFunctions() {
        // don't override more than once, assume that if one function has been overridden, both have
        if (window.utag.handler.trigger.toString().indexOf("tealiumCmpIntegration") !== -1) {
            return true;
        }

        // the initial view is handled differently than subsequent events
        // this is safe to to override even if noview is set (because it will never be called in that case)
        window.utag.loader.initdata_old = window.utag.loader.initdata;
        window.utag.loader.initdata = newUtagLoaderInitdata;

        window.utag.handler.trigger_old = window.utag.handler.trigger;
        window.utag.handler.trigger = newUtagHandlerTrigger;

        window.utag.handler.RE_old = window.utag.handler.RE;
        window.utag.handler.RE = newUtagHandlerRE;
        logger("Overrode utag functions!");

        if (window.utag.handler.trigger.toString().indexOf("tealiumCmpIntegration") !== -1) {
            return true;
        }

        return false;
    }

    /**
     * Returns all items from explicit array which are not contained in implicit array
     * @param {array} implicit
     * @param {array} explicit
     * @returns {array}
     * @access private
     */
    function getNewConsents(implicit, explicit) {
        implicit = implicit || [];
        explicit = explicit || [];
        var changes = [];
        for (var i = 0; i < explicit.length; i++) {
            if (implicit.indexOf(explicit[i]) === -1) {
                changes.push(explicit[i]);
            }
        }
        return changes;
    }

    /**
     * Blocks tags based on consent by manually setting the 'load' and 'send' flags to 0 for any tags that don't have permission to fire.
     * That logic isn't sufficient to block tracking calls with a 'uids' array (which also circumvents load rules), so additional blocking logic is added in the utag.handler.trigger override.
     * @param {object} tagBasedMap a {@link TagToGroupMap TagToGroupMap}
     * @param {object} configObject the current window.utag.loader.cfg object (which is used to control which tags should load/fire)
     * @param {array} consentedServices a {@link ConsentDecision ConsentDecision}
     * @param {array} alreadyProcessedGroups an array of Service Names that have already been processed, to avoid double-firing those tags.
     * @private
     */
    function blockTagsBasedOnConsent(
        tagBasedMap,
        configObject,
        consentedServices,
        alreadyProcessedGroups,
        notProcessedGroups,
        refiringAllowed
    ) {
        // block all tags if the consented services array is missing
        if (Array.isArray(consentedServices) !== true) {
            consentedServices = [];
        }

        tagBasedMap = tagBasedMap || {};

        // if the utag template hasn't been edited, this function won't have been overriden, so we gut it
        // to stop tags from firing
        var utagFunctionsHaveBeenOverridden =
            window.utag.handler.trigger.toString().indexOf("tealiumCmpIntegration") !== -1;
        if (utagFunctionsHaveBeenOverridden !== true) {
            window.utag.handler.trigger = function () {
                if (messageNotLoggedYet(8)) {
                    logger(
                        "Tags have been disabled because the required utag.loader edit hasn't been done successfully and the tealiumCmpIntegration is active."
                    );
                }
            };
            consentedServices = [];
        }

        var deactivatedTags = [];
        // turn the map into an easier-to-query object

        alreadyProcessedGroups = alreadyProcessedGroups || [];

        var tiqIsAllowed = tiqGroupName && consentedServices.indexOf(tiqGroupName) !== -1;

        var allTagUids = Object.keys(configObject);

        var assignedServiceName;
        var shouldFire;

        // deactivate tags that aren't mapped and consented
for(var i=0;i<allTagUids.length;i++){shouldFire=false;assignedServiceName=tagBasedMap[allTagUids[i]]||false;if(assignedServiceName){shouldFire=tiqIsAllowed&&consentedServices.indexOf(assignedServiceName)!==-1&&(alreadyProcessedGroups.indexOf(assignedServiceName)===-1||(notProcessedGroups.length>0&&refiringAllowed.indexOf(Number(allTagUids[i]))!==-1));}
if(shouldFire!==true){configObject[allTagUids[i]].send=0;configObject[allTagUids[i]].load=0;deactivatedTags.push(allTagUids[i]);}}
if(messageNotLoggedYet(9)){logger("Blocked tags: "+
JSON.stringify(deactivatedTags,null,2)+
(tiqIsAllowed?"":"\n\nAll tags blocked because Tealium iQ isn't allowed to fire."));}
return configObject;}
function newUtagHandlerRE(a,b,c){var r=window.utag.handler.RE_old(a,b,c);if(c=="alr"){var tagBasedMap=generateTagBasedMap();var currentlyAllowedVendors=getCurrentConsentDecision();var alreadyProcessed=b[nameOfProcessedGroupArray]||[];var notProcessed=getNewConsents(alreadyProcessed,currentlyAllowedVendors);b[nameOfFullGroupArray]=currentlyAllowedVendors;b[nameOfConsentTypeString]=currentlyAllowedVendors&&currentlyAllowedVendors.type;b[nameOfUnprocessedGroupArray]=notProcessed;b[nameOfProcessedGroupArray]=alreadyProcessed;logger("Called block logic:\n\nAllowed: "+
JSON.stringify(currentlyAllowedVendors,null,2)+
"\n\nAlready processed: "+
(alreadyProcessed?JSON.stringify(alreadyProcessed,null,2):"(none)"));logger("Map:\n\n"+
JSON.stringify(map,null,2)+
"\n\nActive CMP Lookup Key: "+
cmpFetchCurrentLookupKey()+
"\n\nMap has entry for current settingsId: "+
(typeof map[cmpFetchCurrentLookupKey()]==="object"?"true":"false")+
"\n\nTag-based map for the active key: "+
JSON.stringify(tagBasedMap,null,2)+
"\n\nTags configured to refire: "+
JSON.stringify(refiringAllowed.map(tag=>String(tag)),null,2));logger("Consent confirmed: "+
currentlyAllowedVendors.type+
" : "+
JSON.stringify(currentlyAllowedVendors,null,2));var newCfg=blockTagsBasedOnConsent(tagBasedMap,window.utag.loader.cfg,currentlyAllowedVendors,alreadyProcessed,notProcessed,refiringAllowed);window.utag.loader.cfg=newCfg;}
return r;}
function newUtagLoaderInitdata(){window.utag.loader.initdata_old();if(!window.tealiumCmpIntegration.isNoviewSet&&!window.tealiumCmpIntegration.alreadyFiredInitialViewEvent){var consentedServices=getCurrentConsentDecision();if(consentedServices.type==="missing-well-formed-response"){return;}
window.tealiumCmpIntegration.alreadyFiredInitialViewEvent=true;if(consentedServices.type==="implicit"){window.tealiumCmpIntegration.implicitServices=consentedServices;queueEventWithoutFiringImplicitServices({event:"view",data:window.utag.handler.C(window.utag.data),});}}}
function generateTagBasedMap(){var tagBasedMap=getTagBasedMap(map);window.tealiumCmpIntegration.tagBasedMap=tagBasedMap;return tagBasedMap;}
function newUtagHandlerTrigger(a,b,c){var isPureConsentEvent=a===nameOfConsentPollingEvent&&!b&&!c;var isNoviewSet=window.tealiumCmpIntegration.isNoviewSet||true;var consentedServices=getCurrentConsentDecision();var consentType=(consentedServices&&consentedServices.type)||"none";var isCmpReady=consentType==="implicit"||consentType==="explicit";var isTealiumReady=window.utag&&window.utag.handler&&window.utag.handler.iflag===1;if(!isPureConsentEvent){logger("utag.handler.trigger called with:\n\n"+JSON.stringify(arguments,null,2));}
if(!isCmpReady&&!isTealiumReady){consentedServices.type="tealium-and-cmp-loading";logger("Waiting for CMP and Tealium to be ready, queueing early event.");queueEarlyEvent(a,b,c);return false;}else if(!isCmpReady){consentedServices.type="cmp-loading";logger("CMP is still loading, queueing early event");queueEarlyEvent(a,b,c);return false;}else if(!isTealiumReady){consentedServices.type="tealium-still-loading";logger("Tealium iQ is still loading, queueing early event");queueEarlyEvent(a,b,c);return false;}
var hasTagUidArray=c&&typeof c==="object"&&c.uids&&window.utag.ut.typeOf(c.uids)==="array";var uidMap=generateTagBasedMap();var allowedTagUids=[];var blockedTagUids=[];var serviceName;var tagUid;var hasConsent;if(hasTagUidArray){for(var i=0;i<c.uids.length;i++){tagUid=c.uids[i];serviceName=uidMap[tagUid]||"(missing)";hasConsent=consentedServices.indexOf(serviceName)!==-1;if(hasConsent){allowedTagUids.push(tagUid);}else{blockedTagUids.push(tagUid);}}
logger("Call included tagUid array:\n\n"+
JSON.stringify(c.uids)+
"\n\nwhich was replaced by the filtered version:\n\n"+
JSON.stringify(allowedTagUids));c.originalUids=c.uids.slice();c.uids=allowedTagUids;c.blockedTagUids=blockedTagUids;}
if(consentType==="explicit"){processEarlyQueue();processImplicitQueue();triggerTiqLoad();if(!isPureConsentEvent){return window.utag.handler.trigger_old(a,b,c);}}else if(consentType==="implicit"){processEarlyQueue();triggerTiqLoad();window.tealiumCmpIntegration.implicitServices=consentedServices;if(!isNoviewSet&&isTealiumReady&&!window.tealiumCmpIntegration.alreadyFiredInitialViewEvent){window.tealiumCmpIntegration.alreadyFiredInitialViewEvent=true;queueEventAndFireImplicitServices("view",window.utag.handler.C(window.utag.data));}
if(!isPureConsentEvent){return queueEventAndFireImplicitServices(a,b,c);}}else if(consentType==="missing-map"){logger("Something went wrong - all tags were blocked because no consent map was found for the active setting ID.");return false;}else if(consentType==="missing-tiq-consent"){logger('Something went wrong - all tags were blocked because no consent was found for "'+
tiqGroupName+
'", configured Tealium iQ name.\n\nConsent found: '+
JSON.stringify(consentedServices,null,2));return false;}else{logger("Something went wrong - all tags were blocked because the consent response was not understood.");return false;}}
function processEarlyQueue(){var queuedEvent;window.tealiumCmpIntegration.earlyEventQueue=window.tealiumCmpIntegration.earlyEventQueue||[];while(window.tealiumCmpIntegration.earlyEventQueue.length>0){queuedEvent=window.tealiumCmpIntegration.earlyEventQueue.shift();logger("Processing queued early event for currently consented tags: "+JSON.stringify(queuedEvent,null,2));window.utag.track(queuedEvent);}}
function processImplicitQueue(){var alreadyLogged=false;var queuedEvent;window.tealiumCmpIntegration.implicitEventQueue=window.tealiumCmpIntegration.implicitEventQueue||[];while(window.tealiumCmpIntegration.implicitEventQueue.length>0){if(!alreadyLogged){alreadyLogged=true;logger("Explicit consent tracking request received - processing past implicitly tracked events ("+
window.tealiumCmpIntegration.implicitEventQueue.length+
") for any new explicit tags.");}
queuedEvent=window.tealiumCmpIntegration.implicitEventQueue.shift();logger("Triggering event for explicitly-consented tags: "+JSON.stringify(queuedEvent));window.utag.track(queuedEvent);}}
function queueEarlyEvent(a,b,c){a=a||{};if(typeof b==="object"){b=JSON.parse(JSON.stringify(b));}
if(typeof a==="string"){a={event:a,data:b||{},cfg:c};}
a.data[nameOfProcessedGroupArray]=[];window.tealiumCmpIntegration.earlyEventQueue=window.tealiumCmpIntegration.earlyEventQueue||[];window.tealiumCmpIntegration.earlyEventQueue.push(a);logger("Queued early event!");}
function queueEventWithoutFiringImplicitServices(a,b,c){a=a||{};if(typeof b==="object"){b=JSON.parse(JSON.stringify(b));}
if(typeof a==="string"){a={event:a,data:b||{},cfg:c};}
var newUids;if(a&&a.cfg&&window.utag.ut.typeOf(a.cfg.uids)==="array"){newUids=a.cfg.blockedTagUids.slice();for(var i=0;i<refiringAllowed.length;i++){if(a.cfg.originalUids&&a.cfg.originalUids.indexOf(refiringAllowed[i])!==-1&&newUids.indexOf(refiringAllowed[i])===-1&&b[nameOfUnprocessedGroupArray].length>0){newUids.push(refiringAllowed[i]);}}
a.cfg.uids=newUids;}
a.data[nameOfProcessedGroupArray]=window.tealiumCmpIntegration.implicitServices||[];delete a.data[nameOfFullGroupArray];delete a.data[nameOfUnprocessedGroupArray];window.tealiumCmpIntegration.implicitEventQueue=window.tealiumCmpIntegration.implicitEventQueue||[];window.tealiumCmpIntegration.implicitEventQueue.push(a);}
function queueEventAndFireImplicitServices(a,b,c){window.utag.handler.trigger_old(a,b,c);logger("Implicit consent tracking request fired (or queued, if utag hasn't loaded).");return queueEventWithoutFiringImplicitServices(a,b,c);}
function getTagBasedMap(map){if(typeof map!=="object")return{};var settingsId=cmpFetchCurrentLookupKey()||"";if(typeof settingsId!=="string"||settingsId==="")return{};var settingSpecificMap=map[settingsId]||{};var serviceNames=Object.keys(settingSpecificMap);var uidMap={};for(var i=0;i<serviceNames.length;i++){for(var j=0;j<settingSpecificMap[serviceNames[i]].length;j++){uidMap[settingSpecificMap[serviceNames[i]][j]]=serviceNames[i];}}
return uidMap;}
function recheckForCmpAndConsent(){var newConsentResponse=cmpFetchCurrentConsentDecision();reactToCmpResponse(newConsentResponse);}
function getCurrentConsentDecision(){var freshConsent=cmpFetchCurrentConsentDecision();return buildConsentDecisionFromRawCmpOutput(freshConsent);}
function logger(message,showOutsideDebugMode){if(typeof tealiumEnvironment==="undefined"||tealiumEnvironment==="prod"){showOutsideDebugMode=false;}
if(showOutsideDebugMode||tiqInDebugMode){message="\n"+message+"\n";var formattedArr=[];formattedArr.push("****************");var messageArr=message.split("\n");messageArr.forEach(function(messageLine){formattedArr.push("*  "+messageLine);});formattedArr.push("****************");var outputString=formattedArr.join("\n");console.log(outputString);}}
function stopTiq(){window.utag_cfg_ovrd=window.utag_cfg_ovrd||{};window.utag_cfg_ovrd.noload=true;}
function triggerTiqLoad(){if(!(window.utag&&window.utag.loader&&window.utag.loader.PINIT)){return true;}
if(!window.utag.handler||!window.utag.handler.iflag){window.utag.cfg.noload=false;if(!window.utag.PINITCalled){window.utag.loader.PINIT();for(var i in window.utag.loader.GV(window.utag.loader.cfg)){var tag=window.utag.loader.cfg[i];if(tag.load===4&&tag.send===1&&tag.wait===0){window.utag.loader.LOAD(i);}}
window.utag.PINITCalled=true;}
return true;}
return false;}
function triggerOrQueue(){var successfullyTriggeredLoadIfNeeded=triggerTiqLoad();if(!successfullyTriggeredLoadIfNeeded){return window.utag.handler.trigger(nameOfConsentPollingEvent);}}
function getTealiumEnvironment(){var allScripts=document.getElementsByTagName("script");var re=/\/([^/]*)\/utag\.js(\?.*)*$/;for(var i=0;i<allScripts.length;i++){var result=re.exec(allScripts[i].src);if(result&&result[1]){return result[1];}}
return"prod";}
if(window.utag_cfg_ovrd&&window.utag_cfg_ovrd.noload===true)return false;logger("TiQ CMP integration active: "+
window.tealiumCmpIntegration.cmpName+
(tiqInDebugMode?"\n\nDEBUGGING TIP: Use /SENDING|\\*\\*\\*\\*/ in the browser console as the 'filter' to show only CMP and tag send notifications.":"\n\nActivate TiQ Debug Mode for more details: https://docs.tealium.com/platforms/javascript/debugging/"));overrideUtagFunctions();var cmpResponse=cmpFetchCurrentConsentDecision();reactToCmpResponse(cmpResponse);})(window);}}catch(e){utag.DB(e)}
if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};utag.loader.PINIT=function(a,b,c){utag.DB("Pre-INIT");if(utag.cfg.noload){return;}
try{this.GET();if(utag.handler.RE('view',utag.data,"blr")){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr");utag.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1&&b.s2s!=1){if(utag.loader.bk[b.id]||((utag.cfg.readywait||utag.cfg.noview)&&b.load==4)){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.wait==1&&utag.loader.rf==0){utag.DB('utag.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){utag.DB('utag.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();}});else if(this.lq.length>0)utag.loader.rf=1;else if(this.lq.length==0)utag.loader.END();return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{try{if(utag.data['dom.pathname'].toString().toLowerCase().indexOf('/careers/companies/rankings/best-companies/law-firms'.toLowerCase())<0){(function(){var PATH='',UTAG_CONDITION=utag_data.site_portal.toLowerCase()=="careers",SURVEY_NAME='US News Careers Audience Survey',SURVEY_LINK='https://www.surveymonkey.com/r/YCDVFQR',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=1;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="news",SURVEY_NAME='US News Best States 2025 Survey',SURVEY_LINK='https://www.surveymonkey.com/r/D53KXCM',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=1;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="best global universities",SURVEY_NAME='NetPromoter Survey Global',SURVEY_LINK='https://www.surveymonkey.com/r/BP3DFQV',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=3;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="k-12",SURVEY_NAME='NetPromoter Survey K12',SURVEY_LINK='https://www.surveymonkey.com/r/BPBXGHK',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=3;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="skillbuilder",SURVEY_NAME='NetPromoter Survey Skillbuilder',SURVEY_LINK='https://www.surveymonkey.com/r/BP6NG7S',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=3;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="bestcolleges",SURVEY_NAME='NetPromoter Survey Colleges',SURVEY_LINK='https://www.surveymonkey.com/r/BPCH5TM',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=3;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(utag.data['page_url'].toString().toLowerCase().indexOf('/best-graduate-schools/top-engineering-schools/mechanical-engineering-rankings'.toLowerCase())<0){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="best graduate schools",SURVEY_NAME='NetPromoter Survey Grad',SURVEY_LINK='https://www.surveymonkey.com/r/BPMQC6F',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=3;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="online programs",SURVEY_NAME='NetPromoter Survey Online',SURVEY_LINK='https://www.surveymonkey.com/r/BPNX5V9',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=3;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="k-12"&&utag_data.page_type.toLowerCase()=="search",SURVEY_NAME='U.S. News K12 Audience Survey Search',SURVEY_LINK='https://www.surveymonkey.com/r/XNSLY3B',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=2;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(utag.data['dom.url'].toString().toLowerCase().indexOf('https://www.usnews.com/education/best-high-schools/national-rankings'.toLowerCase())>-1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education",SURVEY_NAME='U.S. News K12 Audience Survey Public',SURVEY_LINK='https://www.surveymonkey.com/r/XFL7H7H',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=2;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(utag.data['dom.url'].toString().toLowerCase().indexOf('https://www.usnews.com/education/best-high-schools/national-rankings'.toLowerCase())>-1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="best high schools"&&utag_data.site_product_subsection.toLowerCase()=="charter",SURVEY_NAME='U.S. News K12 Audience Survey Charter',SURVEY_LINK='https://www.surveymonkey.com/r/XN52C8G',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=2;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(utag.data['dom.url'].toString().toLowerCase().indexOf('https://www.usnews.com/education/best-high-schools/national-rankings'.toLowerCase())>-1){(function(){var PATH='',UTAG_CONDITION=utag_data.site_vertical.toLowerCase()=="education"&&utag_data.site_product.toLowerCase()=="best high schools"&&utag_data.site_product_subsection.toLowerCase()=="magnet",SURVEY_NAME='U.S. News K12 Audience Survey Magnet',SURVEY_LINK='https://www.surveymonkey.com/r/XF9FD9S',SURVEY_TEXT="We are running a quick survey. Would you like to participate?",DAYS_TO_LEAVE_ALONE=21,PAGEVIEW_TO_DISPLAY=2;var dontShowCookieName='dont-show-survey-'+SURVEY_NAME,pageviewCookieName='pageview-count-'+SURVEY_NAME;var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();};function dontShowSurvey(){var date=new Date();date.setTime(date.getTime()+(1000*60*60*24*DAYS_TO_LEAVE_ALONE));document.cookie=dontShowCookieName+'=true;expires='+date+';path=/';return true;}
function pageviewCounter(){var date=new Date(),pageviewCount=Number(getCookie(pageviewCookieName))||0;pageviewCount++;date.setTime(date.getTime()+(1000*60*60*24*1));document.cookie=pageviewCookieName+'='+pageviewCount+';expires='+date+';path=/';if(pageviewCount>=PAGEVIEW_TO_DISPLAY){return true;}else{return false;}}
if(window.location.href.indexOf(PATH)>-1&&UTAG_CONDITION&&!getCookie(dontShowCookieName)&&pageviewCounter()){(function(){document.head.appendChild(document.createElement('style')).innerHTML='#zm_survey-prompt{z-index:9999;background:#fff;border:1px solid #ccc;border-right:3px solid #c4212a;bottom:60px;box-shadow:2px 1px 5px rgba(17,17,17,.3);color:#111;font-family:Roboto,Helvetica Neue,Helvetica,sans-serif;font-size:.875rem;font-weight:700;line-height:1.42;text-rendering:optimizeLegibility;padding:10px 10px 20px 10px;position:fixed;width:220px;-webkit-font-smoothing:antialiased}#zm_survey-prompt p{display:block;margin:0 0 1.2rem 0;padding-bottom:4px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0}#zm_survey-start{border:1px solid #c4212a;border-bottom:2px solid #c4212a;border-radius:5px;color:#c4212a;cursor:pointer;padding:.5rem;text-decoration:none}#zm_survey-close{color:#666;margin-left:2rem;font-size:.75rem;text-decoration:underline;font-weight:400}@media only screen and (min-width:769px){#zm_survey-prompt{bottom:130px;padding:24px 24px 32px;width:250px}}';document.body.appendChild(document.createElement('div')).innerHTML='<div id="zm_survey-prompt"><p>'+SURVEY_TEXT+'</p><a id="zm_survey-start" href="'+SURVEY_LINK+'" target="_blank">Start Survey</a><a id="zm_survey-close" href="javascript:void(0);">No Thanks</a></div>';document.getElementById('zm_survey-start').addEventListener('click',function(){dontShowSurvey();});document.getElementById('zm_survey-close').addEventListener('click',function(){document.getElementById('zm_survey-prompt').style.display='none';dontShowSurvey();});})();}})();}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{if((typeof utag.data['disable_extensions']=='undefined'&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){if(typeof utag.runonce=='undefined')utag.runonce={};if(typeof utag.runonce[123]=='undefined'){utag.runonce[123]=1;jQuery('a.button.t-larger.block.access:contains("Sign Up Now"),a.button.t-largest.block:contains("Sign Up Now")').bind('mousedown',function(e){utag.link({"event_name":'compass-signup',"link_name":"compass-sign-up : "+document.location.pathname})});}}}catch(e){utag.DB(e)};try{if(window.location.href.indexOf("health-news/blogs/second-opinion/articles")>-1){jQuery("#taboola-below-article-thumbnails-1st,#taboola-below-article-thumbnails-2nd").hide();};}catch(e){utag.DB(e)};try{try{if((/^\/usnews\/store\/college_compass\.htm/i.test(utag.data['dom.pathname'])&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)||(/^\/usnews\/store\/college-compass\.htm/i.test(utag.data['dom.pathname'])&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)||(/^\/best-colleges/i.test(utag.data['dom.pathname'])&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)||(/^\/commerce\/checkout/i.test(utag.data['dom.pathname'])&&utag.data['dom.pathname'].toString().toLowerCase().indexOf('college-compass-with-digital'.toLowerCase())>-1&&utag.data['dom.hash'].toString().toLowerCase().indexOf('ordered'.toLowerCase())<0&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){var loadTracking=function(){var adwordsScript=document.createElement('script');adwordsScript.setAttribute('src',"https://www.googletagmanager.com/gtag/js?id=AW-826252133");adwordsScript.async=true;document.head.appendChild(adwordsScript);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','AW-826252133');};if(typeof(USN)!=='undefined'&&typeof(USN.ready)!=='undefined'){USN.ready().then(loadTracking);}else{loadTracking();}}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if((/^\/commerce\/checkout/i.test(utag.data['dom.pathname'])&&utag.data['dom.pathname'].toString().toLowerCase().indexOf('college-compass-with-digital'.toLowerCase())>-1&&utag.data['dom.hash'].toString().toLowerCase().indexOf('ordered'.toLowerCase())>-1&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){var loadTracking=function(){var adwordsScript=document.createElement('script');adwordsScript.setAttribute('src',"https://www.googletagmanager.com/gtag/js?id=AW-826252133");adwordsScript.async=true;document.head.appendChild(adwordsScript);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','AW-826252133');gtag('event','conversion',{'send_to':'AW-826252133/FvmRCK-v1HkQ5bb-iQM'});};if(typeof(USN)!=='undefined'&&typeof(USN.ready)!=='undefined'){USN.ready().then(loadTracking);}else{loadTracking();}}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{if((utag.data['site_vertical'].toString().toLowerCase().indexOf('autos'.toLowerCase())>-1&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){if(typeof utag.runonce[630]=='undefined'){utag.runonce[630]=1;jQuery('[data-tracking-id=QuoteWizard]').bind('mousedown',function(e){!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','924522661004161');fbq('trackSingle','924522661004161','Lead');});}}}catch(e){utag.DB(e)};try{try{if((utag.data['dom.query_string'].toString().toLowerCase().indexOf('src=360_keywee_fb'.toLowerCase())>-1&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){$('body').on('click','div[data-tracking-id="360-view-plans"][data-tracking-campaign="ADT Security"] > a',function(evt){$(this).attr('href','https://tracking.centerfield.com/?a=101678&c=107186');});}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{if(typeof utag.runonce=='undefined')utag.runonce={};utag.jdh=function(h,i,j,k){h=utag.jdhc.length;if(h==0)window.clearInterval(utag.jdhi);else{for(i=0;i<h;i++){j=utag.jdhc[i];k=jQuery(j.i).is(":visible")?1:0;if(k!=j.s){if(j.e==(j.s=k))jQuery(j.i).trigger(j.e?"afterShow":"afterHide")}}}};utag.jdhi=window.setInterval(utag.jdh,250);utag.jdhc=[];if((utag.data['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&utag.data['site_product'].toString().toLowerCase().indexOf('best credit cards'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase()=='https://creditcards.usnews.com/'.toLowerCase()&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)||(utag.data['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&utag.data['site_product'].toString().toLowerCase().indexOf('best credit cards'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase()=='https://creditcards.usnews.com/cash-back'.toLowerCase()&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)||(utag.data['site_vertical'].toString().toLowerCase().indexOf('money'.toLowerCase())>-1&&utag.data['site_product'].toString().toLowerCase().indexOf('best credit cards'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase()=='https://creditcards.usnews.com/student'.toLowerCase()&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){if(typeof utag.runonce[825]=='undefined'){utag.runonce[825]=1;jQuery(document.body).on('mousedown','[data-tracking-id=apply-now]',function(e){!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2219146565064876');fbq('trackSingle','2219146565064876','Purchase');});}}}catch(e){utag.DB(e)};try{if((utag.data['site_vertical'].toString().toLowerCase().indexOf('360'.toLowerCase())>-1&&utag.data['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){if(typeof utag.runonce[898]=='undefined'){utag.runonce[898]=1;jQuery(document.body).on('mousedown','[data-tracking-id=360-coupon-click] , [data-tracking-id=360-product-name] , [data-tracking-id=360-view-plans] ',function(e){utag.link({"google_ads_conversion_label360":'dmvoCMnJ9qMDEN6YmbgB'})});}}}catch(e){utag.DB(e)};}})
if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.cfg.readywait=1;utag.DB('READY:utag.cfg.readywait');setTimeout(function(){utag.loader.PINIT()},utag.cfg.waittimer||1);}})}else{utag.loader.PINIT()}}