<div class="col-md-4">
    <div class="block-header">
        <h2>
            <span class="title">Laatste Nieuws</span><span class="decoration"></span><span
                    class="decoration"></span><span class="decoration"></span>
        </h2>
    </div>
    @if(count($news) != 0)
        @foreach($news as $article)
            <div class="media">
                <a class="pull-left" href="{{action('PublicController@article', [$article->slug])}}">
                    {!! HTML::image($article->thumbnailurl,'Blog Message',array('class' => 'media-object')) !!}
                </a>

                <div class="media-body">
                    <h4 class="media-heading"><a href="{{action('PublicController@article', [$article->slug])}}">{{$article->title}}</a></h4>
                    {!! Str::words(strip_tags($article->body), 15, '...') !!}
                </div>
            </div>
        @endforeach
        <a href="{{action('PublicController@news', '1')}}" class="read-more">Lees meer artikelen...</a>
    @else
        <div class="media">
            <a class="pull-left" href="#">
                {!! HTML::image('http://d1qut4a1r795dy.cloudfront.net/fotos/nieuws/thumbnails/forumThumb.png','Blog Message',array('class' => 'media-object')) !!}
            </a>

            <div class="media-body">
                <h4 class="media-heading"><a href="#">Geen nieuws</a></h4>
                Er zijn op dit moment geen nieuws artikelen
            </div>
        </div>

    @endif
</div>