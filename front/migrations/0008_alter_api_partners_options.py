# Generated by Django 4.1.2 on 2022-11-18 05:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0007_alter_api_aboutus_options_alter_api_analyses_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='api_partners',
            options={'ordering': ['-createdat'], 'verbose_name': 'Партнер', 'verbose_name_plural': 'Партнеры'},
        ),
    ]