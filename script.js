let suggestions = [];
let accepted = [];
let currentUser = "";

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginError = document.getElementById('loginError');

  if(username === "gays-viados" && password === "123") {
    currentUser = "admin";
    document.getElementById('loginContainer').style.display = "none";
    document.getElementById('adminContainer').style.display = "block";
    renderSuggestions();
  } else {
    currentUser = "user";
    document.getElementById('loginContainer').style.display = "none";
    document.getElementById('appContainer').style.display = "block";
  }
}

function logout() {
  currentUser = "";
  document.getElementById('loginContainer').style.display = "block";
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
