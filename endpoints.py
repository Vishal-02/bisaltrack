from flask import Flask
from .db import add_new_acc

app = Flask(__name__)

@app.get('/create-account')
def create_account_get():
    # show the page to create a form
    pass

@app.post('/create-account')
def create_account_post(name: str, type: str, balance: int):
    # store data in sqlite
    result = add_new_acc(name, type, balance)

    #return the success page
    if result:
        return {'message': f'account for {name} created', 'status': 'OK'}
    else:
        return {'message': 'something has gone wrong...', 'status': 400}