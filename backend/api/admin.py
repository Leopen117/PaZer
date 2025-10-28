from django.contrib import admin
from .models import RunningUnit

# admin.py = hier registrierst du deine Modelle, damit sie im Django-Admin erscheinen.
# Damit kannst du im Browser Einträge ansehen, hinzufügen und ändern.

@admin.register(RunningUnit)
class RunningUnitAdmin(admin.ModelAdmin):
    # Felder, die im Admin-Panel angezeigt werden
    # list_display = ("id", "date", "route_name", "kilometers", "pace", "time")
    list_display = ("id", "date", "route_name", "kilometers", "pace")

    # Suche im Admin nach Streckennamen
    search_fields = ("route_name",)
