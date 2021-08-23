from django.shortcuts import render
from .models import Question
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import QuestionSerializer


class quizView(APIView):
   def get(self, request, name=None, format=None):
        name = name
        if name is not None:
            questions = Question.objects.filter(sub__name = name)
            serializer = QuestionSerializer(questions, many=True)
            return Response(serializer.data)
        else:
            questions = Question.objects.all()
            serializer = QuestionSerializer(questions, many=True)
            return Response(serializer.data)



