from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
 
@app.route("/")
@cross_origin()
def hello():
    msg = request.args.get("message")
    return jsonify({"message":msg})
 
if __name__ == "__main__":
    app.run()

