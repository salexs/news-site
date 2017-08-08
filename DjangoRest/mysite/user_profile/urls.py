from django.conf.urls import url,include 
from .views import (
    ProfileAPIView
)

urlpatterns = [
    url(r'^(?P<username>[\w-]+)/$', ProfileAPIView.as_view()),
]