from .models import News,Tag
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    SerializerMethodField,
    ValidationError,

)

class TagsListSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = ['text']

class NewsListSerializer(ModelSerializer):
    author = SerializerMethodField()
    tags = TagsListSerializer(many=True)
    class Meta:
        model = News
        fields = [
            'author',
            'title',
            'text',
            'publish_date',
            'pk',
            'model_pic',
            'tags'
        ]

    def get_author(self,obj):
        return str(obj.author.username)
class CreateNewsSerializer(ModelSerializer):
    tags = TagsListSerializer(many=True)
    class Meta:
        model = News
        fields = [
            'title',
            'text',
            'tags'
        ]
    def create(self, validated_data):
        tags_data = validated_data.pop('tags')
        news = News.objects.create(**validated_data)
        for tag in tags_data:
            t = Tag(text=tag["text"])
            t.save()
            news.tags.add(t)
        news.save()
        return news

class UpdateNewsSerializer(ModelSerializer):
    tags = TagsListSerializer(many=True)
    class Meta:
        model = News
        fields = [
            'title',
            'text',
            'tags'
        ]
    def update(self, validated_data):
        tags_data = validated_data.pop('tags')
        news = News.objects.all()
        print(self.__dict__)
        news.tags.all().delete()
        for tag in tags_data:
            t = Tag(text=tag["text"])
            t.save()
            news.tags.add(t)
        news.save()
        return news
