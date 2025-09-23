"""
Django settings for backend project.
"""

from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

# Geheimschlüssel der Django-Anwendung
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "dev-only-secret-key")

# Debugmodus: True für Entwicklung, False für Produktion
DEBUG = os.getenv("DJANGO_DEBUG", "1") == "1"

# Erlaubte Hosts, von denen Anfragen akzeptiert werden
ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

# Installierte Anwendungen
INSTALLED_APPS = [
    "django.contrib.admin",          # Admin-Oberfläche
    "django.contrib.auth",           # Benutzer und Authentifizierung
    "django.contrib.contenttypes",   # Content-Typen für Models
    "django.contrib.sessions",       # Sitzungen
    "django.contrib.messages",       # Meldungen für Nutzer
    "django.contrib.staticfiles",    # Statische Dateien (CSS, JS)
    "corsheaders",                   # Cross-Origin Resource Sharing
    "rest_framework",                # Django REST Framework
    "api",                           # Eigene App für die API
]

# Middleware-Kette, die Anfragen und Antworten durchläuft
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",            # CORS-Handling
    "django.middleware.security.SecurityMiddleware",       # Sicherheitsfunktionen
    "django.contrib.sessions.middleware.SessionMiddleware",# Sitzungsverwaltung
    "django.middleware.common.CommonMiddleware",           # Basisfunktionen für Requests
    "django.middleware.csrf.CsrfViewMiddleware",           # Schutz vor CSRF-Angriffen
    "django.contrib.auth.middleware.AuthenticationMiddleware", # Authentifizierung
    "django.contrib.messages.middleware.MessageMiddleware",    # Nutzer-Meldungen
    "django.middleware.clickjacking.XFrameOptionsMiddleware",  # Schutz vor Clickjacking
]

# Zentrale URL-Konfiguration des Projekts
ROOT_URLCONF = "backend.urls"

# Template-Konfiguration
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],         # Zusätzliche Template-Verzeichnisse
        "APP_DIRS": True,   # Templates aus installierten Apps laden
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",   # Request im Template verfügbar
                "django.contrib.auth.context_processors.auth",  # Benutzer-Infos im Template
                "django.contrib.messages.context_processors.messages", # Nachrichten im Template
            ],
        },
    },
]

# WSGI-Einstiegspunkt
WSGI_APPLICATION = "backend.wsgi.application"

# Datenbankkonfiguration (SQLite)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3", # Datenbank-Engine
        "NAME": BASE_DIR / "db.sqlite3",        # Speicherort der Datenbankdatei
    }
}

# Passwortvalidierungen für Benutzer
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# Sprache und Zeitzone
LANGUAGE_CODE = "de-de"         # Sprache der Anwendung
TIME_ZONE = "Europe/Berlin"     # Zeitzone
USE_I18N = True                 # Internationalisierung
USE_TZ = True                   # Zeitzonenunterstützung

# Statische Dateien (CSS, JavaScript, Bilder)
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

# Standard-Typ für Primärschlüssel
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Grundeinstellungen für Django REST Framework
REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": None, #rest_framework.pagination.PageNumberPagination",  Standard-Pagination
    "PAGE_SIZE": 20,  # Anzahl Objekte pro Seite
    "DEFAULT_FILTER_BACKENDS": [
        "rest_framework.filters.SearchFilter",   # Such-Filter
        "rest_framework.filters.OrderingFilter", # Sortier-Filter
    ],
}

# Erlaubte Ursprünge für Cross-Origin-Anfragen (z. B. von React-Frontend)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:5173",
]

# Vertrauenswürdige Ursprünge für CSRF-geschützte Anfragen
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
