# Generated by Django 4.1.2 on 2022-10-25 05:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='api_image',
            name='link',
        ),
        migrations.RemoveField(
            model_name='api_review',
            name='created_by',
        ),
        migrations.AddField(
            model_name='api_review',
            name='name',
            field=models.CharField(max_length=100, null=True, verbose_name='Имя Фамилия'),
        ),
    ]