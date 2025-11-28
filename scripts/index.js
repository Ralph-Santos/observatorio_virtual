const planos = [
  {
    tipo: "Mapa do trabalho informal no Brasil",
    id: "mapa-desigualdade",
    titulo: "Mapa do trabalho informal no Brasil",
    
    ref: "mapas/mapa_desigualdade_mulher_negra.html", 
    // Imagem: Cerâmica/Cultura Indígena ou Amazônia
    imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/bd10d1222c3257233347b7ec760048ea.jpg", 
    detalhes: [
      "Trabalho informal no Brasil",
      "Desigualdade social e econômica",
      "Mulheres negras"
    ]
  },
  {
    tipo: "Desigualdade de gênero",
    id: "mapa-genero",
    titulo: "Desigualdade de gênero no Brasil",
    ref: "mapas/mapa_genero.html",
    // Imagem: Cultura/Pelourinho ou Sertão
    imagem: "https://hojesaopaulo.com.br/imagem/0/5823/o-quadro-quot-os-operarios-quot-de-tarsila-do-amaral-mostra-a-diversidade-do-povo-brasileiro.jpg",
    detalhes: [
      "Desigualdade salarial",
      "Média de pessoas em trabalho informal",
      "Homens e Mulheres"
    ]
  },
  {
    tipo: "Desigualdade racial",
    id: "mapa-racial",
    titulo: "Desigualdade racial no Brasil",
    ref: "mapas/mapa_raca.html",
    // Imagem: Pantanal ou Brasília
    imagem: "https://i0.wp.com/www.sabra.org.br/site/wp-content/uploads/2023/05/a-historia-da-cultura-brasileira-20171229162457.jpg-jpg.webp?w=612&ssl=1",
    detalhes: [
      "Desigualdade salarial",
      "Média de pessoas em trabalho informal",
      "Taxa de pessoas na informalidade por raça"
    ]
  }
];

const planosContainer = document.getElementById("planos");

function renderPlanos() {
  planosContainer.innerHTML = "";

  planos.forEach(plano => {
    const div = document.createElement("div");
    div.classList.add("plano");
    
    // Aplica a imagem + filtro escuro
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