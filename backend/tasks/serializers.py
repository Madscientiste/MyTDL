from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "title", "description", "completed", "created_at", "updated_at"]
