from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
def index(request):
    client = Receptionist.objects.all()
    return HttpResponse(client)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
# @permission_classes([AllowAny])
def apiGetTest(request):
    if request.method == "GET":
        try :
            recepts = Receptionist.objects.all()
            serializer = ReceptionistSerializer(recepts,many=True)
            return Response(serializer.data)
        except :
            return Response({"data":"Not Found"})
        
        
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
        serializer = ReceptionistSerializer(data = request.data)
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