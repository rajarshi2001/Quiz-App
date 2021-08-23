from django.urls import path, include
from . import views

urlpatterns = [
    path('quizApi/', views.quizView.as_view()),
   path('quizApi/<str:name>/', views.quizView.as_view()),
]
