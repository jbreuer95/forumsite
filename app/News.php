<?php

namespace Forum;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';

    protected $fillable = ['title', 'body', 'slug', 'pictureurl'];
}
