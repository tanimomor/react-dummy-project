import time

from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView

from api.models import Post
from api.serialiazers import PostSerializer


# Create your views here.
class PostListCreateAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request, *args, **kwargs):
        # time.sleep(2)  # Delay response by 2 seconds
        return super().list(request, *args, **kwargs)


class PostDetailAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
