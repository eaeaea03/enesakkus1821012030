var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next){
  res.render('mekanlar-liste',
	{
		'baslik':'Anasayfa',
		'footer':'Enes Akkuş 2020',
		'sayfaBaslik':{
			'siteAd':'Mekan32',
			'aciklama':'Isparta civarındaki mekanları keşfedin!'
		},
		'mekanlar':[
		  {
		  	'ad':'Starbucks',
		  	'adres':'Centrum Garden',
		  	'puan':3,
		  	'imkanlar':['Kahve','Çay','Pasta'],
		  	'mesafe':'10km'
		  },
		  {
		  	'ad':'Gloria Jeans',
		  	'adres':'SDÜ Doğu Kampüsü',
		  	'puan':2,
		  	'imkanlar':['Kahve','Kek','Çay'],
		  	'mesafe':'1km'
		  },
		  {
		  	'ad':'Gramafon Kafe',
		  	'adres':'Ülkü Sokak',
		  	'puan':4,
		  	'imkanlar':['Kahve','Çay'],
		  	'mesafe':'4km'
		  },
		  {
		  	'ad':'Ferah Kebap Salonu',
		  	'adres':'Kulubey Mahallesi',
		  	'puan':3,
		  	'imkanlar':['Kebap','Dürüm','Yemek'],
		  	'mesafe':'2km'
		  },
		  {
		  	'ad':'Demlik',
		  	'adres':'SDÜ Doğu Kampüsü',
		  	'puan':2,
		  	'imkanlar':['Kafe','Fast Food','Yemek'],
		  	'mesafe':'7km'
		  }
		]
	}
   );
}
const mekanBilgisi=function(req,res){
	res.render('mekan-detay',
	  {
	  'baslik':'Mekan Bilgisi',
	  'footer':'Enes Akkuş 2020',
	  'sayfaBaslik':'Starbucks',
	  'mekanBilgisi':{
	  	'ad':'Starbucks',
	  	'adres':'Centrum Garden AVM',
	  	'puan':3,
	  	'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
	  	'koordinatlar':{
	  		'enlem':37.781885,
	  		'boylam':30.566034
	  	},
	  	'saatler':[
	  	  {
	  	  	'gunler':'Pazartesi-Cuma',
	  	  	'acilis':'7.00',
	  	  	'kapanis':'23.00',
	  	  	'kapali':false
	  	  },
	  	  {
	  	  	'gunler':'Cumartesi',
	  	  	'acilis':'9.00',
	  	  	'kapanis':'22.00',
	  	  	'kapali':false
	  	  },
	  	  {
	  	  	'gunler':'Pazar',
	  	  	'kapali':true
	  	  }
	  	],
	  	'yorumlar':[
	  	  {
	  	  	'yorumYapan':'Enes Akkuş',
	  	  	'puan':3,
	  	  	'tarih':'02.12.2020',
	  	  	'yorumMetni':'Güzel mekan.'
	  	  }
	  	]
	  }
    })
}
const yorumEkle=function(req,res){
	res.render('yorum-ekle',{'title':'Yorum Ekle'});
}

module.exports = {
	anaSayfa,
	mekanBilgisi,
	yorumEkle,

};