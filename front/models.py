from django.db import models
from django.utils.translation import gettext_lazy as _


class Api_Analyses(models.Model):
    short_title = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Короткий заголовок')
    long_title = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Длинный заголовк')
    is_unique = models.BooleanField(blank=True, null=False, verbose_name='Уникальный')
    research_id = models.CharField(max_length=250, blank=True, primary_key=True, verbose_name='Код анализа')
    biomaterial = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Биоматериал')
    price = models.FloatField(blank=True, null=True, verbose_name='Цена')
    preparation_doctor = models.TextField(blank=True, null=True, verbose_name='Инструкция для врача ')
    banner_img = models.ImageField(max_length=1000, blank=True, null=True, upload_to='imgAnalyse',
                                  verbose_name='Картинка для баннера')
    document_img = models.ImageField(max_length=1000, blank=True, null=True, upload_to='imgAnalyse',
                                    verbose_name='Картинка для документа')
    main_img = models.ImageField(max_length=1000, blank=True, null=True, upload_to='imgAnalyse',
                                verbose_name='Главная картинка')
    description_patient = models.TextField(blank=True, null=True, verbose_name='Описание для пациентов')
    preparation_patient = models.TextField(blank=True, null=True, verbose_name='Инструкция для пациентов')
    description_doctor = models.TextField(blank=True, null=True, verbose_name='Описание для врачей')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    category = models.ForeignKey('ApiCategoryanalyses', on_delete=models.CASCADE, verbose_name='Категорий анализов',
                                 db_column='category')
    vendor_code = models.CharField(max_length=250, verbose_name='Артикул анализа')
    terms_of_analyzes = models.ForeignKey('ApiTermsanalyses', on_delete=models.CASCADE, db_column='terms_of_analyzes',
                                          verbose_name='Сроки анализов')
    link = models.CharField(max_length=250, verbose_name='Ссылка анализа', null=True)

    class Meta:
        db_table = 'API_Analyses'
        verbose_name = _('Анализ')
        verbose_name_plural = _('Анализы')

    def __str__(self):
        return self.short_title


class ApiCategoryanalyses(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_CategoryAnalyses'
        verbose_name = _('Категория')
        verbose_name_plural = _('Категории')

    def __str__(self):
        return self.name



class ApiTermsanalyses(models.Model):
    terms = models.CharField(max_length=15, blank=True, null=True)
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_TermsAnalyses'
        verbose_name = _('Срок анализа')
        verbose_name_plural = _('Сроки анализов')

    def __str__(self):
        return self.terms
