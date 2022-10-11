from .models import Api_Analyses, API_News, API_QaA, API_Promotions, API_AboutUs, API_Contacts

from rest_framework import serializers


class AnalyseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Api_Analyses
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_News
        fields = '__all__'


class QaASerializer(serializers.ModelSerializer):
    class Meta:
        model = API_QaA
        fields = '__all__'

class PromotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Promotions
        fields = '__all__'

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_AboutUs
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Contacts
        fields = '__all__'