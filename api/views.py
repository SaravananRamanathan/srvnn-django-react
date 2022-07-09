from urllib import response
from django.shortcuts import render
from rest_framework import generics, status
from .models import Room
from rest_framework.views import APIView
from .serializers import RoomSerializer, CreateRoomSerializer
from rest_framework.response import Response


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class GetRoom(APIView):
    ""
    serializer_class = RoomSerializer
    lookup_url_kwarg = "code"

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if code:
            room = Room.objects.filter(code=code).first()
            if room:
                data = RoomSerializer(room).data
                data['is_host'] = self.request.session.session_key == room.host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found:': 'Invalid Room code'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Coded not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class CreateRoomView(APIView):
    ""
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        ""
        if not self.request.session.exists(self.request.session.session_key):
            ""
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key

            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=[
                          "guest_can_pause", "votes_to_skip", "created_at"])
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause,
                            votes_to_skip=votes_to_skip)
                room.save()
            return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)
