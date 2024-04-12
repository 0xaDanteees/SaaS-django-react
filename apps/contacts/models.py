from django.db import models
from django.utils import timezone
# Create your models here.

class Contact(models.Model):
    name=models.CharField(max_length=100)
    company=models.CharField(max_length=100)
    email= models.EmailField()
    phone= models.CharField(max_length=20)
    size=models.CharField(max_length=40,blank=True)
    country = models.CharField(max_length=50,blank=True )
    subject = models.CharField(max_length=100)
    message= models.TextField(blank=True)
    budget= models.CharField(max_length=50,blank=True)
    contact_date= models.DateTimeField(default=timezone.now,blank=True)

    def __str__(self):
        return self.email
