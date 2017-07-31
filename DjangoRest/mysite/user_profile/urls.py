from django.conf.urls import url,include 
from .views import (
    UserProfileAPIView
)

urlpatterns = [
    url(r'^(?P<username>[\w-]+)/$', UserProfileAPIView.as_view()),
]