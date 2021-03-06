from rest_framework import viewsets
from .serializers import  NewsListSerializer,CreateNewsSerializer,UpdateNewsSerializer
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    DestroyAPIView
    )
from .pagination import PostLimitOffsetPagination
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
)
from .permissions import IsOwnerOrReadOnly
from .models import News

class NewsListAPIView(ListAPIView):
    serializer_class = NewsListSerializer
    permission_classes = []
    pagination_class = PostLimitOffsetPagination
    queryset = News.objects.all()
    def get_queryset(self,*args,**kwargs):
        if 'search' in self.request.GET:
            word = self.request.GET['search']
            queryset = News.objects.filter(title__icontains = word)
            return queryset
        if 'filter' in self.request.GET:
            word = self.request.GET['filter']
            queryset = News.objects.filter(tags__text = word)
            return queryset
        queryset = News.objects.all()    
        return queryset

class NewsCreateAPIView(CreateAPIView):
    serializer_class = CreateNewsSerializer
    queryset = News.objects.all()
    permission_classes = []
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)

class ChangeNewsAPIView(UpdateAPIView):
    permission_classes = []
    serializer_class = UpdateNewsSerializer
    queryset = News.objects.all()
    
class SearchNewsApiView(RetrieveAPIView):
    serializer_class = NewsListSerializer
    pagination_class = PostLimitOffsetPagination
    queryset = News.objects.all()
    lookup_field = 'title'

class DetailNewsAPIView(ListAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = NewsListSerializer
    pagination_class = PostLimitOffsetPagination
    
    def get_queryset(self,*args,**kwargs): 
        queryset = News.objects.filter(author__username=self.kwargs['author'])
        if 'search' in self.request.GET:
            word = self.request.GET['search']
            queryset = News.objects.filter(title__icontains = word)
            return queryset
        if 'filter' in self.request.GET:
            word = self.request.GET['filter']
            queryset = News.objects.filter(tags__text = word)
            return queryset
        return queryset


class DeleteAPIView(DestroyAPIView):
    queryset = News.objects.all()
    permission_classes = [IsAuthenticated,IsOwnerOrReadOnly]