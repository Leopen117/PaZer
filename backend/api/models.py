from django.db import models

# models.py = definiert die Datenbank-Struktur (Tabellen und Felder).
# Jedes Model entspricht einer Tabelle in der Datenbank.
# Jede Instanz = eine Zeile, jedes Attribut = eine Spalte.

class RunningUnit(models.Model):
    # Automatisches Datum beim Erstellen
    date = models.DateField(auto_now_add=True)

    # Name der Laufstrecke
    route_name = models.CharField(max_length=100)

    # Länge der Strecke in Kilometern
    kilometers = models.FloatField()

    # Zeitpunkt der Erstellung (Datum + Uhrzeit)
    time = models.DateTimeField(auto_now_add=True)

    # Geschwindigkeit in Minuten pro Kilometer
    pace = models.FloatField()

    # So wird das Objekt als Text dargestellt (z. B. im Admin)
    def __str__(self):
        return f"{self.route_name} - {self.kilometers} km in {self.pace:.2f} min/km"
