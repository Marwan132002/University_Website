<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{url('file/store')}}" method="post" enctype="multipart/form-data"> 
        @csrf
    <p> inter file exel</p>
    <select name="select" >
        <option value="student">student</option>
        <option value="cource">cource</option>
    </select>
    <input type="file" name="file" id="file">
    <button type="submit">submit</button>
    </form>
    
</body>
</html>