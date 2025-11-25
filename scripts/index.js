const planos = [
  {
    tipo: "Região Norte",
    id: "mapa-norte",
    titulo: "Informalidade no Norte",
    
    ref: "mapas/mapa_norte.html", 
    // Imagem: Cerâmica/Cultura Indígena ou Amazônia
    imagem: "https://s2.static.brasilescola.uol.com.br/be/2023/08/cultura-norte-ceramica-marajoara.jpg", 
    detalhes: [
      "Taxas acima de 50%",
      "Baixa contribuição previdenciária",
      "Trabalho por 'bicos'"
    ]
  },
  {
    tipo: "Região Nordeste",
    id: "mapa-nordeste",
    titulo: "Informalidade no Nordeste",
    ref: "mapas/mapa_genero.html",
    // Imagem: Cultura/Pelourinho ou Sertão
    imagem: "https://brazilchannel.com.br/wp-content/uploads/2023/10/A-diversidade-cultural-dos-estados-do-Nordeste.jpg",
    detalhes: [
      "Empreendedorismo de necessidade",
      "Uberização e Desemprego",
      "Impacto nas periferias"
    ]
  },
  {
    tipo: "Região Centro-Oeste",
    id: "mapa-centro-oeste",
    titulo: "Informalidade no Centro-Oeste",
    ref: "mapas/mapa_centro-oeste.html",
    // Imagem: Pantanal ou Brasília
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Congresso_Nacional_-_Bras%C3%ADlia_-_Distrito_Federal_-_Brasil_02.jpg/800px-Congresso_Nacional_-_Bras%C3%ADlia_-_Distrito_Federal_-_Brasil_02.jpg",
    detalhes: [
      "Setor de Construção Civil",
      "Gig Economy",
      "Falta de vínculos"
    ]
  },
  {
    tipo: "Região Sudeste",
    id: "mapa-sudeste",
    titulo: "Informalidade no Sudeste",
    ref: "mapas/mapa_sudeste.html",
    // Imagem: São Paulo/Rio Urbana
    imagem: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=1000&auto=format&fit=crop",
    detalhes: [
      "Motoristas de App e Entregadores",
      "Consciência da precarização",
      "Alta densidade urbana"
    ]
  },
  {
    tipo: "Região Sul",
    id: "mapa-sul",
    titulo: "Informalidade no Sul",
    ref: "mapas/mapa_sul.html",
    // Imagem: Araucárias ou Paisagem Sulista
    imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/gramado-capa2019-01.jpg",
    detalhes: [
      "Exclusão de direitos sociais",
      "Desigualdades de gênero",
      "Estratégias de sobrevivência"
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