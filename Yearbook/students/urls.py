from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static
from .views import StudentListCreate, StudentDetail

urlpatterns = [
    path('', StudentListCreate.as_view(), name='student-list-create'),
    path('<int:pk>/', StudentDetail.as_view(),name='student-detail'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
