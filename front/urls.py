from django.urls import path

from .views import RetrieveAnalyse

urlpatterns = [
    path('analyse/allAnalyse/', RetrieveAnalyse.as_view({"get": "list"}), name='allAnalyse'),
    path('analyse/create/', RetrieveAnalyse.as_view({"action": "post"}), name='createAnalyse')
]