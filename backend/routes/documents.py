import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename

from db import get_db
from services.file_parser import extract_text_from_pdf

documents_bp = Blueprint("documents", __name__)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@documents_bp.route("/upload", methods=["GET", "POST"])
def upload_document():
    try:
        file = request.files["file"]
        title = request.form.get("title", "Untitled")

        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)

        file.save(file_path)

        text = extract_text_from_pdf(file_path)

        conn = get_db()
        cur = conn.cursor()

        cur.execute("""
            INSERT INTO documents (user_id, title, original_filename, extracted_text)
            VALUES (%s, %s, %s, %s)
            RETURNING id;
        """, (1, title, filename, text))

        doc_id = cur.fetchone()[0]

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({
            "message": "Upload successful",
            "document_id": doc_id
        })

    except Exception as e:
        return jsonify({"error": str(e)})