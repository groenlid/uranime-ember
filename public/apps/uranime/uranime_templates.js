
Ember.TEMPLATES['notifications'] = Ember.Handlebars.compile('	<a href="#" id="notification" rel="popover" data-title="title" data-content="content">		<span class="badge badge-inverse">2</span>	</a>	<div class="popover bottom" id="notifications" {{bindAttr name="name"}}>		<div class="arrow"></div>		<div class="popover-inner">			<h3 class="popover-title">Notifications</h3>			<div class="popover-content">				<div class="row-fluid">					<div class="span2">						<img src="http://gravatar.com/avatar/79bf7c793958b269fc2ad82c1c36afd7.jpg?s=20&r=pg">					</div>					<div class="span8">						<small><a href="#">Larseknu</a> commented on episode 14 of bleach</small>					</div>				</div>				<hr>				<div class="row-fluid">					<div class="span2">						<img src="http://gravatar.com/avatar/79bf7c793958b269fc2ad82c1c36afd7.jpg?s=20&r=pg">					</div>					<div class="span8">						<small><a href="#">Larseknu</a> commented on episode 14 of bleach</small>					</div>				</div>				<p></p>			</div>		</div>	</div>');

Ember.TEMPLATES['anime'] = Ember.Handlebars.compile('{{#with controller.content}}<header id="fanart" {{bindAttr style="fanartStyle"}}>	<div class="animetitle"><h1>.hack//Roots</h1></div></header><div class="transparent-bar">	<h2>{{title}}</h2></div><div class="container white">	<div class="row-fluid">		<div class="span8 pull-left">			<p class="animedesc">				{{desc}}			</p>		   		   <!-- LATEST EPISODES -->		   <ul>		   {{#each episode in lastEpisodes}}		   		<li>{{episode.number}}</li>		   {{/each}}		   </ul>		   <ul>			<!-- EPISODES -->			{{#each episode in episodes}}				<div class="episode row-fluid">					<span class="episodeImage span2">						<a href="#"><img {{bindAttr src="episode.imageURL"}} alt=""></a>					</span>					<span class="episodeContent span9 pull-right">						<span class="episodeName"><a href="#">{{episode.name}}</a>						</span><span class="episodeTime">								Episode {{episode.number}}								aired {{episode.aired}}</span>					</span>				</div>			{{/each}}			</ul>			<!--			<div class="progressbar">				<div id="progress" style="width:50%;">					<span><strong>13</strong> of <strong>26</strong> seen</span>				</div>			</div>			<div class="episode row-fluid">				<span class="episodeImage span2">					<a href="/episode/view/19087"><img src="http://src.sencha.io/117/http://urani.me/attachments/photos/orginal/5030bfeb-75a0-4e90-874e-24edb8adc2dc.jpg" alt=""></a>				</span>				<span class="episodeContent span9 pull-right">					<span class="episodeName"><a href="/episode/view/19087">Welcome to "The World"</a>					</span><span class="episodeTime">							Episode 1							aired 2006-04-06</span>				</span>			</div>-->		</div>		<div class="span4 pull-right">			<img class="animeimage pull-right" {{bindAttr src="imageURL"}}>		</div>	</div></div>{{/with}}');

Ember.TEMPLATES['search'] = Ember.Handlebars.compile('<div class="container white">{{#if controller.content}}{{#each anime in controller.content}}	<div class="pull-left margin">		<div class="animethumbnail">			<div class="animethumbnail-fav"></div>			<a href="#" {{action goToAnime anime target="parentView"}}><img class="animethumbnail-inner" {{bindAttr src="anime.fanartURLSmall"}}></a>		</div>		<p>{{anime.title}}</p>	</div>{{/each}}{{/if}}</div>');

Ember.TEMPLATES['application'] = Ember.Handlebars.compile('<div class="navbar navbar-fixed-top">	<div class="navbar-inner">		<div class="container">			<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">				<span class="icon-bar"></span>				<span class="icon-bar"></span>				<span class="icon-bar"></span>			</a>			<a class="brand" href="#">Uranime</a>			<ul class="nav hidden-phone">					{{#view Uranime.SearchFormView class="navbar-search"}}						{{view Ember.TextField valueBinding="view.searchQuery" placeholder="Search for anime" class="input-large search-query"}}						<!-- <button type="submit" class="btn">Search</button>-->					{{/view}}			</ul>			<div class="nav-collapse">					<ul class="nav pull-right">					<!-- Notification -->					<!--					<li class="divider-vertical"></li>					<li class="dropdown">						<a href="#" class="dropdown-toggle" data-toggle="dropdown">							<span class="badge badge-inverse">2</span>							<b class="caret"></b>						</a>						<ul class="dropdown-menu span3 smalltext">							<div class="row-fluid">								<div class="well well-small">									<strong>Newly added episodes</strong>								</div>															</div>						</ul>					</li>					-->					<!-- Notification w/popover -->					<li class="divider-vertical"></li>					{{view Uranime.NotificationsView}}					<!-- User profile -->					<li class="divider-vertical"></li>					<li class="dropdown">						<a href="#" class="dropdown-toggle" data-toggle="dropdown">							 <img src="http://www.gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa.jpg?size=20"> Groenlid<b class="caret"></b>						</a>						<ul class="dropdown-menu">							something						</ul>					</li>					<!--					<li class="">						<a href="#">Logout</a>					</li>-->				</ul>			</div>		</div>	</div></div><div class="navbar-fixed-top visible-phone">  		<div class="navbar-inner">  			<div class="row-fluid">	  			{{#view Uranime.SearchFormView class="navbar-form span9"}}						{{view Ember.TextField valueBinding="view.searchQuery" placeholder="Search for anime" class="input-large search-query"}}						<!--<button type="submit" class="btn hidden">Search</button>-->					{{/view}}			</div>  		</div>  	</div>{{outlet}}');
