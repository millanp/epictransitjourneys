from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Journey(models.Model):
    regions_visited = ArrayField(models.CharField(max_length=100))
    