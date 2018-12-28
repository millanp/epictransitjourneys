from django.shortcuts import render
from .models import Journey, JourneySerializer, JourneyListSerializer

from rest_framework import generics, permissions, serializers
from rest_framework.response import Response

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

    # def create(self, request, *args, **kwargs):
    #     write_serializer = self.serializer_class(data=request.data)
    #     write_serializer.is_valid(raise_exception=True)
    #     instance = self.perform_create(write_serializer)
    #     print(instance)
    #     read_serializer = JourneyListSerializer(instance)
    #     return Response(read_serializer.data)

class JourneyDetail(generics.RetrieveAPIView):
    queryset = Journey.objects.all()
    permission_classes = []
    # automatically uses lookup field of pk
    serializer_class = JourneySerializer

class JourneyUpdate(generics.UpdateAPIView):
    queryset = Journey.objects.all()
    permission_classes = [TokenHasReadWriteScope]
    serializer_class = JourneySerializer

class JourneyDelete(generics.DestroyAPIView):
    queryset = Journey.objects.all()
    permission_classes = [TokenHasReadWriteScope]
    # serializer_class = JourneyListSerializer

# clid: pvgEWnLsB1GGP0qAvIPN2OrkamQUKj5h16UH8iXp
# cls: 0MdkdrR0H05jMkm6FAxjOiu04FX6fBd2VQ094RnoRRiFDaf7SNVGugyZUoiSgWtdj3FA6nALPZCsf8PwsiIZ4kZcCEPQ1JKiou3ZLyOZjLDRPeM0HUTXyouCNtXuvrtH
# tok: Vhw6laWgYyfm6O1sGK2AoDy3UvzJ2K