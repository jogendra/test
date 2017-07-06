from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect

def home(request):
	return render(request, 'index.html', {})

def amc(request):
	return render(request, 'amc.html', {})

def astro(request):
	return render(request, 'astro.html', {})

def cops(request):
	return render(request, 'cops.html', {})

def green(request):
	return render(request, 'green.html', {})

def troc(request):
	return render(request, 'troc.html', {})

def robotics(request):
	return render(request, 'robotics.html', {})

def sae(request):
	return render(request, 'sae.html', {})

def sae_baja(request):
	return render(request, 'sae-baja.html', {})

def vocowsa(request):
	return render(request, 'vocowsa.html', {})

def auv(request):
	return render(request, 'auv.html', {})

def cef(request):
	return render(request, 'cef.html', {})

def technex(request):
	return render(request, 'technex.html', {})

def app(request):
	return HttpResponseRedirect("https://play.google.com/store/apps/details?id=in.shriyansh.questify&hl=en")
