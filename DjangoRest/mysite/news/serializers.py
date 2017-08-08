from .models import News
from django.contrib.contenttypes.models import ContentType
from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    SerializerMethodField,
    ValidationError,

)


class NewsListSerializer(ModelSerializer):
    author = SerializerMethodField()
    class Meta:
        model = News
        fields = [
            'author',
            'title',
            'text',
            'publish_date',
            'pk',
            'model_pic',
        ]
    def get_author(self,obj):
        return str(obj.author.username)
class CreateNewsSerializer(ModelSerializer):
        class Meta:
            model = News
            fields = [
                'title',
                'text',

            ]
class UpdateNewsSerializer(ModelSerializer):
        class Meta:
            model = News
            fields = [
                'title',
                'text',
            ]