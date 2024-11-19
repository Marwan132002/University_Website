<?php

namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentExamSchedulerResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<int|string, mixed>
     */
    public function toArray($request):array
    {
        return [
            'student_id'=>$this->student_id,
            'hall_code'=>$this->hall_code,
            'type'=>$this->type,
            'date'=>$this->date,
            'course_name' => $this->course_name,
            'course_code' => $this->course_code,
            'day' => $this->day,
            'time' => $this->time,
        ];
    }
}