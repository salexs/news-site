from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    SerializerMethodField,
    ValidationError
)

class UserRegisterSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {"password":
                {"write_only":True}
        }
    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user_obj = User(
            username = username,
            email = email,
        )
        user_obj.set_password(password)
        user_obj.save()
        return validated_data

class UserLoginSerializer(ModelSerializer):
    username = CharField()
    token = CharField(allow_blank=True, read_only=True)
    class Meta:
        model = User
        fields = ['username', 'password','token']
        extra_kwargs = {"password":
                {"write_only":True}
        }
    def validate(self, data):
        username = data.get('username',None)
        password = data['password']
        user = User.objects.filter(username = username)
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise ValidationError('Username is not exist in own system.Please,register.')
        if user_obj:
            if not user_obj.check_password(password):
                raise ValidationError('Your password is incorrect')
        return data