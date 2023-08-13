from django.db import models

class CreateEventModel(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateField()
    description = models.TextField()
    image = models.ImageField(upload_to='eventimages/')