from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import  AllowAny

from authenticate.serializer import RegisterSerializer


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user.is_active = True
        user.save()
        return Response({
            "user": serializer.data,
            "message": "User Created Successfully.",
        })
