from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# urls.py in der App = verbindet Views mit URLs.
# Router = generiert automatisch Endpunkte für das ViewSet.

router = DefaultRouter()
router.register(r"runs", TaskViewSet, basename="runningunit")

urlpatterns = [
    # Hängt alle vom Router generierten URLs ein
    # -> /api/runs/ (Liste, POST)
    # -> /api/runs/{id}/ (Detail, PUT, PATCH, DELETE)
    path("", include(router.urls)),
]
