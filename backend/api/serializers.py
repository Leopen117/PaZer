from rest_framework import serializers

from .models import Task

# Alle Felder ins JSON übernehmen
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task

        fields = "__all__"

