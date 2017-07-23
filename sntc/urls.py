from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

from website import views

urlpatterns = [
    url(r'^$', 'website.views.home', name='home'),
    url(r'^clubs/aero_modelling$', 'website.views.amc', name='amc'),
    url(r'^clubs/astronomy$', 'website.views.astro', name='astro'),
    url(r'^clubs/cops$', 'website.views.cops', name='cops'),
    url(r'^clubs/green$', 'website.views.green', name='green'),
    url(r'^clubs/troc$', 'website.views.troc', name='troc'),
    url(r'^clubs/robotics$', 'website.views.robotics', name='robotics'),
    url(r'^clubs/sae$', 'website.views.sae', name='sae'),
    url(r'^clubs/cef$', 'website.views.cef', name='cef'),
    url(r'^teams/trident$', 'website.views.trident', name='trident'),
    url(r'^teams/vocowa$', 'website.views.vocowa', name='vocowa'),
    url(r'^teams/auv$', 'website.views.auv', name='auv'),
    url(r'^app/$', 'website.views.app', name='app'),
    url(r'^admin/', include(admin.site.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
