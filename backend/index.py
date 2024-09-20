
from flask import Flask, jsonify, request, make_response
from flask_bcrypt import Bcrypt
from models import db, User
from config import ApplicationConfig
from flask_login import LoginManager, login_required, logout_user, login_user, current_user
from flask_cors import CORS 


app = Flask(__name__)
CORS(app)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

def load_user(user_id):
    return User.query.get(int(user_id))

with app.app_context():
    db.create_all()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    #print(f"Email: {email}, Password: {password}") 
    
    user = User.query.filter_by(user_email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        """ token = "jsdbsv"
        response = make_response(jsonify({"success": True, "message": "Login successful"}))
        response.set_cookie("authToken", token, httponly=True)
        return response """
        return jsonify({"success": True, "message": "Login successful"})
    
    return jsonify({"success": False, "message": "Invalid credentials"})

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    if User.query.filter_by(user_email=email).first():
        return jsonify({"success": False, "message": "Username already exists"})
    
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(user_email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"success": True, "message": "User registered successfully"})

@app.route("/dashboard", methods=['GET'])
@login_required
def dashboard():
    return jsonify({"message": "Welcome to the dashboard!"})

@app.route("/logout", methods=["POST"])
def logout():
    logout_user()
    return jsonify({"success": True, "message": "Logged out successfully"})

if __name__ == "__main__":
    app.run(debug=True)