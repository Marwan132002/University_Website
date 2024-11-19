<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentCourceGrade extends JsonResource
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
        'grade'=>$this->grade,
        'max_grade'=>$this->max_grade,
        'type'=>$this->type,];
    }
}
