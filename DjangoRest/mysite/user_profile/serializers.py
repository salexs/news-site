from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    SerializerMethodField,
)

class UserProfileSerializer(ModelSerializer):
        class Meta:
            model = User
            fields = [
                'first_name',
                'last_name',
                'username',
                'email',
            ]