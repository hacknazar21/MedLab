from rest_framework import generics, filters, status
from rest_framework.permissions import AllowAny

from rest_framework.response import Response

from django_filters.rest_framework import DjangoFilterBackend

from front.models import API_Analyses, API_News, API_QaA, API_AboutUs, \
    API_Contacts, API_Promotions, API_Review, API_PackageAnalyses, API_CategoryAnalyses, API_Partners, API_Biomaterial

from front.serializer import AnalyseSerializer, NewsSerializer, QaASerializer, AboutUsSerializer, \
    ContactSerializer, PromotionSerializer, ReviewSerializer, PackageAnalysesSerializer, CategoryAnalysesSerializer, \
    PartnersSerializer, BaseCategoryAnalysesSerializer, BiomaterialSerializer

from front.paginator import CustomPaginationEight, CustomPaginationFour

from front.filters import AnalyseFilter

#
# class RetrieveAnalyse(viewsets.ModelViewSet):
#     queryset = Api_Analyses.objects.all()
#     serializer_class = AnalyseSerializer
#
#     def get(self, request):
#         analysis = Api_Analyses.objects.all()
#         serializer = AnalyseSerializer(analysis, many=True)
#
#         return Response(serializer.data)
#
#     def post(self, request):
#         serializer = AnalyseSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)


class AnalyseListView(generics.ListAPIView):
    queryset = API_Analyses.objects.prefetch_related('biomaterial', 'category', 'terms_of_analyzes')
    serializer_class = AnalyseSerializer
    pagination_class = CustomPaginationEight
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['biomaterial', 'category']

class AnalyseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_Analyses.objects.all()
    serializer_class = AnalyseSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'title_analyse_link'


class PackageListView(generics.ListCreateAPIView):
    queryset = API_PackageAnalyses.objects.prefetch_related('package')
    serializer_class = PackageAnalysesSerializer
    pagination_class = CustomPaginationEight


class PackageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_PackageAnalyses.objects.prefetch_related('package')
    serializer_class = PackageAnalysesSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'name_of_package_link'

class NewsListView(generics.ListCreateAPIView):
    queryset = API_News.objects.all()
    serializer_class = NewsSerializer
    pagination_class = CustomPaginationEight

class NewsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'title_news_link'


class QaAListView(generics.ListCreateAPIView):
    queryset = API_QaA.objects.all()
    serializer_class = QaASerializer
    pagination_class = CustomPaginationEight

class QaADetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_QaA.objects.all()
    serializer_class = QaASerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'question_link'


class AboutUsListView(generics.ListCreateAPIView):
    queryset = API_AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class AboutUsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_AboutUs.objects.all()
    serializer_class = AboutUsSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'aboutus_link'


class ContactsListView(generics.ListCreateAPIView):
    queryset = API_Contacts.objects.all()
    serializer_class = ContactSerializer


class ContactsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_Contacts.objects.all()
    serializer_class = ContactSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'contacts_link'


class PromotionListView(generics.ListCreateAPIView):
    queryset = API_Promotions.objects.all()
    serializer_class = PromotionSerializer
    pagination_class = CustomPaginationFour

class PromotionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_Promotions.objects.all()
    serializer_class = PromotionSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'promotion_link'


class ReviewListView(generics.ListCreateAPIView):
    queryset = API_Review.objects.all()
    serializer_class = ReviewSerializer
    pagination_class = CustomPaginationEight

class ReviewdDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'review_link'

class SearchForAnalyzes(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = API_Analyses.objects.all()
    serializer_class = AnalyseSerializer
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)

class CategoryListView(generics.ListAPIView):
    queryset = API_CategoryAnalyses.objects.filter(parent__isnull=True).prefetch_related('child_category')
    serializer_class = BaseCategoryAnalysesSerializer
    permission_classes = (AllowAny,)


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset =  API_CategoryAnalyses.objects.prefetch_related('child_category')
    serializer_class = CategoryAnalysesSerializer
    permission_classes = (AllowAny,)
    lookup_field = 'executor_ptr_id'
    lookup_url_kwarg = 'id'


class PartnersListView(generics.ListCreateAPIView):
    queryset = API_Partners.objects.all()
    serializer_class = PartnersSerializer
    permission_classes = (AllowAny,)


class BiomaterialListView(generics.GenericAPIView):
    serializer_class = AnalyseSerializer

