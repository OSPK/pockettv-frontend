#Front end for Pocket TV
Python [Flask](http://flask.pocoo.org/) used for mock backend. Python Uses [Jinja2](http://jinja.pocoo.org/docs/dev/) for templating.

#To run this:
- You need to have Python, Pip and Virtualenv installed on your machine
- Clone this repo and cd into it
- Create python virtualenv: `virtualenv env`
- Activate virtualenv: `. env/bin/activate`
- Make sure you have python-pip installed and then do: `pip install -r requirements.txt`
- to compile sass: `python setup.py build_sass sdist`
- to run the show `python pocket.py`
- Then navigate to http://localhost:5000

##Everything you need is in `/static` and `/templates`
The templating system used here is Jinja, you can look into that if you want.
However, i will also provide you with plain HTML, CSS and SASS, so no worries if Jinja is not good for you

##SASS
If you want to compile your own Sass just compile `/static/sass/style.scss`. It imports bootstrap and all custom sass.

##Look
Our online testing server: [http://162.243.81.90/](http://162.243.81.90/)
