from django.contrib.auth.models import User
from django.db import models

class Document(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class EditHistory(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    edited_at = models.DateTimeField(auto_now_add=True)
    edited_content = models.TextField()
