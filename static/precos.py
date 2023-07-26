import pandas as pd

df_precos = pd.read_excel('arquivos/precos.xlsx')

def preco(aulas, alunos):
    return list(df_precos[str(aulas)])[alunos - 1]