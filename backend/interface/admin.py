from django.contrib import admin
from .models import *
# Register your models here.
class RoomAdmin(admin.ModelAdmin):
    list_display = ['number','floor','liveStatus','capacity']
    search_fields = ['number','floor']

class UserAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','is_client','is_receptionist']
    search_fields = ['username']
    
class ClientAdmin(admin.ModelAdmin):
    list_display = ['user__username','user__first_name','user__last_name','cin' ]
    search_fields = ['user__username','user__first_name','user__last_name','cin']
    
class RecepAdmin(admin.ModelAdmin):
    list_display = ['user__username','user__first_name','user__last_name','badgeNumber' ]
    search_fields = ['user__username','user__first_name','user__last_name','badgeNumber']
    
class CuouponAdmin(admin.ModelAdmin):
    list_display = ['code','percentage']
    search_fields = ['code','percentage']
    
class PrincingAdmin(admin.ModelAdmin):
    list_display = ['roomType','season','pricePerNight']
    search_fields = ['roomType','season','pricePerNight']

class EquipAdmin(admin.ModelAdmin):
    list_display = ['name','description']
    search_fields = ['name','description']
    
admin.site.register(User, UserAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Receptionist, RecepAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(Pricing, PrincingAdmin)
admin.site.register(Equipment, EquipAdmin)
admin.site.register(CouponCode, CuouponAdmin)
admin.site.site_header = "Otel"
admin.site.site_title = "Otel"