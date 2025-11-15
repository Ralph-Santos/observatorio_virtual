const planos = [
  {
    tipo: "Media Salarial",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ],
    image: './img/jg.jpeg'
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
    const img = document.createElement("img");
    const div = document.createElement("div");
    const divFather = document.createElement("div");
    div.classList.add("plano");
    //div.style.background = `url('${plano.image || './img/jg.jpeg'}') center top/cover`;
    divFather.classList.add("plano-father");
    divFather.innerHTML = `
    ${div.innerHTML = `
      <h3>${plano.titulo}</h3>
      <ul>${plano.detalhes.map(item => `<li>${item}</li>`).join("")}</ul>
      ${img.innerHTML = `
        <img src='${plano.image || './img/jg.jpeg'}' alt='Imagem do mapa' style='width:100%; height:auto; border-radius:10px; margin-bottom:10px;' />
        `}`}

      <button onclick="window.location.href='${plano.ref || "#"}'">Visualizar mapa</button>`

    planosContainer.appendChild(divFather);
    divFather.appendChild(div);
  });
}


renderPlanos();
