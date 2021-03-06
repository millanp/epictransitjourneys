from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from .views import JourneyList, JourneyCreate, JourneyDetail, JourneyUpdate, JourneyDelete

urlpatterns = [
    path('test/', TemplateView.as_view(template_name="backend/test.html")),
    path('journeys/new/', JourneyCreate.as_view()),
    path('journeys/<pk>/', JourneyDetail.as_view()),
    path('journeys/<pk>/update/', JourneyUpdate.as_view()),
    path('journeys/<pk>/delete/', JourneyDelete.as_view()),
    path('journeys/', JourneyList.as_view())
]
