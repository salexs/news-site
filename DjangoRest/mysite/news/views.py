from rest_framework import viewsets
from .serializers import  NewsListSerializer,CreateNewsSerializer,UpdateNewsSerializer
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    DestroyAPIView
    )

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
)
from .permissions import IsOwnerOrReadOnly
from .models import News

class NewsListAPIView(ListAPIView):
    serializer_class = NewsListSerializer
    permission_classes = [IsAuthenticated]
    queryset = News.objects.all()

class NewsCreateAPIView(CreateAPIView):
    serializer_class = NewsListSerializer
    queryset = News.objects.all()
    permission_classes = [IsAuthenticated,IsOwnerOrReadOnly]
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)

class ChangeNewsAPIView(UpdateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = UpdateNewsSerializer
    queryset = News.objects.all()
    

class DetailNewsAPIView(ListAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = NewsListSerializer
    
    def get_queryset(self,*args,**kwargs): 
            print(self.__dict__)     
            queryset_list = News.objects.filter(author__username=self.kwargs['author'])
            return queryset_list

class DeleteAPIView(DestroyAPIView):
    queryset = News.objects.all()
    permission_classes = [IsAuthenticated,IsOwnerOrReadOnly]