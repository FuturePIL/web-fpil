def index():
    with open('./templates/index.html') as f:
        return f.read()

def center():
    with open('./templates/center.html') as f:
        return f.read()

def application(env, start_response):
    start_response('200 OK', [('Content-Type', 'text/html;charset=utf-8')])

    return [b'Hello World']
    file_name = env['PATH_INFO']
    if file_name == './index.html':
        return index()
    elif file_name == './center.html':
        return center()
    else:
        return [b'Hello World']
