from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.contenttypes.models import ContentType
from rest_framework.response import Response

from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    SerializerMethodField,
    ValidationError,

)



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('location', 'experience', 'birth_date', 'about_myself','skills','avatar')

class UserSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer()
    class Meta:
        model = User
        fields = ('username', 'email','last_name','first_name','profile')
