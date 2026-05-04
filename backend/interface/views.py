from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
def index(request):
    client = Client.objects.all()
    return HttpResponse(client)

@api_view(["GET"])
def apiTest(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients,many=True)
    return Response(serializer.data)

@api_view(["GET"])
def apiTest2(request,age):
    clients = Client.objects.filter(clientAge =  age)
    serializer = ClientSerializer(clients,many=True)
    return Response(serializer.data)