from rest_framework.pagination import PageNumberPagination

class CustomPaginationEight(PageNumberPagination):
    page_size = 8
    page_size_query_param = 'page_size'
    max_page_size = 10
    page_query_param = 'page'

class CustomPaginationFour(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'
    max_page_size = 6
    page_query_param = 'page'