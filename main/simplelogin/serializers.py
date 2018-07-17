from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User


class RegistrationSerializer(serializers.ModelSerializer):

    password = serializers.CharField(max_length=128, min_length=8, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'token']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=255, read_only=True)
    password = serializers.CharField(max_length=255, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)
        if email is None:
            raise serializers.ValidationError('Email is a required field')

        if password is None:
            raise serializers.ValidationError('Password is a required field')

        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError('User Not Found')

        if not user.is_active:
            raise serializers.ValidationError('User is deactivated')

        return {
            'email': email,
            'username': user.username,
            'token': user.token
        }
