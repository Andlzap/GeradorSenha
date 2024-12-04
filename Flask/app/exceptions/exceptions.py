class BearerTokenNotProvided(Exception):
    pass

class InvalidToken(Exception):
    pass

class InvalidJsonRequest(Exception):
    pass

class FileNotFound(Exception):
    pass

class ProcessingError(Exception):
    pass

class EmailNotFoundInBreach(Exception):
    pass

class AccessTokenInvalid(Exception):
    pass

class EmailInvalid(Exception):
    pass

class AccessDenied(Exception):
    pass