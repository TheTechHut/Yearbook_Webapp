from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignUpSerializer
from students.models import Student
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

@method_decorator(csrf_exempt, name='dispatch')
class SignUpView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            # Debugging: Confirm user creation
            print(f"User created: {user.username}")

            # Create student instance
            student = Student.objects.create(user=user)
            
            # Confirm student creation
            print(f"Student created for user: {user.username}")
            
            return Response({'message': 'User created successfully! Now please complete your student profile.'}, status=status.HTTP_201_CREATED)
        else:
            print(f"Errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
