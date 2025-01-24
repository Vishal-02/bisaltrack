from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# homepage?
def index(request):
    # context = {}
    template = loader.get_template('polls/test.html')
    return HttpResponse(template.render(request=request))

# account creation page
def account_creation(request):
    template = loader.get_template('polls/new_account.html')
    return HttpResponse(template.render(request=request))