from rest_framework import viewsets
from .serializers import  NewsListSerializer,CreateNewsSerializer,UpdateNewsSerializer
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    )

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
)
from .models import News

class NewsListAPIView(ListAPIView):
    serializer_class = NewsListSerializer

    queryset = News.objects.all()

class NewsCreateAPIView(CreateAPIView):
    serializer_class = CreateNewsSerializer
    queryset = News.objects.all()
    permission_classes = [IsAuthenticated]
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)

class ChangeNewsAPIView(UpdateAPIView):
    serializer_class = UpdateNewsSerializer
    queryset = News.objects.all()

class DetailNewsAPIView(ListAPIView):

    serializer_class = NewsListSerializer
    def get_queryset(self,*args,**kwargs): 
            print(**kwargs)     
            queryset_list = News.objects.filter(title='Admin')
            return queryset_list
