from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField

from rest_framework import serializers

# Create your models here.

class Location(models.Model): # add dynamic map feature later
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Leg(models.Model):
    route_name = models.CharField(max_length=100)
    route_url = models.URLField()
    start_location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name="start_location")
    end_location = models.ForeignKey(Location, on_delete=models.CASCADE)
    start_time = models.CharField(max_length=100)
    end_time = models.CharField(max_length=100)
    fare = models.CharField(max_length=100)
    index_within_journey = models.SmallIntegerField()

    def __str__(self):
        return self.start_location.name + " to " + self.end_location.name

class Journey(models.Model):
    name = models.CharField(max_length=300, unique=True)
    markdown = models.TextField(null=True)
    regions_visited = ArrayField(models.CharField(max_length=100), blank=True, default=[])
    # legs = models.ManyToManyField(Leg, blank=True)
    last_updated = models.DateTimeField(auto_now=True, null=True)
    first_published = models.DateTimeField(auto_now_add=True, null=True)
    written_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class JourneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Journey
        fields = ('name', 'markdown', 'pk') # pk is ignored in the inbound direction

class JourneyListSerializer(serializers.ModelSerializer):
    written_by = serializers.StringRelatedField(many=False)

    class Meta:
        model = Journey
        fields = ('name', 'last_updated', 'first_published', 'written_by', 'pk')
