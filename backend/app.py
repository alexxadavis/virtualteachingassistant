from flask import Flask
from flask_cors import CORS
from routes.debug import debug_bp
from routes.documents import documents_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(documents_bp, url_prefix="/api/documents")
app.register_blueprint(debug_bp, url_prefix="/api")

@app.route("/api/hello")
def hello():
    return {"message": "Hello from backend!"}

if __name__ == "__main__":
    app.run(debug=True)