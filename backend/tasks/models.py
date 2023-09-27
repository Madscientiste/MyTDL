from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=150, blank=False)
    description = models.CharField(max_length=500, null=True, blank=True)
    completed = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"<task: {self.title}>"

    class Meta:
        ordering = ("-completed",)
        verbose_name = "task"
        verbose_name_plural = "tasks"
