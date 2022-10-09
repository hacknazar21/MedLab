from django.contrib import admin

from .models import Api_Analyses, ApiTermsanalyses, ApiCategoryanalyses


admin.site.register(Api_Analyses)
admin.site.register(ApiCategoryanalyses)
admin.site.register(ApiTermsanalyses)