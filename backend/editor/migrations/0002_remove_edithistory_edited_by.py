# Generated by Django 5.0.4 on 2024-04-19 20:19

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("editor", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="edithistory",
            name="edited_by",
        ),
    ]
