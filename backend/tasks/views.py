from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task
from django.db.models import F, Q, Case, When, Value, IntegerField, DateTimeField
from django.db.models.functions import Now, Greatest


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Tasks to be viewed or edited.
    """

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = []

    def get_queryset(self):
        return Task.objects.annotate(
            sort_field=Case(When(completed=True, then=F("updated_at")), output_field=DateTimeField())
        ).order_by("sort_field", "-created_at")
