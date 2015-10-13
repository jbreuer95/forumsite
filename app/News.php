<?php

namespace Forum;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';

    protected $fillable = ['title', 'body', 'slug', 'pictureurl','thumbnailurl'];

    public function setPictureurlAttribute($value){
        if($value == null){
            $this->attributes['pictureurl'] = 'http://svforum.s3.eu-central-1.amazonaws.com/fotos/nieuws/forum561d0b7ba2a117.80797838.png';
        } else {
            $this->attributes['pictureurl'] = $value;
        }
    }

    public function setThumbnailurlAttribute($value){
        if($value == null){
            $this->attributes['thumbnailurl'] = 'http://svforum.s3.eu-central-1.amazonaws.com/fotos/nieuws/thumbnails/forumThumb.png';
        } else {
            $this->attributes['thumbnailurl'] = $value;
        }
    }
}
