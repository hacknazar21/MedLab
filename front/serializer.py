from .models import Api_Analyses

from rest_framework import serializers


class AnalyseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Api_Analyses
        fields = '__all__'