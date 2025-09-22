from rest_framework import viewsets
from .models import RunningUnit
from .serializers import TaskSerializer

# views.py = enthält die Logik für die API-Endpunkte.
# ViewSets liefern automatisch CRUD-Operationen (Create, Read, Update, Delete).
# Django REST Framework nimmt uns hier sehr viel Arbeit ab.

class TaskViewSet(viewsets.ModelViewSet):
    # Welche Daten aus der Datenbank geholt werden
    queryset = RunningUnit.objects.all()

    # Wie die Daten in JSON übersetzt werden
    serializer_class = TaskSerializer
