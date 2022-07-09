from django.urls import path, include
from django.views import View
from . import views
urlpatterns = [
    path('room/', view=views.RoomView.as_view(), name="room"),
    path('create-room/', view=views.CreateRoomView.as_view(), name="createRoom"),
    path('get-room', view=views.GetRoom.as_view(), name="get-room"),
    path('join-room/', view=views.JoinRoom.as_view(), name="joinRoom")
]
