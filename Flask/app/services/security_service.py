from app.tools.securityTool.gerador_senha import gerador_senha

class SecurityService:
    @staticmethod
    def gerador_senha(data) -> dict:
        return gerador_senha(data)