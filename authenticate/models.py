from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, username, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, password, **other_fields)

    def create_user(self, email, username, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                          **other_fields)
        user.set_password(password)
        user.save()
        return user

class API_Users(AbstractUser):
    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['email', 'firstname', 'lastname', 'username']
    objects = CustomAccountManager()


    email = models.EmailField(max_length=255, verbose_name='Электронная почта')
    phone_regex = RegexValidator(regex=r'^\+?77(\d{9})$', message='Введен неправильный номер телефноа')
    phone_number = models.CharField(max_length=255, blank=True, null=True, verbose_name='Номер телефона', unique=True,
                                    validators=[phone_regex])

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
