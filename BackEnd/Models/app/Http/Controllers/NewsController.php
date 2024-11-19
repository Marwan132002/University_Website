<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Http\Resources\NewsResource;
use App\Http\Requests\AllRequest;
use App\Http\Requests\AdminRequest;
class NewsController extends Controller
{
    public function store(AdminRequest $request){
        $request->validate([
            'image'=>['required','file'],
            'title'=>['required'],
            'description'=>['required']
        ]);
        
       $des = "news_images";
       $image = $request->file('image');
       $image_uploaded_path = $image->store($des, 'public');

       // Create the news entry in the database
       $N = News::create([
           'title' => $request->title,
           'description' => $request->description,
           'image' => $image_uploaded_path,
       ]);
        if ($N){
            $array=[
                'data'=> new NewsResource($N),
                'message'=>'created news',
                'status'=>201,
            ];
            return response($array);

        }
        $array=[
            'data'=> '',
            'message'=>' news not save',
            'status'=>201,
        ];
        return response($array);

    }
    public function Get_All_News(){
        $news=News::all();
        $array=[
            'data'=> NewsResource::collection($news),
            'message'=>'all news',
            'status'=>201,
        ];
        return response($array); 
    }
}
