from flask import Flask
from flask import redirect, url_for, render_template, flash, request, json,\
    jsonify, Response, escape, abort
from random import random

app = Flask(__name__)

app.jinja_env.globals.update(random=random)

@app.route("/")
def welcome():
    return render_template('index.html')


@app.route("/sink")
def sink():
    return render_template('kitchensink.html')


@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/ch_home")
def channel_landing():
    return render_template('channel_landing.html')


@app.route("/vod_cat_landing")
def vod_cat_landing():
    return render_template('vod_cat_landing.html')


@app.route("/tv_guide")
def tv_guide():
    return render_template('tv_guide.html')


@app.route("/channel_program_listing")
def channel_program_listing():
    return render_template('channel_program_listing.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
