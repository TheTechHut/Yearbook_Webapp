from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Student
from Projects.serializers import ProjectSerializer

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'student_class', 'email', 'photo']

class SignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()

        #Automatically create a student linked to this user
        student = Student.objects.create(
            user=user,
            name=validated_data['username'],
            email=validated_data['email'],
        )
        return user
class StudentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['student_class', 'photo']

    def update(self, instance, validated_data):
        instance.student_class = validated_data.get('student_class', instance.student_class)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.save()
        return instance   