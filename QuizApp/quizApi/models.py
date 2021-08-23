from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Question(models.Model):
    sub = models.ForeignKey(Subject, on_delete=models.DO_NOTHING, related_name='sub')
    title = models.CharField(max_length=1000)
    answer_right = models.CharField(max_length=1000)

    def __str__(self):
        return self.sub.name


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.DO_NOTHING, related_name='ans')
    options = models.CharField(max_length=1000)

    def __str__(self):
        return self.options



