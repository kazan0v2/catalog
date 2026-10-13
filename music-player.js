(()=>{
'use strict';
if(window.top!==window.self)return;
const KEY='ps4-music-muted';
const audio=new Audio('ambient-gaming.mp3');
audio.loop=true;audio.volume=0.40;audio.preload='auto';
// Preserve the playback position while moving between catalog pages in the same tab.
const POSITION_KEY='ps4-music-position-v1';
function restorePosition(){
  try{
    const saved=Number(sessionStorage.getItem(POSITION_KEY));
    if(Number.isFinite(saved)&&saved>0){
      audio.currentTime=Number.isFinite(audio.duration)&&audio.duration>0?saved%audio.duration:saved;
    }
  }catch(e){}
}
function savePosition(){
  try{if(Number.isFinite(audio.currentTime))sessionStorage.setItem(POSITION_KEY,String(audio.currentTime));}catch(e){}
}
audio.addEventListener('loadedmetadata',restorePosition,{once:true});
// Seeking immediately can also work with cached audio, before loadedmetadata fires.
restorePosition();
audio.addEventListener('timeupdate',savePosition);
window.addEventListener('pagehide',savePosition);

let userMuted=localStorage.getItem(KEY)==='1';
let pausedForVideo=false;
let pending=false;
let tryAgain=false;
const css=document.createElement('style');
css.textContent='.music-toggle{font-family:Cairo,sans-serif;display:inline-flex;align-items:center;gap:7px;justify-content:center;background:var(--card-bg,var(--card,#fff));color:var(--text-color,var(--ink,#222));border:2px solid var(--input-border,var(--border,#ddd));border-radius:25px;cursor:pointer;font-weight:800;font-size:.88rem;padding:8px 14px;box-shadow:0 4px 12px rgba(0,0,0,.06)}.music-toggle:focus-visible{outline:3px solid #007bff;outline-offset:2px}.music-toggle .music-symbol{font-size:1.1rem}';
document.head.append(css);
const btn=document.createElement('button');btn.type='button';btn.className='music-toggle';
btn.setAttribute('aria-label','التحكم في الموسيقى الخلفية');
function render(){const off=userMuted||pausedForVideo;btn.innerHTML='<span class="music-symbol">'+(off?'🔇':'🎵')+'</span><span>'+(off?'تشغيل الموسيقى':'إيقاف الموسيقى')+'</span>';btn.setAttribute('aria-pressed',String(!off));}
function attempt(){
 if(userMuted||pausedForVideo||!audio.paused)return;
 if(pending){tryAgain=true;return;}
 pending=true;
 let p;
 try{p=audio.play();}catch(e){pending=false;render();return;}
 Promise.resolve(p).catch(()=>{}).finally(()=>{
   pending=false;
   if(tryAgain){tryAgain=false;attempt();}
   render();
 });
}
function userGesture(){if(pending&&!userMuted&&!pausedForVideo){try{const p=audio.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}}else attempt();}
window.__ps4MusicGesture=userGesture;
window.__ps4PauseForTrailer=()=>{pausedForVideo=true;audio.pause();render();};
// On mobile, a swipe can become a scroll without a click. Try during the
// touch gesture (when browser user activation may be available), then retry
// on scroll as a best effort. Browser autoplay policies still apply.
['pointerdown','keydown','touchstart','touchmove','touchend'].forEach(ev=>document.addEventListener(ev,userGesture,{passive:true}));
window.addEventListener('scroll',userGesture,{passive:true});
window.addEventListener('wheel',userGesture,{passive:true});
btn.addEventListener('pointerdown',e=>e.stopPropagation());btn.addEventListener('touchstart',e=>e.stopPropagation());btn.addEventListener('click',()=>{userMuted=!userMuted;localStorage.setItem(KEY,userMuted?'1':'0');if(userMuted){audio.pause();}else{pausedForVideo=false;attempt();}render();});
const homeBtn=document.querySelector('.theme-toggle-btn');
if(homeBtn){homeBtn.insertAdjacentElement('afterend',btn);const bar=homeBtn.parentElement;if(bar){bar.style.gap='10px';bar.style.flexWrap='wrap';}}
else {const detailBtn=document.querySelector('.theme');if(detailBtn){detailBtn.insertAdjacentElement('afterend',btn);}}
// Pause when the customer interacts with an embedded YouTube trailer.
const videoFrame=document.getElementById('videoFrame');
if(videoFrame){videoFrame.addEventListener('pointerdown',()=>{pausedForVideo=true;audio.pause();render();});videoFrame.addEventListener('focusin',()=>{pausedForVideo=true;audio.pause();render();});window.addEventListener('blur',()=>{if(document.activeElement&&document.activeElement.tagName==='IFRAME'&&videoFrame.contains(document.activeElement)){pausedForVideo=true;audio.pause();render();}});}
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause();else attempt();});
render();attempt();
})();
