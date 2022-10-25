from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator

import uuid
import abc
from transliterate import translit
import re


def generate_link(text, pk):
    link = translit(text.replace(' ', '-'), 'ru', reversed=True).lower()
    link = re.sub(r'[^A-Za-z0-9\-]+', '', link)
    return f'{link}-{pk}'


class LinkModel(models.Model):
    link = models.CharField(max_length=255, blank=True, null=True, verbose_name='Ссылка')

    class Meta:
        abstract = True

    @abc.abstractmethod
    def get_link_base(self):
        pass

    def save(self, *args, **kwargs):
        if self.id is None:
            super(LinkModel, self).save(*args, **kwargs)
        if not self.link:
            self.link = generate_link(self.get_link_base(), self.id)
        super(LinkModel, self).save()


class UUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True

class Executor(UUIDModel):
    pass


class API_Analyses(Executor, LinkModel):
    title = models.CharField(max_length=1000, blank=True, verbose_name='Короткий заголовок')
    long_title = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Длинный заголовк')
    is_unique = models.BooleanField(blank=True, null=False, verbose_name='Уникальный')
    research_id = models.CharField(max_length=250, blank=True, verbose_name='Код анализа')
    biomaterial = models.ForeignKey('API_Biomaterial', on_delete=models.CASCADE,
                                    verbose_name='Биоматериал')
    price = models.FloatField(blank=True, null=True, verbose_name='Цена')
    preparation_doctor = models.TextField(blank=True, null=True, verbose_name='Инструкция для врача ')
    document_img = models.FileField(max_length=1000, blank=True, null=True, upload_to='imgAnalyse',
                                    verbose_name='Файл для документа')
    main_img = models.ImageField(max_length=1000, blank=True, null=True, upload_to='imgAnalyse',
                                verbose_name='Главная картинка')
    description_patient = models.TextField(blank=True, null=True, verbose_name='Описание для пациентов')
    preparation_patient = models.TextField(blank=True, null=True, verbose_name='Инструкция для пациентов')
    description_doctor = models.TextField(blank=True, null=True, verbose_name='Описание для врачей')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    category = models.ForeignKey('API_CategoryAnalyses', on_delete=models.CASCADE, verbose_name='Категорий анализов',
                                 db_column='category', null=True)
    vendor_code = models.CharField(max_length=250, verbose_name='Артикул анализа')
    terms_of_analyzes = models.ForeignKey('API_TermsAnalyses', on_delete=models.CASCADE, db_column='terms_of_analyzes',
                                          verbose_name='Сроки анализов', null=True)


    class Meta:
        db_table = 'API_Analyses'
        verbose_name = _('Анализ')
        verbose_name_plural = _('Анализы')

    def __str__(self):
        return self.title

    def get_link_base(self):
        return self.title


class API_PackageAnalyses(Executor, LinkModel):
    package = models.ManyToManyField(API_Analyses,
                                      related_name='packages', verbose_name='Какие анализы входят')
    name_of_package = models.CharField(max_length=250, verbose_name='Название пакетов анализов')
    price_of_package = models.FloatField(verbose_name='Цена пакетов')
    main_img = models.ImageField(max_length=1000, blank=True, null=True, upload_to='imgAnalyse',
                                    verbose_name='Главная картинка')
    terms_of_analyzes = models.ForeignKey('API_TermsAnalyses', null=True, on_delete=models.CASCADE,
                                          verbose_name='Сроки анализов',
                                          db_column='terms_of_analyzes')

    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.


    class Meta:
        db_table = 'API_PackageAnalyses'
        verbose_name = _('Пакет анализа')
        verbose_name_plural = _('Пакеты анализов')

    def __str__(self):
        return self.name_of_package

    def get_link_base(self):
        return self.name_of_package

class API_Image(Executor):
    analyse = models.ForeignKey('API_Analyses', on_delete=models.CASCADE, related_name='banner_images',
                                null=True, verbose_name='Анализы' )

    banner_image = models.ImageField(upload_to='imgAnalyse', verbose_name='Картинка для баннера')

    class Meta:
        db_table = 'API_Image'
        verbose_name = _('Картинка')
        verbose_name_plural = _('Картинки')


class API_CategoryAnalyses(Executor):

    title = models.CharField(max_length=250, blank=True, null=True, verbose_name='Название категорий')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_CategoryAnalyses'
        verbose_name = _('Категория')
        verbose_name_plural = _('Категории')

    def __str__(self):
        return self.title




class API_TermsAnalyses(Executor):
    title = models.CharField(max_length=15, blank=True, null=True, verbose_name='Сроки анализов')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_TermsAnalyses'
        verbose_name = _('Срок анализа')
        verbose_name_plural = _('Сроки анализов')

    def __str__(self):
        return self.title


class API_Biomaterial(Executor):
    title = models.CharField(max_length=250, null=True, verbose_name='Биоматериалы')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_Biomaterial'
        verbose_name = _('Биоматериал')
        verbose_name_plural = _('Биоматериалы')


    def __str__(self):
        return self.title


class API_News(Executor, LinkModel):
    img_news = models.ImageField(max_length=255, blank=True, null=True, upload_to='imgNews', verbose_name='Картинка новости')
    title = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Заголовок новости')
    href = models.CharField(max_length=255, blank=True, null=True, verbose_name="Ссылка")
    date = models.CharField(max_length=255, blank=True, null=True, verbose_name="Дата")
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.


    class Meta:
        db_table = 'API_News'
        verbose_name = _('Новость')
        verbose_name_plural = _('Новости')

    def __str__(self):
        return self.title

    def get_link_base(self):
        return self.title[:10]


class API_Contacts(Executor, LinkModel):
    address = models.CharField(max_length=100, blank=True, verbose_name='Адрес')
    phone_number = models.CharField(max_length=11, blank=True, null=True, verbose_name='Номер телефона')
    map = models.CharField(max_length=250, blank=True, null=True, verbose_name='Карта')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_Contacts'
        verbose_name = _('Контакт')
        verbose_name_plural = _('Контакты')

    def __str__(self):
        return '{} {} {}'.format(self.address, self.phone_number, self.map)

    def get_link_base(self):
        return self.address

class API_Promotions(Executor, LinkModel):
    image = models.ImageField(upload_to='imgPromotion', verbose_name='Картинка для акций')
    title = models.CharField(max_length=250, blank=True, null=True, verbose_name='Заголовок акций')
    text = models.TextField(blank=True, null=True, verbose_name='Текст акций')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.


    class Meta:
        db_table = 'API_Promotions'
        verbose_name = _('Скидка')
        verbose_name_plural = _('Скидки')

    def __str__(self):
        return self.title

    def get_link_base(self):
        return self.title

class API_Review(Executor, LinkModel):
    # created_by = models.ForeignKey('authenticate.API_Users', on_delete=models.SET_NULL, verbose_name='Автор отзыва', null=True)
    name = models.CharField(max_length=30, verbose_name='Имя', null=True)
    text_review = models.TextField(blank=True, null=True, verbose_name='Текст отзыва')
    ratings = models.IntegerField(validators=[MaxValueValidator(5)], verbose_name='Рейтинг', null=True)
    date = models.CharField(max_length=255, blank=True, null=True, verbose_name='Дата')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_Reviews'
        verbose_name = _('Отзыв')
        verbose_name_plural = _('Отзывы')

    def __str__(self):
        return '{} {}'.format(self.name, self.date)

    def get_link_base(self):
        return self.text_review[:10]

class API_QaA(Executor, LinkModel):
    title = models.CharField(max_length=250, blank=True, null=True, verbose_name='Вопрос')
    answer = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Ответ')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_QaA'
        verbose_name = _('Вопрос и ответ')
        verbose_name_plural = _('Вопросы и ответы')

    def __str__(self):
        return '{} {}'.format(self.title, self.answer)

    def get_link_base(self):
        return self.title

class API_AboutUs(Executor, LinkModel):
    title = models.CharField(max_length=250, blank=True, verbose_name='Заголовок')
    text = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Текст')
    image = models.ImageField(max_length=100, blank=True, null=True, upload_to='imgAboutUs', verbose_name='Картинка')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.


    class Meta:
        db_table = 'API_AboutUs'
        verbose_name = _('О нас')
        verbose_name_plural = _('О нас')

    def __str__(self):
        return self.title

    def get_link_base(self):
        return self.title
