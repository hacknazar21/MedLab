from django.core.management.base import BaseCommand

from front.models import Api_Analyses, API_News

from transliterate import translit
import re


def generate_link(text):
    link = translit(text.replace(' ', '-'), 'ru', reversed=True).lower()
    link = re.sub(r'[^A-Za-z0-9\-]+', '', link)
    return link

class Command(BaseCommand):
    help = 'Generate link for all models with link'

    def set_link(self, obj, get_link_callable=None):
        if get_link_callable:
            link = get_link_callable(obj)
        else:
            link = obj.title

        obj.link = f"{generate_link(link)}-{obj.pk}"
        obj.save()

    def set_model_links(self, model, get_link_callable=None):
        qs = model.objects.all()
        for p in qs:
            self.set_link(p, get_link_callable)

    def handle(self, *args, **options):
        self.set_model_links(Api_Analyses)
        self.set_model_links(API_News)

        # self.set_model_links(Category, lambda c: str(c).replace('-', ''))
        # self.set_model_links(Brand)
        # self.set_model_links(BlogPost, lambda b: str(b))