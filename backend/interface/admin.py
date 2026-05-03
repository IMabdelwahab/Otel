from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Client)
admin.site.site_header = "Otel"
admin.site.site_title = "Otel"