<?php

namespace Svforum;

use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    protected $table = 'vacancies';

    protected $fillable = ['type', 'title', 'picture', 'slug','body', 'description'];

}
