// nigh mode

var nightMode = new NightMode({
  evening: new DayTime.fromString('22:00'),
  morning: new DayTime.fromString('5:30'),
  refreshIntervalInSeconds: 30,
  autoSwitch: true
});

// google analitycs

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61089783-1', 'auto');
ga('send', 'pageview');
