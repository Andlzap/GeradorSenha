import random

MAIUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
MINUSCULAS = "abcdefghijklmnopqrstuvwxyz"
DIGITOS = "0123456789"
CARACTERES_ESPECIAIS = "!@#$%¨&*()_+`'{~^}]´;:.<>"

def gerador_senha(data) -> dict:
    caracteres_permitidos = ""
    senha = ""
    tamanho = random.choice(range(int(data['tamanho_minimo']), int(data['tamanho_maximo']) + 1))

    if data['maiusculas']:
        caracteres_permitidos += MAIUSCULAS
    
    if data['minusculas']:
        caracteres_permitidos += MINUSCULAS

    if data['digitos']:
        caracteres_permitidos += DIGITOS
    
    if data['caracteres_especiais']:
        caracteres_permitidos += CARACTERES_ESPECIAIS

    if not caracteres_permitidos:
        return {"error": "Pelo menos um tipo de caractere deve ser selecionado"}

    for _ in range(tamanho):
        senha += random.choice(caracteres_permitidos)
        
    response = {
        "message": senha,
    }
    return response

