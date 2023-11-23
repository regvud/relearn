from apps.books.models import BookModel
from apps.books.serializers import BookSerializer
from rest_framework import generics


class BookListCreateView(generics.ListCreateAPIView):
    queryset = BookModel.objects.all()
    serializer_class = BookSerializer
