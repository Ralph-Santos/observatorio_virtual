const planos = [
  {
    tipo: "Informalidade  na reigão Norte",
    id: "mapa1",
    titulo: "Informalidade  na reigão Norte",
    ref: "mapas/mapa_capitais.html",
    // Adicionamos a propriedade imagem
    imagem: "https://s2.static.brasilescola.uol.com.br/be/2023/08/cultura-norte-ceramica-marajoara.jpg", 
    detalhes: [
      "Visualização interativa",
      "Dados por capital"
    ]
  },
  {
    tipo: "Informalidade  na reigão Nordeste",
    id: "mapa2",
    titulo: "Informalidade no Nordeste",
    ref: "mapas/mapa_nordeste.html",
    // Imagem contextual do nordeste (exemplo)
    imagem: "https://brazilchannel.com.br/wp-content/uploads/2023/10/A-diversidade-cultural-dos-estados-do-Nordeste.jpg",
    detalhes: [
      "Foco regional",
      "Setores de serviço"
    ]
  }
];

const planosContainer = document.getElementById("planos");

function renderPlanos() {
  planosContainer.innerHTML = "";

  planos.forEach(plano => {
    const div = document.createElement("div");
    div.classList.add("plano");
    
    // AQUI ESTÁ A MÁGICA:
    // Aplicamos a imagem + um filtro escuro para o texto aparecer
    div.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${plano.imagem}')`;
    
    div.innerHTML = `
      <div class="conteudo-card">
        <h3>${plano.titulo}</h3>
        <ul>${plano.detalhes.map(item => `<li>${item}</li>`).join("")}</ul>
        <button onclick="window.location.href='${plano.ref || "#"}'">Visualizar mapa</button>
      </div>
    `;
    planosContainer.appendChild(div);
  });
}

renderPlanos();