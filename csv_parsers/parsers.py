import csv
import sys
import typing
from logging import getLogger

from django.db import IntegrityError

from csv_parsers.cells import BaseCell
from csv_parsers.exceptions import ParserError

logger = getLogger(__name__)


class CsvParser:
    def __init__(self, model_class, cells: typing.Iterable[BaseCell], skip_first: bool = True):
        self.model_class = model_class
        self.cells = list(cells)
        self.skip_first = bool(skip_first)

    def process_csv(self, file):
        reader = csv.reader(file)
        skip_first = self.skip_first
        try:
            for row in reader:
                if skip_first:
                    skip_first = False
                    continue
                self.process_row(row)

        except csv.Error as e:
            sys.exit('file {}, line {}: {}'.format(file.name, reader.line_num, e))

    def process_row(self, row):
        if len(row) != len(self.cells):
            raise ParserError('Length of row and cells is not equal')

        data = self.retrieve_data(row)
        obj = self.model_class(**data)
        try:
            obj.save()
        except IntegrityError:
            logger.critical(f'Failed to create object: {data}')
            raise
        return obj

    def retrieve_data(self, row):
        data = dict()
        for i, value in enumerate(row):
            cell = self.cells[i]
            data[cell.field_name] = cell.process_value(value)

        return data
