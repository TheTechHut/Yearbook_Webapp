from . import views
from django.urls import path 
from .views import Project_list
from .views import home
from Projects.views import root_view

urlpatterns = [
    path('home/', home, name='home'),  # Home page URL
    path("Projects/", Project_list, name="Project_list"),
    path('', root_view, name='root'), #Root URL pattern
]