from django.core.management import BaseCommand

from front.models import API_CategoryAnalyses


class Command(BaseCommand):
    help = 'Fix categories'

    @staticmethod
    def strip_title(title):
        return title.strip('() ')

    @staticmethod
    def get_or_create_category(title, parent=None):
        try:
            return API_CategoryAnalyses.objects.get(title__iexact=title)
        except API_CategoryAnalyses.DoesNotExist:
            return API_CategoryAnalyses.objects.create(title=title, parent=parent)

    def handle(self, *args, **options):
        categories = API_CategoryAnalyses.objects.all()

        for c in categories:
            parts = c.title.split('(')
            if len(parts) <= 1:
                continue

            parent_title, subcategory_title = [self.strip_title(p) for p in parts]
            c.parent = self.get_or_create_category(parent_title)
            c.title = subcategory_title
            c.save()
