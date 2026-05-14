from django.urls import path
from . import views
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('api/token',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh',TokenRefreshView.as_view() , name='toke_refresh'),
    path('', views.index ),
    path('apiGetTest/', views.apiGetTest ),
    path('apiGetTest2/<str:name>', views.apiGetTest2 ),
    path('apiPostTest/', views.apiPostTest ),
]
