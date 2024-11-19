<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class fileresource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return[
            'id'=>$this->id,
            'date'=>$this->date,
            'name'=>$this->name,
            'type'=>$this->type,
            'file'=>$this->file,
        ];
    }
}
