from django.urls import include, path

urlpatterns = [
    path("api/books", include("apps.books.urls")),
]
