@component('mail::message')

# Welcome to our application
you registered successfully! <br>
here's your password:
<br>
<h1>{{$password}}</h1>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
