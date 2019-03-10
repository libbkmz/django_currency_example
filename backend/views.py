from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView

from backend.serializers import UserSerializer

# Create your views here.
User = get_user_model()


class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRegister(CreateAPIView):
    serializer_class = UserSerializer