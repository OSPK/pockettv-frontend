from flask import Flask
from flask import redirect, url_for, render_template, flash, request, json,\
    jsonify, Response, escape, abort
app = Flask(__name__)


@app.route("/")
def welcome():
    return render_template('index.html')


@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/ch_home")
def channel_landing():
    return render_template('channel_landing.html')

if __name__ == "__main__":
    app.run(debug=True)
