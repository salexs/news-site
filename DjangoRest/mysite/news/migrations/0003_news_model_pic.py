# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-02 12:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_auto_20170721_0841'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='model_pic',
            field=models.ImageField(default=1, upload_to='pic_folder/'),
            preserve_default=False,
        ),
    ]
