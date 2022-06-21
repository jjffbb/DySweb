import json
from flask import Flask, render_template, url_for, request, jsonify
 
app = Flask(__name__)

import productos 

@app.route('/')
def index():
    return render_template('form.html')
 
@app.route('/process', methods=['POST'])
def process():
 
    email = request.form['email']
    name = request.form['name']
     
    if name and email:
        newName = name
 
        return jsonify({'name' : newName})
 
    return jsonify({'error' : 'Missing data!'})
@app.route('/inicio')
def getinicio():
    return jsonify({"contenido": "DysMaster"})
@app.route('/productos')  
def getproductos():
    return jsonify(productos)   
     
if __name__ == '__main__':
    app.run(debug=True)