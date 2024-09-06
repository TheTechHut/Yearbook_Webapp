from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("students/", views.StudentListCreate.as_view(), name="student-list-create"),
    path("students/delete/<int:pk>/", views.StudentDelete.as_view(), name="student-delete"),
    path("students/update/<int:pk>/", views.StudentUpdate.as_view(), name="student-update"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)