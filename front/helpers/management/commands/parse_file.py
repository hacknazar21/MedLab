from django.core.management import BaseCommand

from csv_parsers import cells
from csv_parsers.parsers import CsvParser
from front.models import API_Analyses, API_Biomaterial, API_TermsAnalyses, API_CategoryAnalyses


class Command(BaseCommand):
    help = 'Parse file'

    def add_arguments(self, parser):
        parser.add_argument(
            'filename', type=str,
            help='CSV file to parse'
        )

    def handle(self, *args, **options):
        filename = options.get('filename', None)
        if filename is None:
            raise AttributeError('Filename is not provided')

        parser = CsvParser(
            API_Analyses,
            [
                cells.CastCell('title', str, allow_null=True, empty_value='Empty'),
                cells.CastCell('long_title', str),
                cells.BooleanCell('is_unique', ['Да', 'да']),
                cells.CastCell('research_id', str),
                cells.ForeignKeyCell('biomaterial', API_Biomaterial, 'title__iexact', 'title'),
                cells.CastCell('price', float, empty_value=0),
                cells.CastCell('preparation_doctor', str),
                cells.CastCell('description_patient', str),
                cells.CastCell('preparation_patient', str),
                cells.CastCell('description_doctor', str),
                cells.ForeignKeyCell('category', API_CategoryAnalyses, 'title'),
                cells.CastCell('vendor_code', str, allow_null=True, empty_value='Пусто'),
                cells.ForeignKeyCell('terms_of_analyzes', API_TermsAnalyses, 'title')
            ]
        )
        with open(filename, newline='') as f:
            parser.process_csv(f)

