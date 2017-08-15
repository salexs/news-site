from .models import News,Tag
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
class UpdateNewsSerializer(ModelSerializer):
        class Meta:
            model = News
            fields = [
                'title',
                'text',
            ]