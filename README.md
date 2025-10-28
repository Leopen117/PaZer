# Backend: Schnellstart

Dieses Dokument beschreibt die wichtigsten Befehle, um das Django-Backend lokal zu starten, Migrationen anzuwenden und einen Admin-Benutzer anzulegen.

## Voraussetzungen
- Python installiert (z.\ B.\ 3.8+)
- `pip` verfügbar
- Optional: Virtual Environment empfohlen

## Installation
1. Optional: virtuelles Environment erstellen und aktivieren
   \`\`\`bash
   python -m venv .venv
   .venv\Scripts\activate
   \`\`\`

2. Abhängigkeiten installieren
   \`\`\`bash
   pip install -r `requirements.txt`
   \`\`\`

## Migrationen & Datenbank
1. Migrationen für Model-Änderungen erzeugen
   \`\`\`bash
   python `manage.py` makemigrations
   \`\`\`

2. Migrationen anwenden (erstellt/aktualisiert Datenbanktabellen)
   \`\`\`bash
   python `manage.py` migrate
   \`\`\`

> Tipp: Bei Problemen mit der Datenbankverbindung prüfen Sie Ihre Datenbank-Einstellungen in `settings.py` oder Umgebungsvariablen.

## Admin-Benutzer anlegen
\`\`\`bash
python `manage.py` createsuperuser
\`\`\`
Folgen Sie den Eingabeaufforderungen, um Benutzername und Passwort zu setzen.

## Entwicklungsserver starten
\`\`\`bash
python `manage.py` runserver 0.0.0.0:8000
\`\`\`
Der Server ist dann unter `http://localhost:8000` bzw.\ `http://<IP>:8000` erreichbar.

## Kurze Reihenfolge (kompakt)
\`\`\`bash
# Starten der virtuellen Umgebung
python -m venv .venv
.venv\Scripts\activate

# Abhängigkeiten installieren
pip install -r `requirements.txt`

# Migrationen + Superuser + Start
python `manage.py` makemigrations
python `manage.py` migrate
python `manage.py` createsuperuser
python `manage.py` runserver 0.0.0.0:8000
\`\`\`

## Hinweise
- Änderungen an Models erfordern erneutes Ausführen von `makemigrations` und `migrate`.
- Für Produktion einen geeigneten WSGI/ASGI-Server und sichere Einstellungen verwenden.

---
# Frontend: Schnellstart

Um das Frontend zu starten muss man folgende Schritte ausführen:

## Installation von Abhängigkeiten

Im Orner frontend befindent gibt man folgende Befehle ein 
```
npm install
npm run dev
```
Danach läuft das Frontend auf dem localhost /3000 laufen.
