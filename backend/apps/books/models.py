from core.models import BaseModel
from django.db import models


class BookModel(BaseModel):
    class Meta:
        db_table = "books"

    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
