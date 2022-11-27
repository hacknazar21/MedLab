from django.urls import path, include

from front.views import AnalyseListView, AnalyseDetailView, NewsListView, NewsDetailView, QaAListView, QaADetailView, \
    AboutUsListView, AboutUsDetailView, ContactsListView, ContactsDetailView, PromotionListView, PromotionDetailView, \
    ReviewListView, ReviewdDetailView, PackageListView, CategoryListView, PartnersListView, \
    CategoryDetailView, PackageDetailView, BiomaterialListView


analyse_patterns = [
    path('allAnalyse/', AnalyseListView.as_view(), name='allAnalyses'),
    path('<str:title_analyse_link>/', AnalyseDetailView.as_view(), name='analyse-RUD')
]

news_patterns = [
    path('allNews/', NewsListView.as_view(), name='allNews'),
    path('<str:title_news_link>/', NewsDetailView.as_view(), name='news-RUD')
]

qaa_patterns = [
    path('allQaA/', QaAListView.as_view(), name='allQaA'),
    path('<str:question_link>/', QaADetailView.as_view(), name='QaA-RUD')
]

aboutus_patterns = [
    path('allAboutUs/', AboutUsListView.as_view(), name='allAboutUs'),
    path('<str:aboutus_link>/', AboutUsDetailView.as_view(), name='AboutUs-RUD')
]

contacts_patterns = [
    path('allContacts/', ContactsListView.as_view(), name='allContacts'),
    path('<str:contacts_link>/', ContactsDetailView.as_view(), name='Contacts-RUD')
]

promotion_patterns = [
    path('allPromotions/', PromotionListView.as_view(), name='allPromotions'),
    path('<str:promotion_link>/', PromotionDetailView.as_view(), name='Promotion-RUD')
]

review_patterns = [
    path('allReviews/', ReviewListView.as_view(), name='allReviews'),
    path('<str:review_link>/', ReviewdDetailView.as_view(), name='Review-RUD')
]


packageanalyse_patterns = [
    path('allPackages/', PackageListView.as_view(), name='allPackages'),
    path('<str:name_of_package_link>/', PackageDetailView.as_view(), name='Package-RUD')
]



biomaterial_patterns = [
    path('allBiomaterials/', BiomaterialListView.as_view(), name='filterBiomaterial')
]

categoty_patterns = [
    path('allCategories/', CategoryListView.as_view(), name='allCategory'),

    path('delete/<str:id>/', CategoryDetailView.as_view(), name='delete')
]

partners_patterns = [
    path('allPartners/', PartnersListView.as_view(), name='allPartners')
]


urlpatterns = [
    path('analyse/', include(analyse_patterns)),
    path('news/', include(news_patterns)),
    path('qaa/', include(qaa_patterns)),
    path('aboutus/', include(aboutus_patterns)),
    path('contact/', include(contacts_patterns)),
    path('promotion/', include(promotion_patterns)),
    path('review/', include(review_patterns)),
    path('package/', include(packageanalyse_patterns)),
    path('category/', include(categoty_patterns)),
    path('partners/', include(partners_patterns)),
    path('biomaterial/', include(biomaterial_patterns)),
]
