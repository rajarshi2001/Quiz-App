from rest_framework import serializers
from .models import Subject, Question, Answer


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['name']


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id','options']


class QuestionSerializer(serializers.ModelSerializer):
    ans = AnswerSerializer(many=True, read_only=True)
    sub = serializers.StringRelatedField()

    class Meta:
        model = Question
        fields = ['sub', 'title', 'answer_right', 'ans']