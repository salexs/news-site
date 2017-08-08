from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import JsonResponse
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.generics import (
    RetrieveAPIView,
        ListAPIView,
    )

from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser
)



class ProfileAPIView(APIView):

    def get(self, request, username, format=None):
        user = User.objects.filter(username=username).first()
        return Response({
            "username":user.username,
            "first_name":user.first_name,
            "last_name":user.last_name,
            "email":user.email,
            "experience":user.profile.experience,
            "location":user.profile.location,
            "birth_date":user.profile.birth_date,
            "about_myself":user.profile.about_myself,
            "skills":user.profile.skills,
        })