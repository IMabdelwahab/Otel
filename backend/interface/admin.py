from django.contrib import admin
from .models import *
# Register your models here.
class RoomAdmin(admin.ModelAdmin):
    list_display = ['number','floor','liveStatus']
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
    
        
admin.site.register(User, UserAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Receptionist, RecepAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(Pricing)
admin.site.register(Equipment)
admin.site.register(CouponCode)
admin.site.site_header = "Otel"
admin.site.site_title = "Otel"