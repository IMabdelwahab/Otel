from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
# gestion des utilisateur
class User(AbstractUser):
    email = models.EmailField(unique=True, null=False, blank=False)
    first_name = models.CharField(null=False,blank=False, max_length=50)
    last_name = models.CharField(null=False,blank=False, max_length=50)
    is_client = models.BooleanField(default=False)
    is_receptionist = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.username} : {self.first_name} {self.last_name}"
    
class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cin = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=300)
    phoneNumber = models.CharField(max_length=10) 
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

class Receptionist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    badgeNumber = models.CharField(max_length=20, null=False, blank=False)
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}  ---  {self.badgeNumber}"

#gestion des chambres - tarifs - remise 
class RoomStatus(models.TextChoices):
    AVAILABLE    = 'AVAILABLE',    'Available'
    OCCUPIED     = 'OCCUPIED',     'Occupied'
    MAINTENANCE  = 'MAINTENANCE',  'Maintenance'
    DEACTIVATED  = 'DEACTIVATED',  'Deactivated'

class RoomType(models.TextChoices):
    Standard   = 'Standard','Standard'
    Deluxe   = 'Deluxe','Deluxe'
    Suite    = 'Suite','Suite'
    Family   = 'Family','Family'

class PricingSeason(models.TextChoices):
    LOW_SEASON  = 'LOW_SEASON',  'Low Season'
    HIGH_SEASON = 'HIGH_SEASON', 'High Season'
    # SPECIAL     = 'SPECIAL',     'Special'
    
class DiscountType(models.TextChoices):
    PERCENTAGE  = 'PERCENTAGE',  'Percentage'
    FIXED_AMOUNT = 'FIXED_AMOUNT', 'Fixed Amount'
    
class Equipment(models.Model):
    name        = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Pricing(models.Model):
    roomType     = models.CharField(max_length=10, choices=RoomType.choices)
    season       = models.CharField(max_length=15, choices=PricingSeason.choices)
    pricePerNight = models.DecimalField(max_digits=10, decimal_places=2)
    # startDate    = models.DateField()
    # endDate      = models.DateField()
    def __str__(self):
        return f"Pricing {self.roomType} - {self.season} ({self.pricePerNight}/night)"
    
class Room(models.Model):
    number      = models.CharField(max_length=10, unique=True)
    type        = models.CharField(max_length=10, choices=RoomType.choices)
    floor       = models.PositiveIntegerField()
    capacity    = models.PositiveIntegerField()
    description = models.TextField(blank=True)
    liveStatus  = models.CharField(max_length=15, choices=RoomStatus.choices, default=RoomStatus.AVAILABLE)
    equipment   = models.ManyToManyField(Equipment, blank=True)  # Aggregation
    pricing     = models.ForeignKey(Pricing, null=True, blank=True, on_delete=models.SET_NULL)
    def __str__(self):
        return f"Room {self.number} ({self.type})"
    
class CouponCode(models.Model):
    code = models.CharField(null = False, blank=False)
    percentage = models.PositiveIntegerField() 
    def __str__(self):
        return f"{self.code} ({self.percentage} %)"
    

