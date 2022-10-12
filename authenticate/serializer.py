from rest_framework import serializers

from authenticate.models import API_Users

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Users
        exclude = ('password', 'password2', 'avatar', 'address')