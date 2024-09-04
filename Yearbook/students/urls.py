from django.urls import path 
from .views import StudentListCreate, StudentDetail

urlpatterns = [
    path('', StudentListCreate.as_view(), name='student-list-create'),
    path('<int:pk>/', StudentDetail.as_view(),name='student-detail'),
]
