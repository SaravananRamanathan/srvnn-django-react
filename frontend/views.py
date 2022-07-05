from django.shortcuts import render

def index(request, *args, **kwargs):
    return render(request, "frontend/index.html") #render the template and react will take care of everything else