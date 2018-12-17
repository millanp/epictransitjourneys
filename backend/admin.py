from django.contrib import admin
from .models import Journey

# Register your models here.
class JourneyAdmin(admin.ModelAdmin):
    readonly_fields = ('last_updated', 'first_published')

admin.site.register(Journey, JourneyAdmin)