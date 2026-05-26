const tools = [
  {name:"ChatGPT",url:"https://chatgpt.com",cat:"coding"},
  {name:"Claude",url:"https://claude.ai",cat:"coding"},
  {name:"Gemini",url:"https://gemini.google.com",cat:"coding"},
  {name:"Copilot",url:"https://github.com/features/copilot",cat:"coding"},

  {name:"Perplexity",url:"https://perplexity.ai",cat:"search"},
  {name:"You.com",url:"https://you.com",cat:"search"},

  {name:"Notion AI",url:"https://www.notion.so/product/ai",cat:"writing"},
  {name:"Grammarly",url:"https://grammarly.com",cat:"writing"},

  {name:"Khan Academy",url:"https://khanacademy.org",cat:"study"},
  {name:"Quizlet",url:"https://quizlet.com",cat:"study"}
];

const chat = document.getElementById("chat");
const toolsBox = document.getElementById("tools");

// 🧠 AI Brain
function brain(input){

  input = input.toLowerCase();

  if(input.includes("app") || input.includes("build") || input.includes("code")){
    return {
      msg:"You want to build something. Best AI tools for you:",
      cat:"coding"
    };
  }

  if(input.includes("write") || input.includes("article")){
    return {
      msg:"You need writing tools. Best options:",
      cat:"writing"
    };
  }

  if(input.includes("search")){
    return {
      msg:"Best AI search tools:",
      cat:"search"
    };
  }

  if(input.includes("study") || input.includes("learn")){
    return {
      msg:"Best learning tools:",
      cat:"study"
    };
  }

  return {
    msg:"I recommend exploring coding or writing tools.",
    cat:"all"
  };
}

// 🧾 render tools
function render(cat="all"){
  toolsBox.innerHTML="";

  tools.filter(t => cat==="all" || t.cat===cat)
  .forEach(t=>{
    toolsBox.innerHTML += `
      <div class="card">
        <h3>${t.name}</h3>
        <a href="${t.url}" target="_blank">Open</a>
      </div>
    `;
  });
}

// 💬 send message
function send(){
  const input = document.getElementById("input");
  const text = input.value;

  if(!text) return;

  chat.innerHTML += `<p><b>You:</b> ${text}</p>`;

  const res = brain(text);

  chat.innerHTML += `<p><b>Nexora AI:</b> ${res.msg}</p>`;

  render(res.cat);

  input.value="";
}

render();
