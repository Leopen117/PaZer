import aiohttp
import json
from quart import Quart, jsonify, request
from quart_cors import cors
import sqlite3

app = Quart(__name__)
app = cors(app, allow_origin='*')

# test sqlite function
@app.route('/api/test', methods=['POST'])
async def function_name():
    # response = await request.json

    create_statement: str = 'CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL UNIQUE);'
    update_statement: str = 'INSERT OR REPLACE INTO test (id) VALUES(1);' # REPLACE avoids error for failing unique constraint

    with sqlite3.connect('main.db') as conn:
        cursor = conn.cursor()
        cursor.execute(create_statement)
        cursor.execute(update_statement)

    return '200'

app.run()
