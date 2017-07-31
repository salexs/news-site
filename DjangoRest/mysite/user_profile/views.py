from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserProfileSerializer
from rest_framework.generics import (
    RetrieveAPIView
    )

from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser
)



class UserProfileAPIView(RetrieveAPIView):
    permission_classes = [IsOwnerOrReadOnly,IsAuthenticated]
    serializer_class = UserProfileSerializer
    queryset = User.objects.all()
    lookup_field = 'username'