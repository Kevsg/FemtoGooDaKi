import os
import requests

USER_URL = os.getenv('USER_ENDPOINT_URL')

course_detail_fields = [
    'id',
    'courseName',
    'description',
    'job',
]


def validate_token(username, token):
    url = USER_URL.strip('/') + '/validateToken'
    data = {
        'username': username,
        'token': token,
    }

    resp = requests.post(url, data=data)
    return resp.status_code == 200
