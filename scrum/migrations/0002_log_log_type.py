# Generated by Django 2.0.7 on 2018-07-17 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrum', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='log',
            name='log_type',
            field=models.CharField(choices=[('1', 'DONE'), ('2', 'WIP'), ('3', 'ISSUES'), ('4', 'HOURS')], default='', max_length=10),
            preserve_default=False,
        ),
    ]