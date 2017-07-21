from django.conf.urls import url,include 
from .views import (
    NewsListAPIView,
    NewsCreateAPIView
)

urlpatterns = [
    url(r'^$', NewsListAPIView.as_view()),
    url(r'^user/create/$', NewsCreateAPIView.as_view())
]