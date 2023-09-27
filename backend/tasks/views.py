from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Tasks to be viewed or edited.
    """

    queryset = Task.objects.all().order_by("completed", "updated_at")
    serializer_class = TaskSerializer
    permission_classes = []
