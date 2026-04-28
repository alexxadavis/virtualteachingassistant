from flask import Blueprint
from db import get_db

debug_bp = Blueprint("debug", __name__)

@debug_bp.route("/db-test")
def db_test():
    try:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("SELECT version();")
        version = cur.fetchone()
        cur.close()
        conn.close()

        return {"database": version[0]}
    except Exception as e:
        return {"error": str(e)}