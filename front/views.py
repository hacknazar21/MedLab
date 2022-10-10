from django.shortcuts import render
from rest_framework import viewsets, status, generics
from rest_framework.response import Response

from .models import Api_Analyses

from .serializer import AnalyseSerializer


class RetrieveAnalyse(viewsets.ModelViewSet):
    queryset = Api_Analyses.objects.all()
    serializer_class = AnalyseSerializer

    def get(self, request):
        analysis = Api_Analyses.objects.all()
        serializer = AnalyseSerializer(analysis, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = AnalyseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class AnalyseGetCreate(generics.ListCreateAPIView):
    queryset = Api_Analyses.objects.all()
    serializer_class = AnalyseSerializer

class AnalyseOne(generics.RetrieveAPIView):
    queryset = Api_Analyses.objects.all()
    serializer_class = AnalyseSerializer


class AnalyseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Api_Analyses.objects.all()
    serializer_class = AnalyseSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'short_title_link'