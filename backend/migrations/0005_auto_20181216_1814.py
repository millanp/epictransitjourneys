# Generated by Django 2.1 on 2018-12-16 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_remove_journey_legs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='journey',
            name='markdown',
            field=models.TextField(null=True),
        ),
    ]
