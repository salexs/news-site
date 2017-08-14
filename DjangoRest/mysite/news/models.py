from django.db import models
from django.conf import settings


class Tag(models.Model):
    text = models.CharField(max_length=50)

class News(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    publish_date = models.DateField(auto_now=True)
    model_pic = models.ImageField(null=True,blank=True)
    tag = models.ForeignKey(Tag,on_delete=models.CASCADE)
