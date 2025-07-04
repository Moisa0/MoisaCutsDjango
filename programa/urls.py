from django.urls import path
from programa.views import index

urlpatterns = [
    path("", index)
]