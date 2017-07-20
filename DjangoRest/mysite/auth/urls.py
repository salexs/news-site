from django.conf.urls import url,include 
from .views import (
    UserCreateAPIView,
    UserLoginAPIView
)

urlpatterns = [
    url(r'^registration/', UserCreateAPIView.as_view()),
    url(r'^login/',UserLoginAPIView.as_view())
]