python -m venv .venv
.venv\Scripts\activate

# Abhängigkeiten
pip install -r `requirements.txt`

# Migrationen + Superuser + Start
python `manage.py` makemigrations
python `manage.py` migrate
python `manage.py` createsuperuser
python `manage.py` runserver 0.0.0.0:8000
\`\`\`

## Hinweise
- Änderungen an Models erfordern erneutes Ausführen von `makemigrations` und `migrate`.
- F