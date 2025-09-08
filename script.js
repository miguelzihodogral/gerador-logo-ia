function validarChave() {
  const chave = document.getElementById("chave").value;
  if (chave === "gays_viados" || chave === "X9F3-2PLK-7HTW-9QZB") {
    document.getElementById("tela-chave").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Chave inválida!");
  }
}

function gerarLogo() {
  const nicho = document.getElementById("nicho").value;
  const estilo = document.getElementById("estilo").value;

  const logos = [
    "https://via.placeholder.com/400x400?text=Logo+1",
    "https://via.placeholder.com/400x400?text=Logo+2",
    "https://via.placeholder.com/400x400?text=Logo+3"
  ];
  const aleatorio = Math.floor(Math.random() * logos.length);
  document.getElementById("logo").src = logos[aleatorio];

  alert(`Logo gerado para ${nicho}, estilo ${estilo}`);
}

function abrirSugestoes() {
  document.getElementById("overlay").style.display="flex";
}
function fecharSugestoes() {
  document.getElementById("overlay").style.display="none";
}

function salvarSugestao() {
  const texto = document.getElementById("textoSug").value;
  const blob = new Blob([texto], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "sugestao.txt";
  link.click();
}
