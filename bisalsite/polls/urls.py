from django.urls import path
from . import views

urlpatterns = [
    # homepage, not made yet
    path('', views.index, name='index'),

    # account creation page
    path('create-account', views.account_creation, name='account_creation')
]