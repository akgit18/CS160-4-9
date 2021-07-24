# chat/views.py
from django.shortcuts import render

def index(request):

    return render(request, 'game/index.html', context={'range': range(15)})

def room(request, room_name):
    return render(request, 'game/room.html', {
        'room_name': room_name
    })

def phone(request):
    return render(request, 'game/phone.html')
