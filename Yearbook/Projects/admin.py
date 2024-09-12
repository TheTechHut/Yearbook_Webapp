from django.contrib import admin
from .models import Project

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title','student', 'year')

    def student(self, obj):
        return obj.student.name  
    student.admin_order_field = 'student'  # Enables sorting by student
    student.short_description = 'Student'  # Renames the column header in the admin
