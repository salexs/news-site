from django.db import models
from django.conf import settings

class News(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    publish_date = models.DateField(auto_now=True)
