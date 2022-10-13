from django.urls import path, include

from front.views import AnalyseListView, AnalyseDetailView, NewsListView, NewsDetailView, QaAListView, QaADetailView, \
    AboutUsListView, AboutUsDetailView, ContactsListView, ContactsDetailView, PromotionListView, PromotionDetailView, \
    ReviewListView, ReviewdDetailView, PackageListView


analysepatterns = [
    path('allAnalyse', AnalyseListView.as_view(), name='allAnalyses'),
    path('<str:title_analyse_link>', AnalyseDetailView.as_view(), name='analyse-RUD')
]

newspatterns = [
    path('allNews', NewsListView.as_view(), name='allNews'),
    path('<str:title_news_link>', NewsDetailView.as_view(), name='news-RUD')
]

qaapatterns = [
    path('allQaA', QaAListView.as_view(), name='allQaA'),
    path('<str:question_link>', QaADetailView.as_view(), name='QaA-RUD')
]

aboutuspatterns = [
    path('allAboutUs', AboutUsListView.as_view(), name='allAboutUs'),
    path('<str:aboutus_link>', AboutUsDetailView.as_view(), name='AboutUs-RUD')
]

contactspatterns = [
    path('allContacts', ContactsListView.as_view(), name='allContacts'),
    path('<str:contacts_link>', ContactsDetailView.as_view(), name='Contacts-RUD')
]

promotionpatterns = [
    path('allPromotions', PromotionListView.as_view(), name='allPromotions'),
    path('<str:promotion_link>', PromotionDetailView.as_view(), name='Promotion-RUD')
]

reviewpatterns = [
    path('allReviews', ReviewListView.as_view(), name='allReviews'),
    path('<str:review_link>', ReviewdDetailView.as_view(), name='Review-RUD')
]


packageanalysepatterns = [
    path('allPackages', PackageListView.as_view(), name='allPackages')
]

urlpatterns = [
    path('analyse/', include(analysepatterns)),
    path('news/', include(newspatterns)),
    path('qaa/', include(qaapatterns)),
    path('aboutus/', include(aboutuspatterns)),
    path('contact/', include(contactspatterns)),
    path('promotion/', include(promotionpatterns)),
    path('review/', include(reviewpatterns)),
    path('package/', include(packageanalysepatterns))
]