window.onload = () => {
  const shuffle = arr => arr.sort(() => Math.random() - 0.5);
  const encode = s => btoa(unescape(encodeURIComponent(s.split('').reverse().join(''))));
  const decode = s => decodeURIComponent(escape(atob(s))).split('').reverse().join('');


  const stages = [
    [
      { q: "Which ancient mathematician is credited with writing 'Elements'?",
        a: shuffle(["Euclid","Archimedes","Pythagoras","Hypatia","Thales","Eratosthenes","Proclus","Anaximander","Diophantus","Apollonius"]),
        correct: "ZGlsY3VF" },            
      { q: "What is the smallest perfect square greater than 1000?",
        a: shuffle(["1024","1089","1156","1009","1100","1056","1200","1040","1090","1036"]),
        correct: "NDIwMQ==" },            
      { q: "Who first measured the speed of light?",
        a: shuffle(["Ole Rømer","Galileo","Fizeau","Huygens","Newton","Michelson","Einstein","Faraday","Cavendish","Hooke"]),
        correct: "cmVtw7hSIGVsTw==" },     
      { q: "Oldest written language still in use?",
        a: shuffle(["Tamil","Chinese","Greek","Hebrew","Sanskrit","Arabic","Latin","Persian","Mongolian","Armenian"]),
        correct: "bGltYVQ=" },            
      { q: "Which gas was first liquefied by Faraday?",
        a: shuffle(["Chlorine","Ammonia","Carbon dioxide","Hydrogen","Oxygen","Helium","Nitrogen","Neon","Sulfur dioxide","Argon"]),
        correct: "ZW5pcm9saEM=" },        
      { q: "Who invented the printing press?",
        a: shuffle(["Johannes Gutenberg","Leonardo da Vinci","Isaac Newton","Galileo","Copernicus","Kepler","Benjamin Franklin","Pascal","Aristotle","Descartes"]),
        correct: "Z3JlYm5ldHVHIHNlbm5haG9K" }, 
      { q: "Which continent has the most countries?",
        a: shuffle(["Africa","Asia","Europe","South America","North America","Oceania","Antarctica","Middle East","Central America","None"]),
        correct: "YWNpcmZB" },            
      { q: "First human to travel into space?",
        a: shuffle(["Yuri Gagarin","Neil Armstrong","Buzz Aldrin","Alan Shepard","Valentina Tereshkova","John Glenn","Laika","Gus Grissom","Chris Hadfield","Michael Collins"]),
        correct: "bmlyYWdhRyBpcnVZ" },      
      { q: "The Great Pyramid is located in?",
        a: shuffle(["Giza","Saqqara","Luxor","Alexandria","Cairo","Thebes","Aswan","Memphis","Khartoum","Amarna"]),
        correct: "YXppRw==" },            
      { q: "Fastest land animal?",
        a: shuffle(["Cheetah","Leopard","Tiger","Lion","Pronghorn","Ostrich","Horse","Gazelle","Greyhound","Kangaroo"]),
        correct: "aGF0ZWVoQw==" }         
    ],

  
    [
      { q: "Hardest natural material?",
        a: shuffle(["Diamond","Quartz","Corundum","Topaz","Ruby","Sapphire","Garnet","Spinel","Graphene","Boron"]),
        correct: "ZG5vbWFpRA==" },       
      { q: "Year of first human-powered flight (Kremer Prize)?",
        a: shuffle(["1977","1969","1980","1984","1975","1979","1981","1973","1985","1990"]),
        correct: "Nzc5MQ==" },          
      { q: "Laplace transform of sin(3t)?",
        a: shuffle(["3/(s^2+9)","s/(s^2+9)","3s/(s^2+9)","1/(s^2+9)","6/(s^2+9)","3/(s+9)","s/(s+9)","9/(s^2+3)","s/9","3/s"]),
        correct: "KTkrMl5zKC8z" },        
      { q: "Northernmost capital city?",
        a: shuffle(["Reykjavik","Oslo","Helsinki","Stockholm","Moscow","Tallinn","Copenhagen","Anchorage","Juneau","Nuuk"]),
        correct: "a2l2YWpreWVS" },        
      { q: "Deepest ocean trench?",
        a: shuffle(["Mariana Trench","Tonga Trench","Java Trench","Philippine Trench","Kuril-Kamchatka","Puerto Rico","Kermadec","Aleutian","Japan Trench","Peru-Chile"]),
        correct: "aGNuZXJUIGFuYWlyYU0=" }, 
      { q: "What is the SI unit of power?",
        a: shuffle(["Watt","Joule","Volt","Ampere","Newton","Ohm","Pascal","Tesla","Candela","Kelvin"]),
        correct: "dHRhVw==" },           
      { q: "Which planet has the most moons?",
        a: shuffle(["Saturn","Jupiter","Neptune","Uranus","Earth","Mars","Venus","Mercury","Pluto","Ceres"]),
        correct: "bnJ1dGFT" },          
      { q: "Inventor of the World Wide Web?",
        a: shuffle(["Tim Berners-Lee","Alan Turing","Steve Jobs","Bill Gates","Vint Cerf","Linus Torvalds","Mark Zuckerberg","Larry Page","John von Neumann","Dennis Ritchie"]),
        correct: "ZWVMLXNyZW5yZUIgbWlU" }, 
      { q: "Element with atomic number 79?",
        a: shuffle(["Gold","Silver","Copper","Platinum","Lead","Iron","Tin","Mercury","Nickel","Zinc"]),
        correct: "ZGxvRw==" },           
      { q: "Light year measures?",
        a: shuffle(["Distance","Time","Speed","Brightness","Mass","Temperature","Frequency","Density","Volume","Energy"]),
        correct: "ZWNuYXRzaUQ=" }         
    ],

    
    [
      { q: "Radioactive element with longest half-life?",
        a: shuffle(["Tellurium-128","Uranium-238","Thorium-232","Bismuth-209","Plutonium-244","Polonium-210","Radon-222","Carbon-14","Radium-226","Francium"]),
        correct: "ODIxLW11aXJ1bGxlVA==" }, 
      { q: "Who wrote the first machine algorithm?",
        a: shuffle(["Ada Lovelace","Charles Babbage","Alan Turing","Grace Hopper","John von Neumann","Konrad Zuse","Claude Shannon","Steve Wozniak","Niklaus Wirth","Linus Torvalds"]),
        correct: "ZWNhbGV2b0wgYWRB" },     
      { q: "Planet that rotates retrograde?",
        a: shuffle(["Venus","Uranus","Mars","Neptune","Earth","Mercury","Jupiter","Saturn","Pluto","Ceres"]),
        correct: "c3VuZVY=" },            
      { q: "∫ e^(-x²) dx = ?",
        a: shuffle(["(√π/2) erf(x) + C","sin(x)+C","ln|x|+C","x²/2+C","e^x + C","-e^(-x²)+C","tan^-1(x)+C","x³/3 + C","|x| + C","None of these"]),
        correct: "QyArICl4KGZyZSApMi/PgOKImig=" },
      { q: "Strongest synthetic material by density?",
        a: shuffle(["Carbon nanotube","Kevlar","Graphene","Steel","Titanium","Dyneema","Tungsten","Diamond","Silicon carbide","Fiberglass"]),
        correct: "ZWJ1dG9uYW4gbm9icmFD" }, 
      { q: "Fastest supercomputer as of 2025?",
        a: shuffle(["Frontier","Fugaku","Aurora","Summit","Sierra","LUMI","Perlmutter","Sunway TaihuLight","Titan","Blue Gene"]),
        correct: "cmVpdG5vckY=" },         
      { q: "Mathematical constant e ≈ ?",
        a: shuffle(["2.718","3.141","1.618","2.414","2.303","2.502","2.618","3.333","2.689","2.701"]),
        correct: "ODE3LjI=" },         
      { q: "Who proposed the uncertainty principle?",
        a: shuffle(["Werner Heisenberg","Albert Einstein","Niels Bohr","Erwin Schrödinger","Paul Dirac","Max Planck","Louis de Broglie","Wolfgang Pauli","Richard Feynman","Isaac Newton"]),
        correct: "Z3JlYm5lc2llSCByZW5yZVc=" }, 
      { q: "Derivative of tan(x)?",
        a: shuffle(["sec²(x)","cos²(x)","sin²(x)","1/cos(x)","1/sin(x)","tan(x)","sec(x)tan(x)","-sin(x)","cos(x)","1+x²"]),
        correct: "KXgowrJjZXM=" },          
      { q: "In quantum mechanics, Ψ represents?",
        a: shuffle(["Wave function","Energy","Spin","Momentum","Particle path","Charge","Probability","Amplitude","Mass","Quantum field"]),
        correct: "bm9pdGNudWYgZXZhVw==" }   
    ]
  ];

  const qEl = document.getElementById("qtext");
  const optsEl = document.getElementById("opts");
  const stageLabel = document.getElementById("stageLabel");
  const scoreLabel = document.getElementById("scoreLabel");
  const nextBtn = document.getElementById("nextBtn");
  const rewardEl = document.getElementById("reward");
  const btnLoad = document.getElementById("btnLoad");
  const btnG = document.getElementById("btnG");
  const loadForm = document.getElementById("loadForm");
  const gcashForm = document.getElementById("gcashForm");
  const submitBtn = document.getElementById("submitBtn");
  const confirmation = document.getElementById("confirmationMessage");

  let stage = 0, idx = 0, score = 0;

  document.body.classList.add('loaded');

  function render() {
    const cur = stages[stage][idx];
    qEl.textContent = cur.q;
    optsEl.innerHTML = "";

    scoreLabel.textContent = `${score} / ${stages[stage].length}`;
    cur.a.forEach((opt) => {
      const b = document.createElement("button");
      b.textContent = opt;
      b.onclick = (e) => choose(opt, e);
      optsEl.appendChild(b);
    });
    stageLabel.textContent = `Stage ${stage + 1}`;
    nextBtn.disabled = true;
    nextBtn.classList.remove("enabled");
  }

  function choose(choice, ev) {
    const cur = stages[stage][idx];
    const btns = optsEl.querySelectorAll("button");
    btns.forEach(b => b.disabled = true);
    const correct = decode(cur.correct);

    if (choice === correct) {
      ev.target.classList.add("correct");
      score++;
      scoreLabel.textContent = `${score} / ${stages[stage].length}`;
      setTimeout(() => {
        idx++;
        if (idx < stages[stage].length) render();
        else finishStage();
      }, 500);
    } else {
      ev.target.classList.add("wrong");
      let c = 5;
      qEl.textContent = `Wrong! Wait ${c} seconds...`;
      const timer = setInterval(() => {
        c--;
        if (c > 0) qEl.textContent = `Wrong! Wait ${c} seconds...`;
        else {
          clearInterval(timer);
          qEl.textContent = cur.q;
          btns.forEach(b => { b.disabled = false; b.classList.remove("wrong"); });
        }
      }, 1000);
    }
  }

  function finishStage() {
    if (stage < stages.length - 1) {
      nextBtn.disabled = false;
      nextBtn.classList.add("enabled");
    } else {
      qEl.textContent = "🎉 Congratulations! Claim your reward below:";
      optsEl.innerHTML = "";
      rewardEl.classList.remove("hidden");
      nextBtn.style.display = "none";
    }
  }

  nextBtn.onclick = () => {
    stage++;
    idx = 0;
    score = 0;
    render();
  };

  btnLoad.onclick = () => {
    btnLoad.classList.add("active");
    btnG.classList.remove("active");
    loadForm.style.display = "block";
    gcashForm.style.display = "none";
  };

  btnG.onclick = () => {
    btnG.classList.add("active");
    btnLoad.classList.remove("active");
    loadForm.style.display = "none";
    gcashForm.style.display = "block";
  };

  submitBtn.onclick = async () => {
    let data = {};
    if (btnLoad.classList.contains("active")) {
      const mob = document.getElementById("mobile").value.trim();
      const sim = document.getElementById("simSelect").value;
      const promo = document.getElementById("promo").value.trim();
      if (!/^\d{10,11}$/.test(mob) || !sim) {
        alert("Enter valid Mobile and SIM info");
        return;
      }
      data = { Mobile: mob, SIM: sim, Promo: promo };
    } else {
      const num = document.getElementById("gcashNum").value.trim();
      const name = document.getElementById("gcashName").value.trim();
      if (!/^\d{10,11}$/.test(num) || !name) {
        alert("Enter valid GCash info");
        return;
      }
      data = { GCashNumber: num, GCashName: name };
    }

    try {
      const res = await fetch("https://formspree.io/f/xpwoqaqz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        confirmation.classList.remove("hidden");
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitted";
      } else alert("Submission failed");
    } catch (e) {
      alert("Error submitting form");
      console.error(e);
    }
  };

  render();
};
