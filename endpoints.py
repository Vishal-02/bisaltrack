from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def hello():
    return "<h2>Hi</h2>"

@app.get('/create-account/')
def create_account_get():
    # show the page to create a form
    return "<h2>Create account page</h2>"

@app.post('/create-account/')
def create_account_post():
    # store data in sqlite
    name = request.form['name']
    acc_type = request.form['type']
    bal = request.form['bal']
    
    con = sqlite3.connect("bisal.db")
    cur = con.cursor()
    add_statement = "INSERT INTO accounts VALUES (?, ?, ?)"
    cur.execute(add_statement, (name, acc_type, bal))
    con.commit()

    # confirm that it's there
    find_statement = "SELECT * FROM accounts WHERE acc_name=? AND acc_type=?"
    result = cur.execute(find_statement, (name, acc_type)).fetchall()
    
    cur.close()
    con.close()

    # return the success page
    if len(result) == 1:
        return {'message': f'account for {name} created', 'status': 'OK'}
    else:
        return {'message': 'something has gone wrong...', 'status': 400}