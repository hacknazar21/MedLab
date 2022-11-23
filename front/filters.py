from django_filters import FilterSet

from front.models import API_Analyses

class AnalyseFilter(FilterSet):

    class Meta:
        model = API_Analyses
        fields = {'category' : ['exact'], 'biomaterial' : ['exact']}
