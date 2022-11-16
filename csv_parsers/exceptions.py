class ParserError(Exception):
    """
    Raised when parser cannot parse a row
    """


class CellError(Exception):
    """
    Raised when cell cannot retrieve the value
    """
