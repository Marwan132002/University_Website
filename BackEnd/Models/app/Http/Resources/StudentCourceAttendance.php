<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentCourceAttendance extends JsonResource
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
        'counter_lec'=>$this->counter_lec,
        'counter_sec'=>$this->counter_sec,
        'warning_no_1'=>$this->warning_no_1,
        'warning_no_2'=>$this->warning_no_2,
        'Banned(final exam)'=>$this->Banned,
        ];
    }
}
