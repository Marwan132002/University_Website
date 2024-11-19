<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExecuseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return[
            'number'=>$this->number,
            'state'=>$this->state,
            'description'=>$this->description,
            'student_id'=>$this->student_id,
            'file'=>$this->file
        ];
    }
}
