<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeachingAssistantSchedularResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'course_code'=>$this->course_code,
        'course_name'=>$this->course_name,
        'time'=>$this->time,
        'day'=>$this->day,
        'hall_code'=>$this->hall_code];
    }
}
