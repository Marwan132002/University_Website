<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use App\Models\News;
class NewsImport implements ToCollection
{
    
    /**
    * @param Collection $collection
    */

    public function collection(Collection $rows)
    {
        
        foreach ($rows as $row) 
        {
            News::create([
            'news_code'=> $row['news_code'],
            'title'=> $row['title'],
            'description'=> $row['description'],
            // 'image'=> $row['image'],
            ]);
            
        }
    }
}
