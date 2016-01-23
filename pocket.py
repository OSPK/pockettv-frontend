from flask import Flask
from flask import redirect, url_for, render_template, flash, request, json,\
    jsonify, Response, escape, abort
from random import random
from gevent.wsgi import WSGIServer

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


@app.route("/channels")
def channels():
    return render_template('channels.html')


@app.route("/event")
def event():
    return render_template('event.html')


@app.route("/vod_cat_landing")
def vod_cat_landing():
    return render_template('vod_cat_landing.html')

@app.route("/vod_landing")
def vod_landing():
    return render_template('vod_landing.html')

@app.route("/tv_guide")
def tv_guide():
    return render_template('tv_guide.html')


@app.route("/channel_program_listing")
def channel_program_listing():
    return render_template('channel_program_listing.html')


@app.route("/subscribe_plans")
def subscribe_plans():
    return render_template('subscribe_plans.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

# http_server = WSGIServer(('', 80), app)
# http_server.serve_forever()