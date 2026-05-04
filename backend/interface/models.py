from django.db import models

# Create your models here.

class Client (models.Model):
    def __str__(self):
        return str(f"name : {self.clientName} , Age : {self.clientAge}")
    # id = models.IntegerField(unique=True,)
    clientName = models.CharField(max_length=100)
    clientAge = models.IntegerField(default=18)