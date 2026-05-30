from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

from django.conf import settings

# Create your models here.
# gestion des utilisateur
class User(AbstractUser):
    pass
    
class Receptionist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE ,related_name="receptionist")
    firstName = models.CharField(null=False,blank=False, max_length=50)
    lastName = models.CharField(null=False,blank=False, max_length=50)
    email = models.EmailField(null=True, blank=True)
    badgeNumber = models.CharField(max_length=20, null=False, blank=False, unique=True)
    def __str__(self):
        return f"{self.badgeNumber} : {self.user.first_name} {self.user.last_name}"
    
class Client(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50, null=False, blank=False)
    lastName = models.CharField(max_length=50, null=False, blank=False)
    cin = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=300)
    phoneNumber = models.CharField(max_length=10,blank=False, null=False) 
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    actif = models.BooleanField(default=True)
    
class StayHistory(models.Model):
    client = models.ForeignKey(Client,on_delete=models.CASCADE, related_name="stayHistory")
    startDate = models.DateField(null=False)
    endDate = models.DateField(null=False)
    roomNumber = models.CharField(null=False)
    totalPrice = models.DecimalField(max_digits=10, decimal_places=2)
    
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
    def __str__(self):
        return f"{self.roomType} - {self.season} : {self.pricePerNight}/night"
    
class Room(models.Model):
    number      = models.CharField(max_length=10, unique=True)
    type        = models.CharField(max_length=10, choices=RoomType.choices)
    floor       = models.PositiveIntegerField()
    capacity    = models.PositiveIntegerField()
    description = models.TextField(blank=True)
    liveStatus  = models.CharField(max_length=15, choices=RoomStatus.choices, default=RoomStatus.AVAILABLE)
    equipment   = models.ManyToManyField(Equipment, blank=True)  # Aggregation
    pricing     = models.ForeignKey(Pricing, null=True, blank=True, on_delete=models.SET_NULL)
    

class Reservation(models.Model):
    STATUS_CHOICES = [
        ("Confirmed", "Confirmed"),
        ("Canceled", "Canceled"),
        ("Check-in", "Check-in"),
        ("Check-out", "Check-out"),
    ]
    client = models.ForeignKey(Client,on_delete=models.CASCADE,related_name="reservations")
    room = models.ForeignKey(Room,on_delete=models.CASCADE,related_name="reservations")
    date_arrivee = models.DateField()
    date_depart = models.DateField()
    nombre_personnes = models.IntegerField()
    remise = models.DecimalField(max_digits=5,decimal_places=2,default=0)
    statut = models.CharField(max_length=20,choices=STATUS_CHOICES,default="confirmee")
    # heure_checkin = models.DateTimeField(blank=True,null=True)
    # heure_checkout = models.DateTimeField(blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
class Facture(models.Model):
    reservation = models.OneToOneField(Reservation,on_delete=models.CASCADE,related_name="facture")
    montant_total = models.DecimalField(max_digits=10,decimal_places=2)
    remise_appliquee = models.DecimalField(max_digits=10,decimal_places=2,default=0)
    date_facture = models.DateTimeField(auto_now_add=True)
    payed = models.BooleanField(default=False)
    def __str__(self):
        return f"Facture #{self.id}"