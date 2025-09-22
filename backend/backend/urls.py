from django.contrib import admin
from django.urls import path, include

# urls.py im Projekt = zentrale URL-Konfiguration.
# Hier werden die einzelnen Apps und das Admin-Interface eingebunden.

urlpatterns = [
    path("admin/", admin.site.urls),        # Admin-Interface von Django
    path("api/", include("api.urls")),      # alle API-Routen aus api/urls.py
]
