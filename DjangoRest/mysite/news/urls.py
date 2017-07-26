from django.conf.urls import url,include 
from .views import (
    NewsListAPIView,
    NewsCreateAPIView,
    DetailNewsAPIView
)

urlpatterns = [
    url(r'^$', NewsListAPIView.as_view()),
    url(r'^user/create/$', NewsCreateAPIView.as_view()),
    url(r'^(?P<author>[\w-]+)/$', DetailNewsAPIView.as_view())
]