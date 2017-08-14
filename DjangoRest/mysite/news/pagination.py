import math
from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response 

class PostLimitOffsetPagination(PageNumberPagination):
    page_size = 4

    def get_paginated_response(self, data):
        print(self.page.__dict__)
        return Response({
            "countPage": math.ceil(self.page.paginator.count/self.page_size),
            "pageNumber":self.page.number,
            "count": self.page.paginator.count,
            "results": data
        })