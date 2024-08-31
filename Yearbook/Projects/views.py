# Projects/views.py
from django.http import JsonResponse
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

def Project_list(request):
    # Fetch all projects from the database
    Projects = Project.objects.all()
    #Serialize the data
    serializer = ProjectSerializer(Projects, many = True)
    # Return the serialized data as a JSON
    return JsonResponse(serializer.data, safe=False)
