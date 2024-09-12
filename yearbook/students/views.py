from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import Student
from .serializers import StudentSerializer, SignUpSerializer, StudentDetailsSerializer

class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer

class AddStudentDetailsView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = StudentDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Student details added successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)