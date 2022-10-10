from django.urls import path

from .views import AnalyseGetCreate, AnalyseDetail

urlpatterns = [

    path('analyse/allAnalyse', AnalyseGetCreate.as_view(), name='analyse1'),
    path('analyse/<str:short_title_link>', AnalyseDetail.as_view(), name='analise-RUD' )
]