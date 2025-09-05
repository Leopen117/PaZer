from rest_framework import serializers

from .models import RunningUnit

# Alle Felder ins JSON übernehmen
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = RunningUnit

        fields = "__all__"

