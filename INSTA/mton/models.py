from django.db import models
from faker import Faker
# Create your models here.

faker = Faker()

class User(models.Model):
    name = models.CharField(max_length=30)

class Profile(models.Model):
    age = models.IntegerField()
    address = models.CharField(max_length=200)
    user = models.OneToOneField(User, on_delete=models.CASCADE)




class Client(models.Model):
    name = models.CharField(max_length=30)

    @classmethod
    def dummy(cls, n):
        for i in range(n):
            cls.objects.create(name=faker.name())


class Hotel(models.Model):
    name = models.CharField(max_length=30)
    clients = models.ManyToManyField(Client)

    @classmethod
    def dummy(cls, n):
        for i in range(n):
            cls.objects.create(name=faker.company())




# student 1: N Enroll N : 1 Lecture

class Student(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.id}: {self.name}'


class Lecture(models.Model):
    title = models.CharField(max_length=100)
    student = models.ManyToManyField(Student)
    def __str__(self):
        return f'{self.id}: {self.title}'


class Enroll(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    lecture = models.ForeignKey(Lecture, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.student.name}: {self.lecture.title}'

