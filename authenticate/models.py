from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser

class API_Users(AbstractUser):
    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['email', 'firstname', 'lastname', 'username']

    email = models.CharField(max_length=255, verbose_name='Электронная почта')
    password = models.CharField(max_length=255, blank=True, null=True, verbose_name='Пароль')
    password2 = models.CharField(max_length=255, blank=True, null=True, verbose_name='Повторите пароль')
    phone_number = models.CharField(max_length=255, blank=True, null=True, verbose_name='Номер телефона', unique=True)
    avatar = models.ImageField(max_length=255, blank=True, null=True, verbose_name="Картинка пользователя")
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    address = models.CharField(max_length=255, blank=True, null=True, verbose_name='Адрес')
    username = models.CharField(max_length=20, verbose_name='Имя пользователя', unique=True)
    firstname = models.CharField(max_length=20, blank=True, null=True, verbose_name='Имя')
    lastname = models.CharField(max_length=20, blank=True, null=True, verbose_name='Фамилия')

    class Meta:
        db_table = 'API_Users'
        verbose_name = _('Пользователь')
        verbose_name_plural = _('Пользователи')

    def __str__(self):
        return '{} {} {}'.format(self.firstname, self.lastname, self.username)
