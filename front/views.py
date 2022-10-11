
from rest_framework import  generics


from .models import Api_Analyses, API_News, API_QaA, API_AboutUs, API_Contacts, API_Promotions

from .serializer import AnalyseSerializer, NewsSerializer, QaASerializer, AboutUsSerializer, \
                        ContactSerializer, PromotionSerializer

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
    queryset = Api_Analyses.objects.all()
    serializer_class = AnalyseSerializer


class AnalyseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Api_Analyses.objects.all()
    serializer_class = AnalyseSerializer
    lookup_field = 'link'
    lookup_url_kwarg = 'title_analyse_link'


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