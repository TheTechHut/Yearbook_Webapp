from rest_framework import serializers
from .models import Project, Student

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['student', 'title', 'description', 'year']

    def create(self, validated_data):
        # Automatically link the project to the currently logged-in student
        request = self.context.get('request')
        student = Student.objects.get(user=request.user)
        validated_data['student'] = student
        return super().create(validated_data)