from rest_framework.permissions import BasePermission,SAFE_METHODS
from rest_framework_jwt.settings import api_settings


class IsOwnerOrReadOnly(BasePermission):
    message = 'You are not owner this object.'
    my_safe_method = ['PUT']

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user == obj.author