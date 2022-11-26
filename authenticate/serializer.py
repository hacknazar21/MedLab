from rest_framework import serializers

from authenticate.models import API_Users


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Users
        # exclude = ('password', 'password2', 'avatar', 'address')
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = API_Users
        fields = ('email', 'username', 'password', 'phone_number')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = API_Users.objects.create(**validated_data)
        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance
