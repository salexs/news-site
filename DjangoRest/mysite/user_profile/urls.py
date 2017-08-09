from django.conf.urls import url,include 
from .views import (
    ProfileAPIView,
    UpdateAPIView
)

urlpatterns = [
    url(r'^(?P<username>[\w-]+)/$', ProfileAPIView.as_view()),
    url(r'^updata/(?P<username>[\w-]+)/$', UpdateAPIView.as_view()),
]