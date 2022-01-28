from flask import Flask, render_template, request, url_for, send_file


app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world():
    url_for('static', filename='style.css')
    return render_template('startpage.html', name="bruh")


@app.route('/todo', methods=['GET', 'POST'])
def get_todo():
    if request.method == 'GET':
        return send_file('./todo.txt', attachment_filename='todo.txt')
    elif request.method == 'POST':
        f = open('todo.txt', 'w')
        f.write(request.get_data().decode('utf-8'))
        f.close()
        return "file updated"


if __name__ == '__main__':
    app.run()
