from django.contrib import admin
from .models import Subject, Question, Answer
from django.contrib.admin import TabularInline



@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']



class AnswerInline(TabularInline):
    model = Answer
    fields = ['options']

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['id', 'sub', 'title', 'answer_right']
    inlines = [
       AnswerInline
    ]



@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ['id', 'question', 'options']
