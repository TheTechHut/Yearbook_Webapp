from django.shortcuts import render
from .models import Project



# HTML rendering view
def home(request):
    return render(request, 'Projects/home.html')

def root_view(request):
    return render(request, 'home.html')

def Project_list(request):
    Projects = Project.objects.all()
    context = {'Projects': Projects}
    return render(request, "Projects/Project_list.html", context)
