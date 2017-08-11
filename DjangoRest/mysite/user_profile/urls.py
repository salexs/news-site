from django.conf.urls import url,include 
from .views import (
    ProfileAPIView,
    UpdateAPIView,
    UpdateAvatarAPIView,
)

urlpatterns = [
    url(r'^(?P<username>[\w-]+)/$', ProfileAPIView.as_view()),
    url(r'^update/(?P<username>[\w-]+)/$', UpdateAPIView.as_view()),
    url(r'^update-avatar/(?P<username>[\w-]+)/$', UpdateAvatarAPIView.as_view())
]