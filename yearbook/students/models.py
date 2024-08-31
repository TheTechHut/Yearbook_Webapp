
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    photo = models.ImageField(upload_to='photos/')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['student_class']  # Order students by class

