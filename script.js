function gerarLogo() {
  const key = prompt("Digite sua chave de ativação:");
  if(!(key === "gays_viados" || key === "X9F3-2PLK-7HTW-9QZB")) {
    alert("Chave inválida!");
    return;
  }

  const nicho = document.getElementById("nicho").value;
  const estilo = document.getElementById("estilo").value;
  const sele = document.getElementById("sele").value;

  // Simulação: usa imagens pré-carregadas
  const logos = [
    "https://via.placeholder.com/400x400?text=Logo+1",
    "https://via.placeholder.com/400x400?text=Logo+2",
    "https://via.placeholder.com/400x400?text=Logo+3"
  ];
  const aleatorio = Math.floor(Math.random() * logos.length);
  document.getElementById("logo").src = logos[aleatorio];

  alert(`Logo gerado para ${nicho}, estilo ${estilo}, com ${sele}`);
}

function abrirSugestoes() {
  document.getElementById("overlay").style.display="flex";
}
function fecharSugestoes() {
  document.getElementById("overlay").style.display="none";
}
