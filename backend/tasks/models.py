from django.db import models
from django.db.models import IntegerField, F, Value, Window
from django.db.models.functions import Cast, RowNumber


class Task(models.Model):
    title = models.CharField(max_length=150, blank=False)
    description = models.CharField(max_length=500, null=True, blank=True)
    completed = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"<task: {self.title}>"

    class Meta:
        verbose_name = "task"
        verbose_name_plural = "tasks"
