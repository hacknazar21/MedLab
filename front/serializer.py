from front.models import API_Analyses, API_News, API_QaA, API_Promotions, API_AboutUs, API_Contacts, API_Review, \
    API_CategoryAnalyses, API_TermsAnalyses, API_Biomaterial, API_Image, API_PackageAnalyses, API_Partners
from authenticate.serializer import UserSerializer

from rest_framework import serializers



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Image
        fields = '__all__'


class BaseCategoryAnalysesSerializer(serializers.ModelSerializer):
    child_categories = serializers.SerializerMethodField('get_child_categories')

    def get_child_categories(self, instance):
        if instance.child_category.all():
            return BaseCategoryAnalysesSerializer(instance.child_category.all(), many=True).data
        return None

    class Meta:
        model = API_CategoryAnalyses
        fields = '__all__'


class CategoryAnalysesSerializer(BaseCategoryAnalysesSerializer):
    parent = BaseCategoryAnalysesSerializer(read_only=True)



class TermsAnalysesSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_TermsAnalyses
        fields = '__all__'

class BiomaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Biomaterial
        fields = '__all__'

class AnalyseSerializer(serializers.ModelSerializer):
    category = CategoryAnalysesSerializer(read_only=True)
    terms_of_analyzes = TermsAnalysesSerializer(read_only=True)
    biomaterial = BiomaterialSerializer(read_only=True)
    banner_images = ImageSerializer(read_only=True, many=True)

    class Meta:
        model = API_Analyses
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

class ReviewSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    class Meta:
        model = API_Review
        fields = '__all__'

class PackageAnalysesSerializer(serializers.ModelSerializer):
    package = AnalyseSerializer(read_only=True, many=True)
    class Meta:
        model = API_PackageAnalyses
        fields = '__all__'


class PartnersSerializer(serializers.ModelSerializer):

    class Meta:
        model = API_Partners
        fields = '__all__'
