from rest_framework import serializers
from .models import RunningUnit

# serializers.py = Übersetzt Daten zwischen Python-Objekten (Modellen) und JSON.
# Ohne Serializer könnte Django REST Framework die Daten nicht als JSON ausgeben
# oder von JSON zurück in ein Python-Objekt umwandeln.

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = RunningUnit   # Welches Model soll übersetzt werden
        fields = "__all__"    # Welche Felder -> alle Felder des Modells
