<?php

namespace Svforum;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';

    protected $fillable = ['title', 'body', 'slug', 'pictureurl','thumbnailurl'];
}
