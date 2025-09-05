from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import RunningUnit

from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = RunningUnit.objects.all()  # welche Daten aus DB geholt werden

    serializer_class = TaskSerializer  # wie sie in JSON umgewandelt werden

