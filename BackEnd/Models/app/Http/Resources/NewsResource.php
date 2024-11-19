<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'news_code'=>$this->news_code,
        'title'=>$this->title,
        'description'=>$this->description,
        'image'=>$this->image,
        
        ];
    }
}
