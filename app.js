document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btnModo");
  const corpo = document.body;

  if (localStorage.getItem("modo") === "escuro") {
    corpo.classList.add("modo-escuro");
  }

  botao.addEventListener("click", () => {
    corpo.classList.toggle("modo-escuro");
    const modoAtual = corpo.classList.contains("modo-escuro") ? "escuro" : "claro";
    localStorage.setItem("modo", modoAtual);
  });

  const form = document.getElementById("formCadastro");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cadastro enviado com sucesso!");
      form.reset();
    });
  }
});
const btnAcessibilidade = document.getElementById("btnAcessibilidade");

btnAcessibilidade.addEventListener("click", () => {
  alert("Em breve: configurações de acessibilidade (tamanho de fonte, contraste e leitura de texto).");
});