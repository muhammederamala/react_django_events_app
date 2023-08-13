from django.urls import path

from .views import (
    login_view,signup_view,CreateEvent,ListAllEvents,
)

urlpatterns = [
    path('login/',login_view,name='login_view'),
    path('signup_view/',signup_view,name='signup_view'),
    path('create_event/',CreateEvent,name='CreateEvent'),
    path('list_all_events/',ListAllEvents,name='ListAllEvents')
]
