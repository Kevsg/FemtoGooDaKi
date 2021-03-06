# Generated by Django 3.0.4 on 2020-04-10 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('main_knowledge', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=30)),
                ('courseName', models.CharField(max_length=128)),
                ('description', models.TextField()),
                ('createDate', models.DateField()),
                ('job', models.CharField(max_length=30)),
                ('knowledge_set', models.ManyToManyField(to='main_knowledge.Knowledge')),
            ],
        ),
    ]
