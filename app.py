from flask import Flask, request, session, g, redirect, url_for, render_template, flash
from flask.ext.PyMongo import PyMongo
app = Flask(__name__)
mongo = PyMongo(app)

@app.route('/')
def Home():
	return "hello"

if __name__=="__main__":
	app.run(DEBUG=True)

