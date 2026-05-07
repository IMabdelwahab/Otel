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
def apiGetTest(request):
    if request.method == "GET":
        clients = Client.objects.all().order_by("clientAge")
        serializer = ClientSerializer(clients,many=True)
        return Response(serializer.data)
        
@api_view(["GET","PUT","DELETE"])
def apiGetTest2(request,name):
    try :
        client = Client.objects.get(clientName =  name)
    except :
        return Response({"data":None})
    
    if request.method == "GET":
        serializer = ClientSerializer(client)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = ClientSerializer(client, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == "DELETE":
        client.delete()
        return Response({"mission":"succefull"})

@api_view(["POST"])
def apiPostTest(request):
    if request.method == "POST":
        serializer = ClientSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
       

     
# @api_view(["GET","POST"])
# def apiGetTest(request,age):
#     if request.method == "GET":
#         clients = Client.objects.filter(clientAge =  age)
#         serializer = ClientSerializer(clients,many=True)
#         return Response(serializer.data)
#     if request.method == "POST":
#         serializer = ClientSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)