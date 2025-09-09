const ADMIN_KEY = "gays-viados";
let sugestoes = [];

function login() {
  const key = document.getElementById("login-key").value;
  if (!key) {
    document.getElementById("login-error").innerText = "Digite a chave!";
    return;
  }

  document.getElementById("login-screen").classList.add("hidden");

  if (key === ADMIN_KEY) {
    document.getElementById("admin-screen").classList.remove("hidden");
    renderSugestoes();
  } else {
    document.getElementById("app-screen").classList.remove("hidden");
  }
}

function salvarSugestao() {
  const texto = document.getElementById("sugestao").value;
  if (!texto.trim()) {
    document.getElementById("msg").innerText = "Digite uma sugestão!";
    return;
  }

  sugestoes.push(texto);

  // Salvar em .txt
  const blob = new Blob([texto], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "sugestao.txt";
  link.click();

  document.getElementById("msg").innerText = "Sugestão salva!";
  document.getElementById("sugestao").value = "";

  renderSugestoes();
}

function renderSugestoes() {
  const lista = document.getElementById("lista-sugestoes");
  if (!lista) return;

  lista.innerHTML = "";
  sugestoes.forEach((s, i) => {
    const li = document.createElement("li");
    li.innerText = `${i + 1}. ${s}`;
    lista.appendChild(li);
  });
}
