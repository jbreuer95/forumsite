<?php

use Illuminate\Database\Migrations\Migration;

class AddThumbnailurlToNews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('news', function($table){
            $table->string('thumbnailurl');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('news', function($table){
            $table->dropColumn('thumbnailurl');
        });
    }
}
