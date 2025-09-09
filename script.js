let suggestions = [];
let accepted = [];
let currentUser = "";

function activate() {
  const code = document.getElementById('activationCode').value;
  const error = document.getElementById('activationError');

  if(code === "gays-viados") {
    currentUser = "admin";
    document.getElementById('activationContainer').style.display = "none";
    document.getElementById('adminContainer').style.display = "block";
    renderSuggestions();
  } else if(code === "cliente") {
    currentUser = "user";
    document.getElementById('activationContainer').style.display = "none";
    document.getElementById('appContainer').style.display = "block";
  } else {
    error.textContent = "Código inválido!";
  }
}

function logout() {
  currentUser = "";
  document.getElementById('activationContainer').style.display = "block";
  document.getElementById('appContainer').style.display = "none";
  document.getElementById('adminContainer').style.display = "none";
}

function generateLogo() {
  const brand = document.getElementById('brandName').value;
  const niche = document.getElementById('niche').value;
  const style = document.getElementById('style').value;

  const preview = document.getElementById('logoPreview');
  preview.innerHTML = `<h3>${brand}</h3><p>${niche} | ${style}</p>`;
}

function openSuggestionBox() {
  document.getElementById('suggestionBox').style.display = "block";
}

function closeSuggestionBox() {
  document.getElementById('suggestionBox').style.display = "none";
}

function sendSuggestion() {
  const text = document.getElementById('suggestionText').value;
  if(text.trim() !== "") {
    suggestions.push(text);
    alert("Sugestão enviada!");
    document.getElementById('suggestionText').value = "";
    closeSuggestionBox();
    renderSuggestions();
  }
}

function renderSuggestions() {
  if(currentUser === "admin") {
    const list = document.getElementById('suggestionsList');
    list.innerHTML = "";
    suggestions.forEach((sug, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${sug} <div><button onclick="acceptSuggestion(${index})">Aceitar</button> <button onclick="rejectSuggestion(${index})">Recusar</button></div>`;
      list.appendChild(li);
    });

    const acceptedList = document.getElementById('acceptedList');
    acceptedList.innerHTML = "";
    accepted.forEach(acc => {
      const li = document.createElement('li');
      li.textContent = acc;
      acceptedList.appendChild(li);
    });
  }
}

function acceptSuggestion(index) {
  accepted.push(suggestions[index]);
  suggestions.splice(index, 1);
  renderSuggestions();
}

function rejectSuggestion(index) {
  suggestions.splice(index, 1);
  renderSuggestions();
}
