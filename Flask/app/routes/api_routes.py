from app import app
from app.controllers.securityControllers import gerador_senha

# Security routes
@app.route("/api/gerador_senha", methods=["POST"])
def gerador_senha_route():
    return gerador_senha.gerador_senha_controller()
