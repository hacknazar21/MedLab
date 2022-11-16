import abc

from django.core.exceptions import ObjectDoesNotExist


class BaseCell:
    def __init__(self, field_name, allow_null=True, empty_value=None):
        self.field_name = str(field_name)
        self.allow_empty = bool(allow_null)
        self.empty_value = empty_value

    def process_value(self, value):
        if value is None and self.allow_empty:
            return self.empty_value

        if isinstance(value, str):
            value = value.strip()

        return self.process_value_internal(value)

    @abc.abstractmethod
    def process_value_internal(self, value):
        pass


class NoneCell(BaseCell):
    def process_value_internal(self, value):
        return None


class CastCell(BaseCell):
    def __init__(self, field_name, field_type, **kwargs):
        super().__init__(field_name, **kwargs)
        self.field_type = field_type

    def process_value_internal(self, value):
        if not value and self.allow_empty:
            return self.empty_value
        return self.field_type(value)


class BooleanCell(BaseCell):
    def __init__(self, field_name, true_values):
        super().__init__(field_name)
        self.true_values = set(true_values)

    def process_value_internal(self, value):
        return value in self.true_values


class ForeignKeyCell(BaseCell):
    def __init__(self,
                 field_name, related_model, lookup_field,
                 creation_field=None, creation_params=None, try_create=True):
        super().__init__(field_name)
        self.related_model = related_model
        self.lookup_field = str(lookup_field)
        self.creation_field = creation_field or lookup_field
        self.try_create = bool(try_create)
        self.creation_params = dict() if creation_params is None else creation_params

    def try_create_related_object(self, value):
        if not self.try_create:
            return None

        data = {self.creation_field: value}
        obj = self.related_model(**data, **self.creation_params)
        obj.save()
        return obj

    def try_get_related_field(self, value):
        try:
            query = {self.lookup_field: value}
            return self.related_model.objects.get(**query)
        except ObjectDoesNotExist:
            return self.try_create_related_object(value)

    def process_value_internal(self, value):
        return self.try_get_related_field(value)


class CategoryCell(ForeignKeyCell):
    pass
