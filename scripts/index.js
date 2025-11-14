const planos = [
  {
    tipo: "Media Salarial",
    id: "mapa1",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ]
  },
   {
    tipo: "Media Salarial",
    id: "mapa1",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ]
  },
   {
    tipo: "Media Salarial",
    id: "mapa1",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ]
  },
   {
    tipo: "Media Salarial",
    id: "mapa1",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ]
  },
   {
    tipo: "Media Salarial",
    id: "mapa1",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ]
  },
];

const planosContainer = document.getElementById("planos");

function renderPlanos() {
  planosContainer.innerHTML = "";

  planos.forEach(plano => {
    const div = document.createElement("div");
    div.classList.add("plano");
    div.innerHTML = `
      <h3>${plano.titulo}</h3>
      <ul>${plano.detalhes.map(item => `<li>${item}</li>`).join("")}</ul>
      <button onclick="window.location.href='${plano.ref || "#"}'">Visualizar mapa</button>
    `;
    planosContainer.appendChild(div);
  });
}


renderPlanos();
