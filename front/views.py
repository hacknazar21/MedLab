from django.shortcuts import render
from rest_framework import viewsets, status
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
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
