from django.contrib import admin
<<<<<<< HEAD
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from students.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/user/register/', CreateUserView.as_view(), name='register'),
    path('students/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('students/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('students-auth/', include('rest_framework.urls')),
    path('students/', include('students.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


=======
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Yearbook API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@yearbook.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/Projects/', include('Projects.urls')), # Include Projects app URLs
    path('api/students/', include('students.urls')), #Include students app URLs
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),
    path('Projects/', include('Projects.urls')),  # Include Projects app URLs under 'Projects/' prefix
]
>>>>>>> 245c3655fcce285b1b5f9f160b43e8d3c1c20c40
