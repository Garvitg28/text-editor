from django.contrib import admin
from django.contrib.admin import register
from .models import Document, EditHistory


@register(Document)
class DocumentAdmin(admin.ModelAdmin):
    fields = ['title', 'content']

@register(EditHistory)
class EditHistoryAdmin(admin.ModelAdmin):
    fields = ['document', 'edited_at', 'edited_content']