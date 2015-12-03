#Front end for Pocket TV
Instructions coming soon

#To run this:
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

##Look
Our online testing server: [http://162.243.81.90/](http://162.243.81.90/)
