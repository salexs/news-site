# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-03 07:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_news_model_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='model_pic',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
