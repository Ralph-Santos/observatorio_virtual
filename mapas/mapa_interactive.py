import pandas as pd # type: ignore
import plotly.express as px # type: ignore
import numpy as np # type: ignore

# 1. CARREGAR OS DADOS
# Certifique-se de que o arquivo '2° Info B - Página1.csv' está na mesma pasta deste script
try:
    df = pd.read_csv('2° Info B - Página1.csv')
    # Limpar espaços em branco nos nomes das colunas
    df.columns = df.columns.str.strip() 
except FileNotFoundError:
    print("Erro: O arquivo '2° Info B - Página1.csv' não foi encontrado.")
    exit()

# 2. FUNÇÕES DE LIMPEZA E PREPARAÇÃO
def padronizar_regiao(nome):
    nome = str(nome).strip().upper()
    if 'BRASIL' in nome: return 'Brasil'
    if 'SUL' in nome and 'NORDESTE' in nome: return 'Sul e Nordeste'
    if 'CENTRO' in nome: return 'Centro-Oeste'
    if 'NORDESTE' in nome: return 'Nordeste'
    if 'NORTE' in nome: return 'Norte'
    if 'SUDESTE' in nome: return 'Sudeste'
    if 'SUL' in nome: return 'Sul'
    return None # Retorna None se não identificar

# Aplica a padronização
df['Região_Clean'] = df['Região'].apply(padronizar_regiao)
# Remove linhas onde a região não foi identificada
df = df.dropna(subset=['Região_Clean'])

# Coordenadas centrais aproximadas para cada região (Lat, Lon)
coords_centro = {
    'Norte':        (-3.1, -60.0),
    'Nordeste':     (-7.0, -39.0),
    'Centro-Oeste': (-15.8, -50.0),
    'Sudeste':      (-20.0, -44.0),
    'Sul':          (-27.0, -52.0),
    'Brasil':       (-14.2, -51.9),
    'Sul e Nordeste': (-15.0, -45.0)
}

# 3. ADICIONAR COORDENADAS COM "JITTER" (RUÍDO)
# Como não temos a cidade exata, adicionamos uma pequena variação aleatória
# para que os pontos formem uma "nuvem" sobre a região.
def gerar_lat(row):
    centro = coords_centro.get(row['Região_Clean'], (0,0))
    return centro[0] + np.random.uniform(-1.5, 1.5)

def gerar_lon(row):
    centro = coords_centro.get(row['Região_Clean'], (0,0))
    return centro[1] + np.random.uniform(-1.5, 1.5)

df['Lat_Simulada'] = df.apply(gerar_lat, axis=1)
df['Lon_Simulada'] = df.apply(gerar_lon, axis=1)

# 4. GERAR UM MAPA POR REGIÃO (O LOOP MÁGICO)
regioes_unicas = df['Região_Clean'].unique()

print(f"Regiões encontradas: {regioes_unicas}\n")

for regiao in regioes_unicas:
    print(f"Processando mapa para: {regiao}...")
    
    # Filtra apenas os dados da região atual
    df_regiao = df[df['Região_Clean'] == regiao]
    
    # Pega o centro para focar o mapa
    lat_centro, lon_centro = coords_centro.get(regiao)
    
    # Cria o mapa
    fig = px.scatter_mapbox(
        df_regiao,
        lat="Lat_Simulada",
        lon="Lon_Simulada",
        color="Tipo de trabalho",  # Cores diferentes para cada tipo de trabalho
        hover_name="Caso/Plataformas", # Título do tooltip
        hover_data={
            "Lat_Simulada": False, 
            "Lon_Simulada": False,
            "Problema da informalidade": True, # Mostra o problema ao passar o mouse
            "Região": True
        },
        zoom=5,
        size_max=15
    )

    # Configurações visuais do mapa
    fig.update_layout(
        mapbox_style="carto-positron", # Estilo do mapa (gratuito, não precisa de token)
        mapbox=dict(
            center={"lat": lat_centro, "lon": lon_centro},
        ),
        title=f"Informalidade: {regiao}",
        margin={"r":0,"t":40,"l":0,"b":0}
    )

    # Salva o arquivo HTML individual
    nome_arquivo = f"mapa_{regiao.lower().replace(' ', '_')}.html"
    fig.write_html(nome_arquivo)
    print(f" -> Arquivo criado: {nome_arquivo}")

print("\nConcluído! Todos os mapas foram gerados na pasta.")