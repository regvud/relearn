from apps.books.models import BookModel
from rest_framework import serializers


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookModel
        fields = ("id", "title", "genre", "author")
