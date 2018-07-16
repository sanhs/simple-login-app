from django.db import models

# Create your models here.
class Users(models.Model):
    user = models.CharField(max_length=128)
    password = models.CharField(max_length=128)
    gitUserName = models.CharField(max_length=128)
