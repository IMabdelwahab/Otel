from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
# Register your models here.
class RoomAdmin(admin.ModelAdmin):
    list_display = ['number', 'type','floor','liveStatus','capacity','pricing__pricePerNight']
    search_fields = ['number','type','floor','pricing__pricePerNight']

class ClientAdmin(admin.ModelAdmin):
    list_display =  ['lastName','firstName','cin','phoneNumber']
    search_fields = ['lastName','firstName','cin','phoneNumber']
    
class RecepAdmin(admin.ModelAdmin):
    list_display = [ 'user__username','firstName','lastName','badgeNumber' ]
    search_fields = ['user__username','firstName','lastName','badgeNumber']
    
class PrincingAdmin(admin.ModelAdmin):
    list_display = ['roomType','season','pricePerNight']
    search_fields = ['roomType','season','pricePerNight']

class EquipAdmin(admin.ModelAdmin):
    list_display = ['name','description']
    search_fields = ['name','description']
    
admin.site.register(User, UserAdmin) # better to use UserAdmin
admin.site.register(Client, ClientAdmin)
admin.site.register(Receptionist, RecepAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(Pricing, PrincingAdmin)
admin.site.register(Equipment, EquipAdmin)


admin.site.site_header = "Otel"
admin.site.site_title = "Otel"