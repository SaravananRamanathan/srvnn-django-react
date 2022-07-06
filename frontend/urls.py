from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('join', views.index),
    path('create', views.index),
    path('join/<int:id>', views.index),
]
