import sqlite3

con = sqlite3.connect("bisal.db")
cur = con.cursor()

def add_new_acc(name, type, bal):
    #add to db
    add_statement = "INSERT INTO accounts VALUES (?, ?, ?)"
    cur.execute(add_statement, (name, type, bal))

    # confirm that it's there
    find_statement = "SELECT * FROM accounts WHERE acc_name=? AND acc_type=?"
    result = cur.execute(find_statement, (name, type)).fetchall()

    cur.close()
    con.close()

    if len(result) == 1:
        return True
    return False
