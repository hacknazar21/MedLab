from django.db import models
from django.utils.translation import gettext_lazy as _

# class API_Result(models.Model):
#     title_result = models.CharField(max_length=100, blank=True, null=True, verbose_name='Заголовок результатов')
#     isReady = models.IntegerField(blank=True, null=True, verbose_name='Готовность')
#     file = models.FileField(max_length=255, blank=True, null=True, upload_to='fileResult')
#     createdat = models.DateTimeField(db_column='createdAt', auto_now=True)
#     updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)
#     belongs_to = models.ForeignKey('authenticate.API_Users', models.CASCADE, blank=True,
#                                 null=True, verbose_name='Владелец')
#
#     class Meta:
#         db_table = 'API_Result'
#         verbose_name = _('Результат')
#         verbose_name_plural = _('Результаты')
#
#     def __str__(self):
#         return f'{self.title_result}- {self.isReady}'

class API_Appointment(models.Model):
    title_appointment = models.CharField(max_length=100, blank=True, primary_key=True, verbose_name='Заголовок записи')
    description = models.CharField(max_length=1000, blank=True, null=True)
    belongs_to = models.ForeignKey('authenticate.API_Users', on_delete=models.CASCADE, blank=True, null=True,
                                verbose_name='Владелец')  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Api_Appointment'
        verbose_name = _('Запись')
        verbose_name_plural = _('Записи')

    def __str__(self):
        return self.title_appointment

# class API_Notification(models.Model):
#     title_notification = models.CharField(max_length=100, blank=True, null=True, verbose_name='Заголовок уведомления')
#     date = models.CharField(max_length=255, blank=True, null=True, verbose_name='Дата')
#     result = models.FileField(upload_to='',max_length=255, blank=True, null=True, verbose_name='Результат')
#     createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
#     updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
#     belongs_to = models.ForeignKey('authenticate.API_Users', models.CASCADE, blank=True, null=True, verbose_name='Кому принадлежит')  # Field name made lowercase.
#
#     class Meta:
#         db_table = 'API_Notification'
#         verbose_name = _('Уведомление')
#         verbose_name_plural = _('Уведомления')
#
#     def __str__(self):
#         return self.title_notification
