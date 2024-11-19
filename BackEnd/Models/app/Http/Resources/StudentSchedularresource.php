<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentSchedularresource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'course_name'=>$this->course_name,
        'course_code'=>$this->course_code,
        'day_lec'=>$this->day_lec,
        'hall_code_lec'=>$this->hall_code_lec,
        'time_lec'=>$this->time_lec,
        'day_sec'=>$this->day_sec,
        'hall_code_sec'=>$this->hall_code_sec,
        'time_sec'=>$this->time_sec
    ];
    }
}
