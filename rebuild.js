const answerRules=[
  ['What is the star number?','76'],
  ['The clue indicates that the next destination is the…','library'],
  ['What was the first name of the boy who grew up in the house with the numbered star in the late 18th century?','johnny'],
  ['What is the house number you need to go to on Williams Street?','20'],
  ['The answer to the puzzle is…','place'],
  ['I have cracked the code and found the word. It is…','shops'],
  ['The answer is…','tram'],
  ['What is the FINAL answer?','icecream']
];
function chapter(n){const c=C[n];const figures=Array.from({length:c[2]},(_,i)=>`<figure><img src="c${n+1}-${i+1}.jpg" alt="Original Chapter ${n+1} puzzle resource"><figcaption>Original game puzzle resource</figcaption></figure>`).join('');app.innerHTML=wrap(`<div class="topline chapter-nav"><button class="button ghost" onclick="map()">← Case map</button><span class="small">Chapter ${n+1} of 8</span></div><article class="card chapter original"><p class="location">📍 ${c[0]}</p>${fmt(c[1])}<section class="gallery">${figures}</section><section class="answer"><h3>${c[3]}</h3><p>Have you solved the puzzle?</p><button class="button full" onclick="submitAnswer(${n})">Yes — submit our answer</button><details class="hint"><summary>No — I need a hint</summary><p>${fmt(c[4])}</p></details></section></article>`) }
function submitAnswer(n){const r=answerRules[n];app.innerHTML=wrap(`<section class="card answer"><p class="eyebrow">Submit your answer</p><h2>${r[0]}</h2><input id="solution" class="solution" autocomplete="off" placeholder="Your answer"><button class="button full" onclick="checkAnswer(${n})">Submit answer</button><p id="feedback" class="small"></p><button class="button ghost" onclick="chapter(${n})">← Back to puzzle</button></section>`)}
function checkAnswer(n){const entered=document.querySelector('#solution').value.toLowerCase().replace(/[^a-z0-9]/g,'');if(entered.includes(answerRules[n][1])){if(!S.d.includes(n))S.d.push(n);S.u=Math.max(S.u,Math.min(7,n+1));save();map()}else document.querySelector('#feedback').textContent='Incorrect. Review the clue and open the hint room, then try again.'}
window.chapter=chapter;window.submitAnswer=submitAnswer;window.checkAnswer=checkAnswer;
