<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class User extends Model
{
    protected $connection = 'mongodb';

    protected $collection = 'users';
    
    protected $fillable = [
        'id',
        'name',
        'login',
        'email',
        'password'
    ];
    
    protected $dates = ['created_at', 'updated_at'];
}
