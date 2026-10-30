const btnTema = document.getElementById("btnTema");
const html = document.documentElement;

function aplicarTema(tema) {
  html.setAttribute("data-bs-theme", tema);
  if (btnTema) {
    btnTema.textContent = tema === "dark" ? "Modo claro" : "Modo escuro";
  }
  localStorage.setItem("temaLandingPage", tema);
}

if (btnTema) {
  const temaSalvo = localStorage.getItem("temaLandingPage");
  if (temaSalvo === "dark" || temaSalvo === "light") {
    aplicarTema(temaSalvo);
  }

  btnTema.addEventListener("click", () => {
    const temaAtual = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    aplicarTema(temaAtual);
  });
}

function atualizarContagem() {
  const campo = document.getElementById("contagem");
  if (!campo) return;

  const alvo = new Date("2026-11-22T18:30:00");
  const diff = alvo - new Date();

  if (diff <= 0) {
    campo.textContent = "Chegou o grande dia!";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  campo.textContent = `${dias}d ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

const form = document.getElementById("formContato");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const nome = document.getElementById("nome").value.trim() || "visitante";
    const areaAlerta = document.getElementById("areaAlerta");

    areaAlerta.innerHTML = `
      <div class="alert alert-success mt-3" role="alert">
        Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.
      </div>
    `;

    form.reset();
    form.classList.remove("was-validated");
  });
}
