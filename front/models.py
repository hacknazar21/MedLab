from django.db import models
from django.utils.translation import gettext_lazy as _


class Api_Analyses(models.Model):
    title = models.CharField(max_length=1000, blank=True, verbose_name='Короткий заголовок')
    long_title = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Длинный заголовк')
    is_unique = models.BooleanField(blank=True, null=False, verbose_name='Уникальный')
    research_id = models.CharField(max_length=250, blank=True, primary_key=True, verbose_name='Код анализа')
    biomaterial = models.ForeignKey('API_Biomaterial', on_delete=models.CASCADE, blank=True, null=True, verbose_name='Биоматериал')
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
    category = models.ForeignKey('API_CategoryAnalyses', on_delete=models.CASCADE, verbose_name='Категорий анализов',
                                 db_column='category')
    vendor_code = models.CharField(max_length=250, verbose_name='Артикул анализа')
    terms_of_analyzes = models.ForeignKey('API_TermsAnalyses', on_delete=models.CASCADE, db_column='terms_of_analyzes',
                                          verbose_name='Сроки анализов')
    link = models.CharField(max_length=250, verbose_name='Cсылка для новости (Пример: Короткий заголовок-Код анализа)', null=True)

    class Meta:
        db_table = 'API_Analyses'
        verbose_name = _('Анализ')
        verbose_name_plural = _('Анализы')

    def __str__(self):
        return self.title


class API_CategoryAnalyses(models.Model):
    title = models.CharField(max_length=250, blank=True, null=True)
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_CategoryAnalyses'
        verbose_name = _('Категория')
        verbose_name_plural = _('Категории')

    def __str__(self):
        return self.title



class API_TermsAnalyses(models.Model):
    title = models.CharField(max_length=15, blank=True, null=True, verbose_name='Сроки анализов')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_TermsAnalyses'
        verbose_name = _('Срок анализа')
        verbose_name_plural = _('Сроки анализов')

    def __str__(self):
        return self.title

class API_Biomaterial(models.Model):
    title = models.CharField(max_length=250, null=True, verbose_name='Биоматериалы')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.

    class Meta:
        db_table = 'API_Biomaterial'
        verbose_name = _('Биоматериал')
        verbose_name_plural = _('Биоматериалы')


    def __str__(self):
        return self.title


class API_News(models.Model):
    img_news = models.FileField(max_length=255, blank=True, null=True, upload_to='imgNews', verbose_name='Картинка новости')
    title = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Заголовок новости')
    href = models.CharField(max_length=255, blank=True, null=True, verbose_name="Ссылка")
    date = models.CharField(max_length=255, blank=True, null=True, verbose_name="Дата")
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    link = models.CharField(max_length=250, null=True, verbose_name='Cсылка для новости (Пример: Заголовок новости-)')

    class Meta:
        db_table = 'API_News'
        verbose_name = _('Новость')
        verbose_name_plural = _('Новости')

    def __str__(self):
        return self.title


class API_Contacts(models.Model):
    address = models.CharField(max_length=100, blank=True, primary_key=True, verbose_name='Адрес')
    phone_number = models.CharField(max_length=11, blank=True, null=True, verbose_name='Номер телефона')
    map = models.CharField(max_length=250, blank=True, null=True, verbose_name='Карта')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    link = models.CharField(max_length=250, verbose_name='Ссылка для контактов')
    class Meta:
        db_table = 'API_Contacts'
        verbose_name = _('Контакт')
        verbose_name_plural = _('Контакты')

    def __str__(self):
        return '{} {} {}'.format(self.address, self.phone_number, self.map)


class API_Promotions(models.Model):
    title = models.CharField(max_length=250, blank=True, null=True, verbose_name='Заголовок акций')
    text = models.CharField(max_length=100, blank=True, null=True)
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    link = models.CharField(max_length=250, verbose_name='Ссылка для скидок')

    class Meta:
        db_table = 'API_Promotions'
        verbose_name = _('Скидка')
        verbose_name_plural = _('Скидки')

    def __str__(self):
        return self.title


# class API_Review(models.Model):
#     firstname = models.CharField(max_length=15, blank=True, null=True, verbose_name='Имя')
#     lastname = models.CharField(max_length=15, blank=True, null=True, verbose_name='Фамилия')
#     avatar = models.FileField(max_length=255, blank=True, null=True, upload_to='imgAvatar')
#     text_review = models.TextField(blank=True, null=True)
#     date = models.CharField(max_length=255, blank=True, null=True, verbose_name='Дата')
#     createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
#     updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
#     username = models.CharField(max_length=15, blank=True, null=True)
#     link = models.CharField(max_length=250, verbose_name='Ссылка для отзывов')
#
#     class Meta:
#         db_table = 'API_Reviews'
#         verbose_name = _('Отзыв')
#         verbose_name_plural = _('Отзывы')
#
#     def __str__(self):
#         return '{} {} {} {}'.format(self.firstname, self.lastname, self.username, self.date)

class API_QaA(models.Model):
    title = models.CharField(max_length=250, blank=True, null=True)
    answer = models.CharField(max_length=1000, blank=True, null=True)
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    link = models.CharField(max_length=250, verbose_name='Ссылка для вопросов и ответов')

    class Meta:
        db_table = 'API_QaA'
        verbose_name = _('Вопрос и ответ')
        verbose_name_plural = _('Вопросы и ответы')

    def __str__(self):
        return '{} {}'.format(self.title, self.answer)


class API_AboutUs(models.Model):
    title = models.CharField(max_length=250, blank=True, primary_key=True, verbose_name='Заголовок')
    text = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Текст')
    image = models.ImageField(max_length=100, blank=True, null=True, upload_to='imgAboutUs', verbose_name='Картинка')
    createdat = models.DateTimeField(db_column='createdAt', auto_now=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt', auto_now_add=True)  # Field name made lowercase.
    link = models.CharField(max_length=250, verbose_name='Ссылка для О нас')

    class Meta:
        db_table = 'API_AboutUs'
        verbose_name = _('О нас')
        verbose_name_plural = _('О нас')

    def __str__(self):
        return self.title


class API_Users(models.Model):
    email = models.CharField(max_length=255, verbose_name='Электронная почта')
    password = models.CharField(max_length=255, blank=True, null=True, verbose_name='Пароль')
    password2 = models.CharField(max_length=255, blank=True, null=True, verbose_name='Повторите пароль')
    phone_number = models.CharField(max_length=255, blank=True, null=True, verbose_name='Номер телефона')
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