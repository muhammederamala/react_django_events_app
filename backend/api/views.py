from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.http import JsonResponse


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

import json

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
        
