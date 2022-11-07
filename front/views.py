from rest_framework import generics, filters
from rest_framework.permissions import AllowAny

from rest_framework.response import Response

from front.models import API_Analyses, API_News, API_QaA, API_AboutUs, \
    API_Contacts, API_Promotions, API_Review, API_PackageAnalyses, API_CategoryAnalyses, API_Partners

from front.serializer import AnalyseSerializer, NewsSerializer, QaASerializer, AboutUsSerializer, \
    ContactSerializer, PromotionSerializer, ReviewSerializer, PackageAnalysesSerializer, CategoryAnalysesSerializer, \
    PartnersSerializer


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


class AnalyseListView(generics.ListCreateAPIView):
    queryset = API_Analyses.objects.prefetch_related('biomaterial', 'category', 'terms_of_analyzes')
    serializer_class = AnalyseSerializer


class AnalyseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_Analyses.objects.all()
    serializer_class = AnalyseSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'title_analyse_link'


class PackageListView(generics.ListCreateAPIView):
    queryset = API_PackageAnalyses.objects.prefetch_related('package')
    serializer_class = PackageAnalysesSerializer


class NewsListView(generics.ListCreateAPIView):
    queryset = API_News.objects.all()
    serializer_class = NewsSerializer


class NewsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'title_news_link'


class QaAListView(generics.ListCreateAPIView):
    queryset = API_QaA.objects.all()
    serializer_class = QaASerializer


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


class PromotionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = API_Promotions.objects.all()
    serializer_class = PromotionSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'promotion_link'


class ReviewListView(generics.ListCreateAPIView):
    queryset = API_Review.objects.all()
    serializer_class = ReviewSerializer


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

class CategoryListView(generics.ListCreateAPIView):
    queryset = API_CategoryAnalyses.objects.prefetch_related('child_category')
    serializer_class = CategoryAnalysesSerializer
    permission_classes = (AllowAny,)


class PartnersListView(generics.ListCreateAPIView):
    queryset = API_Partners.objects.all()
    serializer_class = PartnersSerializer
    permission_classes = (AllowAny,)
