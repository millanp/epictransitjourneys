from django.shortcuts import render
from .models import Journey, JourneySerializer, JourneyListSerializer

from rest_framework import generics, permissions, serializers

from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope

# Create your views here.
class JourneyList(generics.ListAPIView):
    permission_classes = []
    queryset = Journey.objects.all()
    serializer_class = JourneyListSerializer

class JourneyCreate(generics.CreateAPIView):
    permission_classes = [TokenHasReadWriteScope]
    serializer_class = JourneySerializer

    def perform_create(self, serializer):
        serializer.save(written_by=self.request.user)

# clid: pvgEWnLsB1GGP0qAvIPN2OrkamQUKj5h16UH8iXp
# cls: 0MdkdrR0H05jMkm6FAxjOiu04FX6fBd2VQ094RnoRRiFDaf7SNVGugyZUoiSgWtdj3FA6nALPZCsf8PwsiIZ4kZcCEPQ1JKiou3ZLyOZjLDRPeM0HUTXyouCNtXuvrtH
# tok: Vhw6laWgYyfm6O1sGK2AoDy3UvzJ2K