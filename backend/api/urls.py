from django.urls import path

from .views import (
    login_view,signup_view,
)

urlpatterns = [
    path('login/',login_view,name='login_view'),
    path('signup_view/',signup_view,name='signup_view'),
]
