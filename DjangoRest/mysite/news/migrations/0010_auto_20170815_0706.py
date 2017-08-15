# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-15 07:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0009_auto_20170815_0649'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='tags',
        ),
        migrations.AddField(
            model_name='tag',
            name='news',
            field=models.ManyToManyField(to='news.News'),
        ),
    ]