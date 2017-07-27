from django.conf.urls import url,include 
from .views import (
    NewsListAPIView,
    NewsCreateAPIView,
    DetailNewsAPIView,
    ChangeNewsAPIView,
    DeleteAPIView
)

urlpatterns = [
    url(r'^$', NewsListAPIView.as_view()),
    url(r'^create/$', NewsCreateAPIView.as_view()),
    url(r'^(?P<author>[\w-]+)/$', DetailNewsAPIView.as_view()),
    url(r'^update/(?P<pk>[\w-]+)/$', ChangeNewsAPIView.as_view()),
    url(r'^delete/(?P<pk>[\w-]+)/$', DeleteAPIView.as_view())
]