from django.db import models
#from students.models import Student #Import the Student Model

# Create your models here.
# Temporary Student model
class Student(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Project(models.Model):
    student = models.ForeignKey(Student, on_delete= models.CASCADE, related_name='Projects')
    title = models.CharField(max_length=200)
    description = models.TextField()
    year = models.IntegerField()

    def __str__(self):
        return self.title