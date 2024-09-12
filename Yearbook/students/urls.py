from django.urls import path 
from .views import StudentListCreate, StudentDetail, SignUpView, AddStudentDetailsView

urlpatterns = [
    path('', StudentListCreate.as_view(), name='student-list-create'),
    path('<int:pk>/', StudentDetail.as_view(),name='student-detail'),
    path('signup/', SignUpView.as_view(), name='signup'), #Sign-up URL
    path('add-details/', AddStudentDetailsView.as_view(), name='add-student-details'),
]
