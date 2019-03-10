from django.contrib.auth import get_user_model
from typing import Any

# from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

User = get_user_model()

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'email')
        read_only_fields = ('id', )
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data: Any) -> Any:
        print("OBJECT CREATE")
        user_obj = User.objects.create(
            email=validated_data['email']
        )
        user_obj.set_password(validated_data["password"])
        user_obj.save()

        return user_obj


