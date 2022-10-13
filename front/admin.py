from django.contrib import admin

from front.models import API_Analyses,API_TermsAnalyses, API_CategoryAnalyses, \
    API_Biomaterial, API_News, API_QaA, API_Contacts, API_AboutUs, API_Promotions, API_Review, API_Image, \
    API_PackageAnalyses



admin.site.register(API_CategoryAnalyses)
admin.site.register(API_TermsAnalyses)
admin.site.register(API_Biomaterial)
admin.site.register(API_News)
admin.site.register(API_QaA)
admin.site.register(API_Contacts)
admin.site.register(API_PackageAnalyses)
admin.site.register(API_AboutUs)
admin.site.register(API_Promotions)
admin.site.register(API_Review)


class BannerImg(admin.StackedInline):
    model = API_Image
    fk_name = 'analyse'


@admin.register(API_Analyses)
class AnalysesAdmin(admin.ModelAdmin):
    list_display = ('title', 'research_id', 'biomaterial')
    list_per_page = 20
    list_filter = ('biomaterial',)
    exclude = ('main_img', 'id')
    inlines = [BannerImg,]

    class Meta:
        model = API_Analyses


