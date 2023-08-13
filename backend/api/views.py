from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
from rest_framework import status
from rest_framework.decorators import api_view



from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Login failed'}, status=400)


@csrf_exempt
def signup_view(request):
    if request.method =='POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        email = data.get('email')
        password1 = data.get('password')

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'User with the given username or email already exists'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password1)
        user.save()

        return JsonResponse({'message': 'Registration successful'})

from .models import CreateEventModel

@csrf_exempt
def CreateEvent(request):
    if request.method =='POST':
        event_name = request.POST.get('name')
        event_date = request.POST.get('date')
        event_description = request.POST.get('description')
        event_image = request.FILES.get('image')

        new_event = CreateEventModel(
            name = event_name,
            date = event_date,
            description = event_description,
            image = event_image
        )
        new_event.save()
        return JsonResponse({'message':'Event Created Succesfully'})
    else:
        return JsonResponse({'message':'Event Creation Failed'},status = 400)


def ListAllEvents(request):
    events = CreateEventModel.objects.all()
    event_list = []
    for event in events:
        event_data = {
            'id':event.id,
            'name': event.name,
            'date': event.date.strftime('%Y-%m-%d'),
            'description': event.description,
            'image_url': event.image.url,
        }
        event_list.append(event_data)

    return JsonResponse({'events':event_list})

@api_view(['DELETE'])
def delete_event(request,event_id):
    try:
        event = CreateEventModel.objects.get(pk=event_id)
        event.delete()
        return JsonResponse(data={}, status=status.HTTP_204_NO_CONTENT)
    except CreateEventModel.DoesNotExist:
        return JsonResponse(data={'message': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)
