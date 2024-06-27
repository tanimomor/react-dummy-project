from django.db import models


# Create your models here.
class Post(models.Model):
    author = models.CharField(max_length=200)
    body = models.TextField()
