from flask import request, jsonify
from app.services.security_service import SecurityService
from app.exceptions.exceptions import (
    BearerTokenNotProvided,
    InvalidToken,
    InvalidJsonRequest,
    ProcessingError,
)


def gerador_senha_controller() -> jsonify:
    try:

        if not request.is_json:
            raise InvalidJsonRequest("A requisição deve conter dados JSON")

        data = request.json

        response = SecurityService.gerador_senha(data)

        return jsonify(response), 200

    except BearerTokenNotProvided as e:
        return jsonify({"error": str(e)}), 401
    except InvalidToken as e:
        return jsonify({"error": str(e)}), 401
    except InvalidJsonRequest as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        raise ProcessingError("Erro ao processar a requisição") from e
