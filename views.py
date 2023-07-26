from flask import render_template
from main import app
from precos import preco


@app.route('/')
def index():
    return render_template('index.html', preco=preco)

@app.route('/contato')
def contato():
    return render_template('contato.html')