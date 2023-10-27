from flask import Flask, jsonify
import json

app = Flask(__name__)

# Load JSON data from the file
with open('jsondata.json', 'r') as file:
    data = json.load(file)

# Create an API route to serve the data
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
