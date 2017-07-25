from rest_framework import viewsets
from .serializers import  NewsListSerializer,CreateNewsSerializer
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView
    )

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser
)
from .models import News

class NewsListAPIView(ListAPIView):
    serializer_class = NewsListSerializer
    permission_classes = [IsAuthenticated]
    queryset = News.objects.all()

class NewsCreateAPIView(CreateAPIView):
    serializer_class = CreateNewsSerializer
    queryset = News.objects.all()
    permission_classes = [IsAuthenticated]
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)