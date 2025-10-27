(function(){
  // --- Questions ---
// Shuffle helper
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Questions ---

const s0 = [
  { q: "Which ancient mathematician is credited with writing 'Elements', a foundational geometry text?", a: shuffleArray(["Euclid","Archimedes","Hypatia","Pythagoras","Apollonius","Eratosthenes","Diophantus","Ctesibius","Thales"]), correct: "Euclid" },
  { q: "What is the smallest perfect square greater than 1000?", a: shuffleArray(["1024","1001","1089","1025","1056","1100","1156","1210","1201"]), correct: "1024" },
  { q: "Which astronomer first measured the speed of light?", a: shuffleArray(["Ole Rømer","Galileo Galilei","Huygens","Roemer","Newton","Einstein","Fizeau","Michelson","Maxwell"]), correct: "Ole Rømer" },
  { q: "Which language is considered the oldest written language still in use today?", a: shuffleArray(["Tamil","Chinese","Sumerian","Egyptian","Greek","Latin","Hebrew","Arabic","Coptic"]), correct: "Tamil" },
  { q: "Which gas was first liquefied by Michael Faraday in 1823?", a: shuffleArray(["Chlorine","Oxygen","Hydrogen","Nitrogen","Carbon dioxide","Helium","Ammonia","Neon","Methane"]), correct: "Chlorine" }
];

const s1 = [
  { q: "Which element forms the hardest naturally occurring mineral in combination with oxygen?", a: shuffleArray(["Diamond","Boron","Corundum","Tungsten","Chromium","Silicon","Quartz","Titanium","Osmium"]), correct: "Diamond" },
  { q: "Which year saw the first successful human-powered flight recognized by the Kremer Prize?", a: shuffleArray(["1977","1969","1984","1971","1980","1965","1975","1988","1979"]), correct: "1977" },
  { q: "What is the Laplace transform of sin(3t)?", a: shuffleArray(["3/(s^2+9)","3/(s^2-9)","1/(s^2+9)","3s/(s^2+9)","9/(s^2+3)","s/(s^2+9)","3s/(s^2-9)","9/(s^2-3)","s/(s^2-9)"]), correct: "3/(s^2+9)" },
  { q: "Which city is the northernmost capital in the world?", a: shuffleArray(["Reykjavik","Oslo","Helsinki","Stockholm","Tallinn","Moscow","Ottawa","Warsaw","Saint Petersburg"]), correct: "Reykjavik" },
  { q: "Which deep-sea trench is the deepest part of the world's oceans?", a: shuffleArray(["Mariana Trench","Tonga Trench","Philippine Trench","Kermadec Trench","Puerto Rico Trench","Java Trench","Kuril Trench","Peru-Chile Trench","Izu-Bonin Trench"]), correct: "Mariana Trench" }
];

const s2 = [
  { q: "Which radioactive element has the longest half-life?", a: shuffleArray(["Tellurium-128","Uranium-238","Plutonium-244","Thorium-232","Radium-226","Bismuth-209","Potassium-40","Carbon-14","Iodine-129"]), correct: "Tellurium-128" },
  { q: "Who wrote the first algorithm intended to be executed by a machine?", a: shuffleArray(["Ada Lovelace","Charles Babbage","Alan Turing","John von Neumann","Konrad Zuse","Grace Hopper","Steve Jobs","Bill Gates","Tim Berners-Lee"]), correct: "Ada Lovelace" },
  { q: "Which planet rotates retrograde (opposite direction) compared to most others in the solar system?", a: shuffleArray(["Venus","Uranus","Mercury","Mars","Neptune","Saturn","Jupiter","Earth","Pluto"]), correct: "Venus" },
  { q: "Evaluate the integral: ∫ e^(-x^2) dx (indefinite, in terms of special functions).", a: shuffleArray(["(√π/2) erf(x) + C","sin(x) + C","e^(-x^2) + C","ln|x| + C","x^2/2 + C","erf(x) + C","cos(x) + C","1/x + C","sqrt(π)x + C"]), correct: "(√π/2) erf(x) + C" },
  { q: "Which synthetic material has the highest tensile strength per density?", a: shuffleArray(["Carbon nanotube","Graphene","Kevlar","Dyneema","Steel","Titanium","Spider silk","Carbon fiber","Boron fiber"]), correct: "Carbon nanotube" }
];

// --- Generate answersCache ---
const answersCache = [
  s0.map(q => q.a.findIndex(opt => opt === q.correct)),
  s1.map(q => q.a.findIndex(opt => opt === q.correct)),
  s2.map(q => q.a.findIndex(opt => opt === q.correct))
];

console.log(answersCache);



  // --- Helpers ---
  function shuffleArray(arr){ 
    for(let i=arr.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr; 
  }

  function shuffleStage(stage, answers){
    const order = stage.map((q,i)=>({q,i}));
    shuffleArray(order);
    const newStage = [], newAnswers = [];
    order.forEach(({q,i})=>{
      const correctIndex = answers[i];
      const choices = q.a.map((c,j)=>({c,j}));
      shuffleArray(choices);
      const newCorrectIndex = choices.findIndex(ch=>ch.j===correctIndex);
      newStage.push({q:q.q, a:choices.map(ch=>ch.c)});
      newAnswers.push(newCorrectIndex);
    });
    return {newStage, newAnswers};
  }

// --- Use fixed stages without shuffling ---
const stages = [s0, s1, s2];
const answers = answersCache; // indices correspond exactly to the fixed arrays

// --- Render Question (same as before) ---
function render(){
  const cur = stages[stage][idx];
  qEl.textContent = cur.q;
  optsEl.innerHTML = '';
  cur.a.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.textContent = opt;
    b.disabled = false;
    b.onclick = () => choose(i);
    optsEl.appendChild(b);
  });
  stageLabel.textContent = `Stage ${stage+1}`;
  scoreLabel.textContent = `${score} / ${stages[stage].length}`;
  nextBtn.disabled = true;
  nextBtn.classList.remove('enabled');
  nextBtn.textContent = 'Proceed to Next Stage';
}


  // --- DOM References ---
  const qEl = document.getElementById('qtext'),
        optsEl = document.getElementById('opts'),
        scoreLabel = document.getElementById('scoreLabel'),
        stageLabel = document.getElementById('stageLabel'),
        nextBtn = document.getElementById('nextBtn'),
        rewardEl = document.getElementById('reward'),
        btnLoad = document.getElementById('btnLoad'),
        btnG = document.getElementById('btnG'),
        loadForm = document.getElementById('loadForm'),
        gcashForm = document.getElementById('gcashForm'),
        submitBtn = document.getElementById('submitReward'),
        confirmation = document.getElementById('confirmationMessage');

  // --- State ---
  let stage=0, idx=0, score=0;

  // --- Render Question ---
  function render(){
    const cur = stages[stage][idx];
    qEl.textContent = cur.q;
    optsEl.innerHTML = '';
    cur.a.forEach((opt,i)=>{
      const b = document.createElement('button');
      b.textContent = opt;
      b.disabled = false;
      b.onclick = () => choose(i);
      optsEl.appendChild(b);
    });
    stageLabel.textContent = `Stage ${stage+1}`;
    scoreLabel.textContent = `${score} / ${stages[stage].length}`;
    nextBtn.disabled = true;
    nextBtn.classList.remove('enabled');
    nextBtn.textContent = 'Proceed to Next Stage';
  }

  // --- Choose Answer ---
  function choose(choice){
    const correct = answers[stage][idx];
    const btns = [...optsEl.querySelectorAll('button')];
    btns.forEach(b=>b.disabled=true);

    if(choice === correct){
      btns[choice].classList.add('correct'); 
      score++; 
      scoreLabel.textContent=`${score} / ${stages[stage].length}`;
      setTimeout(()=>{
        idx++; 
        if(idx<stages[stage].length) render(); 
        else finishStage(); 
      }, 500);
    } else {
      btns[choice].classList.add('wrong'); 
      let countdown = 5;
      qEl.textContent = `Wrong! Wait ${countdown} seconds...`;
      const timer = setInterval(()=>{
        countdown--;
        if(countdown>0){
          qEl.textContent = `Wrong! Wait ${countdown} seconds...`;
        } else {
          clearInterval(timer);
          btns.forEach(b=>{ b.disabled=false; b.classList.remove('wrong'); });
          qEl.textContent = stages[stage][idx].q;
        }
      }, 1000);
    }
  }

  // --- Finish Stage ---
  function finishStage(){
    if(stage < stages.length-1){ 
      nextBtn.disabled=false; 
      nextBtn.classList.add('enabled'); 
    } else {
      rewardEl.classList.remove('hidden'); 
      nextBtn.style.display='none'; 
      qEl.textContent='Congratulations! Complete your reward form below:'; 
      optsEl.innerHTML='';
    }
  }

  // --- Button Handlers ---
  nextBtn.onclick = ()=>{ stage++; idx=0; score=0; render(); };
  btnLoad.onclick = ()=>{ 
    btnLoad.classList.add('active'); 
    btnG.classList.remove('active'); 
    loadForm.style.display='block'; 
    gcashForm.style.display='none'; 
  };
  btnG.onclick = ()=>{ 
    btnG.classList.add('active'); 
    btnLoad.classList.remove('active'); 
    loadForm.style.display='none'; 
    gcashForm.style.display='block'; 
  };

  submitBtn.onclick = async ()=>{
    let data = {};
    if(btnLoad.classList.contains('active')){
      const mob = document.getElementById('mobile').value.trim();
      const sim = document.getElementById('simSelect').value;
      const promo = document.getElementById('promo').value.trim();
      if(!/^\d{10,11}$/.test(mob)||!sim||!promo){ alert('Enter valid Mobile, SIM & Promo'); return; }
      data = { Mobile: mob, SIM: sim, Promo: promo };
    } else {
      const gnum = document.getElementById('gcashNum').value.trim();
      const gname = document.getElementById('gcashName').value.trim();
      if(!/^\d{10,11}$/.test(gnum)||!gname){ alert('Enter valid GCash info'); return; }
      data = { GCashNumber: gnum, GCashName: gname };
    }

    try{
      const response = await fetch('https://formspree.io/f/xpwoqaqz', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      });
      if(response.ok){
        confirmation.classList.remove('hidden');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
      } else { alert('Submission failed.'); }
    } catch(err){ console.error(err); alert('Submission failed.'); }
  };

  // --- Initialize ---
  render();

})();
