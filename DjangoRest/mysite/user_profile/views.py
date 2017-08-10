import base64
from django.core.files.base import ContentFile
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Profile
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import UserSerializer
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.generics import (
    RetrieveAPIView,
        ListAPIView,
        UpdateAPIView
    )

from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser
)

class ProfileAPIView(RetrieveAPIView):
    lookup_field = 'username'
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UpdateAPIView(APIView):

    def put(self, request, username, format=None):
        user = User.objects.filter(username = username)
        user.update(username = request.data['username'],email = request.data['email'],first_name= request.data['first_name'],last_name= request.data['last_name'])
        profile = Profile.objects.filter(user=user[0])
        profile.update(
            location = request.data['profile']['location'],
            experience = request.data['profile']['experience'],
            birth_date = request.data['profile']['birth_date'],
            about_myself = request.data['profile']['about_myself'],
            skills = request.data['profile']['skills'],
        )

        return Response('dsfs')

class UpdateAvatarAPIView(APIView):

    def create_image(self,imgstr):
        data = ContentFile(base64.b64decode(imgstr), name='shaurma1.' + 'png')
        return data

    def post(self, request, username, format=None):
        user = User.objects.filter(username = username)
        profile = Profile.objects.filter(user=user[0])
        p = profile.first()
        print(p)
        file = ContentFile(base64.b64decode(request.POST['file']))
        print(file)
        return Response('dsfs')